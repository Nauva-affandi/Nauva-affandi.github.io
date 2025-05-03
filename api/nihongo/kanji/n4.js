import wrapper from './../../_utils/withMiddleWare.js'




async function handler(req, res) {
  try {
    const isLocal = ['localhost:3000', '192.168.1.2:3000'].includes(req.headers.host)
    const baseUrl = isLocal
      ? 'http://192.168.1.2:3000'
      : `https://${req.headers.host}`
    

    const response = await fetch(`${baseUrl}/database/nihongo/kanji/n4.json`)
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(404).json({
      message: 'Data tidak ditemukan 5',
      typeError: err.message,
    })
  }
}



export default wrapper(handler)