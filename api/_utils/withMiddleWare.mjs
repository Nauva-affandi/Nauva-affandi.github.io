// withMiddleware.js
import rateLimiter from './../_middleware/rateLimiter.mjs'
import logger from './../_middleware/logger.mjs'
import cors from './../_middleware/cors.mjjs'

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