import express from 'express'
import ovhLib from 'ovh'

const app = express()
const ovh = ovhLib({
  endpoint: 'ovh-eu',
  appKey: process.env.OVH_APP_KEY,
  appSecret: process.env.OVH_APP_SECRET,
  consumerKey: process.env.OVH_CONSUMER_KEY,
})

// Get a consumer key
/* const getCK = async () => {
  const URL = '/auth/credential'
  const options = {
    accessRules: [
      { method: 'GET', path: '/*' },
      { method: 'POST', path: '/*' },
      { method: 'PUT', path: '/*' },
      { method: 'DELETE', path: '/*' }
    ]
  }

  const credential = await ovh.requestPromised('POST', URL, options)
  return credential
} */

/* const OVHbills = async () => {
  const billsIDs = await ovh.requestPromised('GET', `/me/bill`)
  // console.log(`Number of bills : ${billsIDs.length}`)
  const TotalBillValue = billsIDs.reduce(async (acc, billID) => {
    const bill = await ovh.requestPromised('GET', `/me/bill/${billID}`)
    acc = await acc + bill.priceWithTax.value

    return acc
  }, 0)

  console.log(`Total OVH Heartless Gaming Bill Number : ${(await TotalBillValue).toFixed(2)}`)
  // res.json(credential)
  return TotalBillValue
} */

const SYSbills = async (req, res) => {
  const billsIDs = await ovh.requestPromised('GET', `/me/bill`)
  // console.log(`Number of bills : ${billsIDs.length}`)
  const TotalBillValue = billsIDs.reduce(async (acc, billID) => {
    const bill = await ovh.requestPromised('GET', `/me/bill/${billID}`)
    acc = (await acc) + bill.priceWithTax.value

    return acc
  }, 0)

  // console.log(`Total OVH Heartless Gaming Bill Number : ${(await TotalBillValue).toFixed(2)}`)
  res.json((await TotalBillValue).toFixed(2))
  // return (await TotalBillValue).toFixed(2)
}

// SYSbills()

// app.get('/getOVH', gsCache, getCK)
app.get('/getOVH', SYSbills)

module.exports = app
