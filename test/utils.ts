import jwt from 'jsonwebtoken';

export const mockToken = () => ({ token: jwt.sign({ username: 'admin' }, process.env.TOKEN_SECRET!, { expiresIn: '20s' }) });