import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { getPasswordByUsername, insertAdmin } from '../database/admin';


export const login = async (username: string, password: string): Promise<{ token: string } | undefined> => {
  try {
    const hash = await getPasswordByUsername(username);
    const match = await bcrypt.compare(password, hash);
    if (!match) {
      return;
    }
    return { token: jwt.sign({ username }, process.env.TOKEN_SECRET!, { expiresIn: '1h' }) };
  } catch (e) {
    console.log(e);
  }
}

export const validateToken = async (token: string) => {
  try {
    const auth = jwt.verify(token, process.env.TOKEN_SECRET!);
    if (auth) return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}