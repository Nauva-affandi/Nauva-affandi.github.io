// jwtAuth.js
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

const jwtAuth = (req, res) => {
  const auth = req.headers['authorization']
  if (!auth || !auth.startsWith('Bearer ')) {
    res.statusCode = 401
    res.end('Unauthorized: No token')
    return false
  }

  const token = auth.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
  } catch (err) {
    res.statusCode = 401
    res.end('Unauthorized: Invalid token')
    return false
  }
  return true
}

export default jwtAuth