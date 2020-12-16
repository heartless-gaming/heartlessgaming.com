import express from 'express'
import Redis from 'ioredis'
import gamedig from 'gamedig'

const app = express()
const redis = new Redis()

// Get our game servers (gs) info
// CSGO query issue : https://github.com/gamedig/node-gamedig/issues/176
const getGS = async (req, res) => {
  const ip = process.env.GAME_SERVER_IP || '127.0.0.1'
  const gameServers = [
    { type: 'csgo', host: ip, port: 27015 },
    { type: 'csgo', host: ip, port: 27016 },
    { type: 'minecraft', host: ip, port: 25565 },
    { type: 'killingfloor2', host: ip, port: 27017 },
    { type: 'killingfloor2', host: ip, port: 27020 },
    { type: 'insurgencysandstorm', host: ip, port: 27132 },
  ]

  // Query a single game server with gamedig
  const gamedigQuery = (gs, index) => {
    return gamedig
      .query({ type: gs.type, host: gs.host, port: gs.port })
      .then((res) => res)
      .catch((err) => Promise.reject(new Error(`${index} - ${gs.type} ${err}`)))
  }

  // Run ALL queries at the same time and returns whatever the outcome
  const gsData = await Promise.allSettled(gameServers.map(await gamedigQuery))
  // Format data for consumption
  const response = gsData.reduce((acc, gs) => {
    if (gs.status === 'fulfilled') {
      const obj = {
        game: gs.value.raw.folder || 'mc',
        name: gs.value.name,
        private: gs.value.password,
        players: gs.value.players.length,
        maxplayers: gs.value.maxplayers,
        connect: `steam://connect/${gs.value.connect}`,
      }
      // Minecraft is special
      if (gs.value.raw.folder === undefined) {
        obj.game = 'mc'
        obj.private = true
      }

      acc.push(obj)
    }

    return acc
  }, [])

  // Send the data to redis with an expiration value of 1 minutes
  redis.set('heartlessgs', JSON.stringify(response))

  if (res) {
    res.json(response)
  }
}
// Game server info cache middleware with redis key 'heartlessgs'
const gsCache = async (req, res, next) => {
  const heartlessgs = await redis.get('heartlessgs')

  if (heartlessgs === null) {
    next()
  } else {
    res.json(JSON.parse(heartlessgs))
  }
}
// refresh game server data every minute with this poor man cron task
setInterval(() => {
  getGS()
}, 60 * 1000)
/**
 * Routes of the api prefixed with /api in nuxt.config.js
 * Get data from redis cache if available otherwise fetch the data and cache it
 */
app.get('/getGS', gsCache, getGS)
// app.get('/getGS', getGS)

module.exports = app
