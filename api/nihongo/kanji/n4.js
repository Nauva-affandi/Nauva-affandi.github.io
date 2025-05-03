import wrapper from '/api/_utils/withMiddleWare.js'



async function handler(req, res) {
  try {
    const url = req.getPublicUrl('/database/nihongo/kanji/n4.json')
    const response = await fetch(url)
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