const schedule = require('node-schedule')
const fetch = require('node-fetch')
const logger = require('simple-json-logger')
const extractTriggers = require('./lib/extractTriggers')

const triggers = extractTriggers(process.env)

logger.info("service start")

triggers.forEach(([cron, url, method = "get"]) => {
  schedule.scheduleJob(cron, async () => {
    const response = await fetch(url, {method: method})
    if (!response.ok) {
      logger.error('fail to request url: ', url, method)
      return
    }
    logger.info('success to request url: ', url, method)
  })
})
