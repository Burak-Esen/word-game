import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '@lib/dbConnect';
import { IWord, IWordFromDb, WordModel } from '@models/word';
import { Types } from 'mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWordFromDb | { error: string }>
) {
  if (req.method === 'POST') {
    await connect();
    try {
      const word = await WordModel.findById(req.query.word_id) as IWord & Types.ObjectId;
      if (!word) {
        return res.status(200).json({ error: 'word not found' });
      }
      return res.status(200).json(word);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(200).json({ error: error.message });
      }
    }
  }
}
