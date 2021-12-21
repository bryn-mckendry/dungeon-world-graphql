import request from 'supertest';
import app from '../../src/app';


describe('Monsters API', () => {
  test('Monsters', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: '{ monsters { id, name } }'
      });
    for (let monster of res.body.data.monsters) {
      expect(monster).toHaveProperty('id');
      expect(monster).toHaveProperty('name');
    }    
  })
});