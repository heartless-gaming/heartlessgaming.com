import express from 'express'
import fetch from 'node-fetch'
import Redis from 'ioredis'

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

  // Build the video query &id= part
  let videoIdsStr = ''
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
  redis.setex('hg:yt', 21600, JSON.stringify(response))

  // Send away the gathered Youtube videos information
  res.json(response)
}

// YouTube cache middleware with redis key 'hg:yt'
const ytCache = async (req, res, next) => {
  const redisYT = await redis.get('hg:yt')

  if (redisYT === null) {
    next()
  } else {
    res.json(JSON.parse(redisYT))
  }
}

/**
 * Routes of the api prefixed with /api in nuxt.config.js
 * Get data from redis cache if available otherwise fetch the data and cache it
 */
app.get('/getYT', ytCache, getYT)

module.exports = app
