import express from 'express'
import Redis from 'ioredis'
import ovhLib from 'ovh'

const app = express()
const redis = new Redis()
const ovh = ovhLib({
  endpoint: 'ovh-eu',
  appKey: process.env.OVH_APP_KEY,
  appSecret: process.env.OVH_APP_SECRET,
  consumerKey: process.env.OVH_CONSUMER_KEY,
})

const sys = ovhLib({
  endpoint: 'soyoustart-eu',
  appKey: process.env.SYS_APP_KEY,
  appSecret: process.env.SYS_APP_SECRET,
  consumerKey: process.env.SYS_CONSUMER_KEY,
})

// Get a consumer key
/* const getCK = async (req, res) => {
  const URL = '/auth/credential'
  const options = {
    accessRules: [
      { method: 'GET', path: '/*' },
      { method: 'POST', path: '/*' },
      { method: 'PUT', path: '/*' },
      { method: 'DELETE', path: '/*' },
    ],
  }

  const credential = await sys.requestPromised('POST', URL, options)
  res.json(credential)
  return credential
} */

const OVHbills = async (req, res) => {
  const billsIDs = await ovh.requestPromised('GET', `/me/bill`)
  const response = await billsIDs.reduce(async (accumulator, billID) => {
    const bill = await ovh.requestPromised('GET', `/me/bill/${billID}`)
    // Provides more bills information (worth to keep IMO)
    // const billDetailID = await ovh.requestPromised('GET', `/me/bill/${billID}/details`)
    // const billDetail = await ovh.requestPromised('GET', `/me/bill/${billID}/details/${billDetailID[0]}`)
    const obj = {
      date: bill.date,
      description: 'OVH domaine',
      amount: bill.priceWithTax.value,
    }
    // It needs to wait await the accumulator but I don't know exactly why...
    const acc = await accumulator
    acc.push(obj)

    return acc
  }, [])

  // Send the data to redis with an expiration value of 6 hours
  redis.setex('heartlessbillsovh', 21600, JSON.stringify(response))
  res.json(response)
}

// OVH Bills cache middleware with redis key 'heartlessbillsovh'
const OVHBillsCache = async (req, res, next) => {
  const heartlessbillsovh = await redis.get('heartlessbillsovh')

  if (heartlessbillsovh === null) {
    next()
  } else {
    res.json(JSON.parse(heartlessbillsovh))
  }
}

const SYSbills = async (req, res) => {
  const billsIDs = await sys.requestPromised('GET', `/me/bill`)
  const response = await billsIDs.reduce(async (accumulator, billID) => {
    const bill = await sys.requestPromised('GET', `/me/bill/${billID}`)
    // Provides more bills information (worth to keep IMO)
    // const billDetailID = await sys.requestPromised('GET', `/me/bill/${billID}/details`)
    // const billDetail = await sys.requestPromised('GET', `/me/bill/${billID}/details/${billDetailID[0]}`)
    const obj = {
      date: bill.date,
      description: 'Serveur SoYouStart',
      amount: bill.priceWithTax.value,
    }
    // It needs to wait await the accumulator but I don't know exactly why...
    const acc = await accumulator
    acc.push(obj)

    return acc
  }, [])

  // Send the data to redis with an expiration value of 6 hours
  redis.setex('heartlessbillssys', 21600, JSON.stringify(response))
  res.json(response)
}

// SYS Bills cache middleware with redis key 'heartlessbillssys'
const SYSBillsCache = async (req, res, next) => {
  const heartlessbillssys = await redis.get('heartlessbillssys')

  if (heartlessbillssys === null) {
    next()
  } else {
    res.json(JSON.parse(heartlessbillssys))
  }
}

app.get('/getOVHBills', OVHBillsCache, OVHbills)
app.get('/getSYSBills', SYSBillsCache, SYSbills)
// app.get('/getCK', getCK)

module.exports = app
