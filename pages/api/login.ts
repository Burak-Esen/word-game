import type { NextApiRequest, NextApiResponse } from 'next';
import connect from '@src/lib/dbConnect';
import { UserModel } from '@models/user';
import { compareHashAndPass } from '@src/utils/hash';
import jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await connect();
    const user = await UserModel.findOne({ username: req.body.username });
    const loginCheck = !user ? false : await compareHashAndPass(user.password_hash, req.body.password);
    if (!user || !loginCheck) {
      return res.status(400).json({ error: 'invalid username or password' });
    }
    const userForToken = {
      username: user.username,
      id: user._id.toString(),
    };
    const token = jwt.sign(userForToken, process.env.SECRET as string, { expiresIn: '24h' });
    return res.status(200).json({ token, user: user.toJSON() });
  }
}
