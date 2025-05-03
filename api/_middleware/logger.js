// logger.js
const logger = (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} from ${ip}`)
  return true
}

export default logger