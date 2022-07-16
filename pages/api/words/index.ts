// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '@src/lib/dbConnect';
import { WordModel } from '@models/word';
import { Types } from 'mongoose';

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Array<IWord & Types.ObjectId>>
) {
  await connect();
  const words = await WordModel.find({}) as Array<IWord & Types.ObjectId>;
  res.status(200).json(words);
}
