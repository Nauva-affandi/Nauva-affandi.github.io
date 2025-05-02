import wrapper from './_utils/withMiddleWare.mjs'

const handler = (req, res) => {
  res.status(200).send('hahaha')
}

export default wrapper(handler)