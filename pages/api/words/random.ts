import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '@lib/dbConnect';
import { IWordFromDb, WordModel } from '@models/word';
import { Types } from 'mongoose';

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<IWordFromDb | { error: string}>
) {
  await connect();
  const words = await WordModel.aggregate([{ $sample: { size: 1 } }]);
  if (words && words.length) {
    return res.status(200).json(words[0]);
  } else {
    return res.status(404).json({ error: 'word not found' });
  }
}
