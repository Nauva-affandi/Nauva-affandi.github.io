import wrapper from './../../_utils/withMiddleWare.js'



async function handler(req, res) {
  try {
    const url = req.getPublicUrl('/database/nihongo/kanji/n5.json')
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(404).json({
      message: 'data not found',
      typeError: err.message,
    })
  }
}


export default wrapper(handler)