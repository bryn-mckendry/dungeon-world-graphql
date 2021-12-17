import app from '../src/app';
import request from 'supertest';

describe('Test the app.', () => {
  test('GET method should return a 200 response.', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});