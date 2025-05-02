// withMiddleware.js
import rateLimiter from './../middleware/rateLimiter.js'
import logger from './../middleware/logger.js'
import cors from './../middleware/cors.js'

const withMiddleware = (handler) => {
  return async (req, res) => {
    // Apply each middleware, return false if any fails
    if (!rateLimiter(req, res)) return
    if (!logger(req, res)) return
    if (!cors(req, res)) return

    // If all middleware passed, call the handler
    return handler(req, res)
  }
}

export default withMiddleware