import wrapper from './../../_utils/withMiddleWare.mjs'

async function handler(req, res) {
  try {
    const data = await fetch('/database/nihongo/kanji/n4.json')
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({
      message: 'Data tidak ditemukan 5',
      typeError: err.message,
    });
  }
}


export default wrapper(handler)