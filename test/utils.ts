import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import app from '../src/app';

const mockToken = () => ({ token: jwt.sign({ username: 'admin' }, process.env.TOKEN_SECRET!, { expiresIn: '20s' }) });

export const mockRequest = async (query: string, token?: boolean | string) => {
  const req = supertest(app);
  if (token) {
    if (typeof token === 'string') {
      return await req.post('/graphql').set({ token }).send({ query });
    } else {
      return await req.post('/graphql').set(mockToken()).send({ query });
    }
  }
  return await req.post('/graphql').send({ query });
}  