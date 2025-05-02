import wrapper from './../../_utils/withMiddleWare.js'

import fs from 'fs/promises';
import path from 'path';

async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'database/nihongo/kanji/n4.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({
      message: 'Data tidak ditemukan 5',
      typeError: err.message,
    });
  }
}


export default wrapper(handler)