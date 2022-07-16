// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { WordModel } from '@models/word';
import connect from '@src/lib/dbConnect';
import { Types } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Array<IWord & Types.ObjectId>>
) {
  await connect();
  const words = await WordModel.find({}) as Array<IWord & Types.ObjectId>;
  res.status(200).json(words);
}
