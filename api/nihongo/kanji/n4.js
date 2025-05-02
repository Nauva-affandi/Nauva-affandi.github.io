import wrapper from '/api/_utils/withMiddleWare.js'


async function handler(req, res) {
  try {
    const response = await fetch(`/database/nihongo/kanji/n4.json`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({
      message: 'Data tidak ditemukan',
      typeError: err,
    });
  }
}

export default wrapper(handler)