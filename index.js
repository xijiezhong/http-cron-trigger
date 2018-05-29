const schedule = require('node-schedule')
const fetch = require('node-fetch')
const logger = require('simple-json-logger')
const extractTriggers = require('./lib/extractTriggers')

const triggers = extractTriggers(process.env)

triggers.forEach(([cron, url]) => {
  schedule.scheduleJob(cron, async () => {
    const response = await fetch(url)
    if (!response.ok) {
      logger.error('fail to request url: ', url)
      return
    }
    logger.info('success to request url: ', url)
  })
})
