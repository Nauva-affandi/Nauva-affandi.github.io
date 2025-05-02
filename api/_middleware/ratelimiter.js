// rateLimiter.js
const ipRateMap = {}
const RATE_LIMIT_WINDOW = 60 * 1000  // 1 minute window
const MAX_REQUESTS = 10

const rateLimiter = (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const now = Date.now()

  if (!ipRateMap[ip]) ipRateMap[ip] = []
  ipRateMap[ip] = ipRateMap[ip].filter(ts => now - ts < RATE_LIMIT_WINDOW)

  if (ipRateMap[ip].length >= MAX_REQUESTS) {
    res.statusCode = 429
    res.end('Too Many Requests')
    return false
  }
  ipRateMap[ip].push(now)
  return true
}

export default rateLimiter