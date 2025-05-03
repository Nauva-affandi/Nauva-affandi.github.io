// withMiddleware.js
import rateLimiter from './../_middleware/rateLimiter.js'
import logger from './../_middleware/logger.js'
import cors from './../_middleware/cors.js'



const withMiddleware = (handler) => {
  return async (req, res) => {
    // Inject util langsung ke req
    req.getPublicUrl = (path) => {
      const isLocal = ['localhost:3000', '192.168.1.2:3000'].includes(req.headers.host)
      const baseUrl = isLocal
        ? 'http://192.168.1.2:3000'
        : `https://${req.headers.host}`
      return `${baseUrl}${path}`
    }

    if (!rateLimiter(req, res)) return
    if (!logger(req, res)) return
    if (!cors(req, res)) return

    return handler(req, res)
  }
}


export default withMiddleware