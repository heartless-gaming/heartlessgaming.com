import express from 'express'
import fetch from 'node-fetch'
import Redis from 'ioredis'
import gamedig from 'gamedig'

const app = express()
const redis = new Redis()

// Get a few YouTube videos of our channel
const getYT = async (req, res) => {
  const apiKey = process.env.YT_API_KEY
  const playlistId = 'UUvItaPYGwf5bI7HelUiu14w' // heartless upload playlist id
  const maxResults = 6
  const ytAPIbaseURL = 'https://youtube.googleapis.com/youtube/v3'
  const ytPlaylistURL = `${ytAPIbaseURL}/playlistItems`
  const ytVideosURL = `${ytAPIbaseURL}/videos`

  const getVideosIdsURL = `${ytPlaylistURL}?part=contentDetails&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`

  // Get the videos ids from the upload playlist
  const fetchVideoIds = await fetch(getVideosIdsURL)
  const jsonVideosIds = await fetchVideoIds.json()
  const videoIds = jsonVideosIds.items.map((vid) => vid.contentDetails.videoId)
  let videoIdsStr = '' // Build the video query &id= part
  videoIds.forEach((id) => {
    videoIdsStr = `${videoIdsStr}&id=${id}`
  })

  // Build & Execute the video query
  const getVideosURL = `${ytVideosURL}?part=snippet%2CcontentDetails${videoIdsStr}&key=${apiKey}`
  const fetchVideos = await fetch(getVideosURL)
  const jsonVideos = await fetchVideos.json()

  // Format the query Result
  const response = []
  jsonVideos.items.forEach((vid) => {
    // Formating duration string return from youtube eg : PT6M42S
    let duration = vid.contentDetails.duration
    duration = duration.substring(2) // cut the first 2 characters
    duration = duration.slice(0, -1) // cut the last characters
    if (duration.includes('M')) {
      if (parseInt(duration.split('M')) > 1) {
        duration = `${duration.split('M')[0]} minutes`
      } else {
        duration = `${duration.split('M')[0]} minute`
      }
    } else {
      // Video is less than 1 minutes
      duration = `${duration} secondes` // Not handling plural for seconds lol
    }

    response.push({
      url: `https://www.youtube.com/watch?v=${vid.id}`,
      title: vid.snippet.title,
      thumbnail: vid.snippet.thumbnails.medium,
      duration,
    })
  })

  // Send the data to redis with an expiration value of 6 hours
  redis.setex('heartlessyt', 21600, JSON.stringify(response))

  // Send away the gathered Youtube videos information
  res.json(response)
}

// YouTube cache middleware with redis key 'heartlessyt'
const ytCache = async (req, res, next) => {
  const heartlessyt = await redis.get('heartlessyt')

  if (heartlessyt === null) {
    next()
  } else {
    res.json(JSON.parse(heartlessyt))
  }
}

// Get our game servers (gs) info
// CSGO query issue : https://github.com/gamedig/node-gamedig/issues/176
const getGS = async (req, res) => {
  const ip = process.env.FETCH_GAME_SERVER_IP || '127.0.0.1'
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

  const response = gsData.map((gs, index) => {
    if (gs.status === 'fulfilled') {
      return {
        name: gs.value.name,
        private: gs.value.password,
        players: gs.value.players.length,
        maxplayers: gs.value.maxplayers,
      }
    } else {
      return {
        error: gs.reason,
      }
    }
  })

  // Send the data to redis with an expiration value of 1 minutes
  redis.set('heartlessgs', JSON.stringify(response))

  res.json(response)
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
app.get('/getYT', ytCache, getYT)
app.get('/getGS', gsCache, getGS)

module.exports = app
