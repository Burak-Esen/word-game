import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

import { UserModel } from '@models/user';

interface IUserToken {
  username: string;
  id: string;
}

function getToken(req: NextApiRequest): string | null {
  const authorization = req.headers.authorization;
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
}

function checkToken(token: string | null, res: NextApiResponse) {
  if (!token) {
    return res.status(401).json({ error: 'token missing' });
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET as string) as IUserToken;
  } catch (error) {
    if (error instanceof Error && error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(500).json({ error: 'JWT error' });
  }
  if (!decodedToken || !decodedToken.id) {
    return res.status(401).json({ error: 'token invalid' });
  }
  return decodedToken;
}

export async function getUser(req:NextApiRequest, res: NextApiResponse) {
  const token = getToken(req);
  const decodedToken = checkToken(token, res) as IUserToken;
  const user = await UserModel.findById({ username: decodedToken.id });
  if (!user) {
    return res.status(404).json({ error: 'User not found with token' });
  }
  return user;
}

export async function hasAuth(req:NextApiRequest, res: NextApiResponse, authList: Array<string>): Promise<boolean> {
  const user = await getUser(req, res) as mongoose.Document<IUser> & IUser & { _id: mongoose.Types.ObjectId };
  return authList.every(auth => user.role.includes(auth));
}
