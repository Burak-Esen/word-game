import { hash, compare } from 'bcryptjs';

export async function createHash(raw: string): Promise<string> {
  return await hash(raw, +(process.env.SALT as string));
};

export async function compareHashAndPass(ownHash: string, password: string): Promise<boolean> {
  return await compare(password, ownHash);
}
