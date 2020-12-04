import express from 'express'

const app = express()

const topkek = (req, res) => {
  res.send('yay boi !')
}

/**
 * Routes of the api prefixed with /api in nuxt.config.js
 */
app.get('/stripe', topkek)

module.exports = app
