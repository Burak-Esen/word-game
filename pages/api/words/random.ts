import { WordModel } from '@models/word';
import connect from '@src/lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse
) {
  await connect();
  const words = await WordModel.aggregate([{ $sample: { size: 1 } }]);
  if (words && words.length) {
    return res.status(200).json(words[0]);
  } else {
    return res.status(404).json({ error: 'word not found' });
  }
}
