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

// Return date has year/month/day eg: 1970/12/24
const formatDate = (date, isEpoch) => {
  if (isEpoch) {
    return new Date(date).valueOf()
  }

  return date.substr(0, 10).replaceAll('-', '/')
}

const OVHbills = async (req, res) => {
  const billsIDs = await ovh.requestPromised('GET', `/me/bill`)
  const response = await billsIDs.reduce(async (accumulator, billID) => {
    const bill = await ovh.requestPromised('GET', `/me/bill/${billID}`)
    // Provides more bills information (worth to keep IMO)
    const billDetailID = await ovh.requestPromised(
      'GET',
      `/me/bill/${billID}/details`
    )
    const billDetail = await ovh.requestPromised(
      'GET',
      `/me/bill/${billID}/details/${billDetailID[0]}`
    )
    const obj = {
      type: 'bill',
      rawdate: formatDate(bill.date, true),
      date: formatDate(bill.date),
      description: billDetail.description,
      amount: bill.priceWithTax.value,
    }
    // It needs to wait await the accumulator but I don't know exactly why...
    const acc = await accumulator
    acc.push(obj)
    return acc
  }, [])

  // Send the data to redis with an expiration value of 6 hours
  redis.setex('hg:bill:ovh', 21600, JSON.stringify(response))
  if (res) {
    res.json(response)
  }

  return response
}

const SYSbills = async (req, res) => {
  const billsIDs = await sys.requestPromised('GET', `/me/bill`)
  const response = await billsIDs.reduce(async (accumulator, billID) => {
    const bill = await sys.requestPromised('GET', `/me/bill/${billID}`)
    // Provides more bills information (worth to keep IMO)
    const billDetailID = await sys.requestPromised(
      'GET',
      `/me/bill/${billID}/details`
    )
    const billDetail = await sys.requestPromised(
      'GET',
      `/me/bill/${billID}/details/${billDetailID[0]}`
    )
    const obj = {
      type: 'bill',
      rawdate: formatDate(bill.date, true),
      date: formatDate(bill.date),
      description: billDetail.description,
      amount: bill.priceWithTax.value,
    }
    // It needs to wait await the accumulator but I don't know exactly why...
    const acc = await accumulator
    acc.push(obj)
    return acc
  }, [])

  // Send the data to redis with an expiration value of 6 hours
  redis.setex('hg:bill:sys', 21600, JSON.stringify(response))
  if (res) {
    res.json(response)
  }

  return response
}

const billsTotal = async (req, res) => {
  // Nullish coalescing operator (??) is not working...
  const billOVH =
    JSON.parse(await redis.get('hg:bill:ovh')) || (await OVHbills())
  const billSYS =
    JSON.parse(await redis.get('hg:bill:sys')) || (await SYSbills())

  const bills = billOVH.concat(billSYS)
  // Date we decided to start monitoring the bills & expense
  const birthDate = new Date('2020-11-16T00:00:00').valueOf()

  let total = bills.reduce((acc, bill) => {
    if (bill.rawdate > birthDate) {
      acc += bill.amount
    }
    return acc
  }, 0)

  total *= 100

  redis.setex('hg:bill:total', 21600, JSON.stringify(total))
  res.json(total)
}

// Bills cache middleware use redis 'hg:bill:ovh', 'hg:bill:sys', etc.
const OVHBillsCache = async (req, res, next) => {
  const redisBillOVH = await redis.get('hg:bill:ovh')
  redisBillOVH ? res.json(JSON.parse(redisBillOVH)) : next()
}

const SYSBillsCache = async (req, res, next) => {
  const redisBillSYS = await redis.get('hg:bill:sys')
  redisBillSYS ? res.json(JSON.parse(redisBillSYS)) : next()
}

const billsTotalCache = async (req, res, next) => {
  const redisBillTotal = await redis.get('hg:bill:total')
  redisBillTotal ? res.json(JSON.parse(redisBillTotal)) : next()
}

app.get('/bills/ovh', OVHBillsCache, OVHbills)
// app.get('/bills/ovh', OVHbills)
app.get('/bills/sys', SYSBillsCache, SYSbills)
// app.get('/bills/sys', SYSbills)
app.get('/bills/total', billsTotalCache, billsTotal)
// app.get('/bills/total', billsTotal)
// app.get('/getCK', getCK)

module.exports = app
