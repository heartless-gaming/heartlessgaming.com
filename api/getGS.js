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
    { type: 'mumbleping', host: ip, port: 64738 },
    { type: 'csgo', host: ip, port: 27015 },
    // { type: 'csgo', host: ip, port: 27016 },
    { type: 'minecraft', host: ip, port: 25565 },
    { type: 'killingfloor2', host: ip, port: 27017 },
    { type: 'killingfloor2', host: ip, port: 27020 },
    { type: 'insurgencysandstorm', host: ip, port: 27132 },
    // { type: 'arkse', host: ip, port: 7810 },
    { type: 'valheim', host: ip, port: 2457 },
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
  console.log(gsData)

  // Format data for consumption
  const response = gsData.reduce((acc, gs) => {
    if (gs.status === 'fulfilled') {
      const obj = {
        game: gs.value.raw.folder,
        name: gs.value.name,
        private: gs.value.password,
        players: gs.value.players.length,
        maxplayers: gs.value.maxplayers,
        connect: `steam://connect/${gs.value.connect}`,
      }
      // Minecraft is special
      if ('vanilla' in gs.value.raw) {
        obj.game = 'mc'
        obj.private = true
        obj.connect = false
      }
      // Mumble
      if (gs.value.connect === '5.39.85.45:64738') {
        obj.game = 'Mumble'
        obj.name = 'Mumble'
        obj.players = gs.value.players
        obj.connect = 'mumble://heartlessgaming.com'
      }
      // ARK
      if (gs.value.connect === '5.39.85.45:7800') {
        obj.connect = 'steam://connect/5.39.85.45:7810'
      }
      // Killing Floor 2
      if (gs.value.raw.game === 'Killing Floor 2') {
        // obj.players = gs.value.raw.rules.BotPlayers
      }

      // Valheim
      if (gs.value.connect === '5.39.85.45:2456') {
        obj.connect = 'steam://connect/5.39.85.45:2457'
      }

      acc.push(obj)
    }

    return acc
  }, [])

  // Send the data to redis
  redis.set('hg:gs', JSON.stringify(response))

  if (res) {
    res.json(response)
  }
}
// Game server info cache middleware with redis key 'hg:gs'
const gsCache = async (req, res, next) => {
  const redisGS = await redis.get('hg:gs')

  if (redisGS === null) {
    next()
  } else {
    res.json(JSON.parse(redisGS))
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
