import request from 'supertest';
import app from '../../src/app';
import { mockToken } from '../utils';


describe('Monsters API', () => {
  test('monsters graph should return list of all monsters.', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: '{ monsters { id, name, tags { name }, attack, damage, hp, armor, attackTags { name }, qualities { name }, description, instinct, actions { name }, setting_id, setting { name } } }'
      });
    for (let monster of res.body.data.monsters) {
      expect(monster).toHaveProperty('id');
      expect(monster).toHaveProperty('name');
      expect(monster).toHaveProperty('tags');
      expect(monster).toHaveProperty('attack');
      expect(monster).toHaveProperty('damage');
      expect(monster).toHaveProperty('hp');
      expect(monster).toHaveProperty('armor');
      expect(monster).toHaveProperty('attackTags');
      expect(monster).toHaveProperty('qualities');
      expect(monster).toHaveProperty('description');
      expect(monster).toHaveProperty('instinct');
      expect(monster).toHaveProperty('actions');
      expect(monster).toHaveProperty('setting_id');
      expect(monster).toHaveProperty('setting');
    }
  });

  test('monster should return results by id.', async () => {
    const res = await request(app)
      .post('/graphql')
      .send({
        query: '{ monster(id: 1) { id, name } }'
      })
    const monster = res.body.data.monster;
    expect(monster.id).toBe(1);
    expect(monster.name).toBe('Ankheg');
  });

  test('removeMonster mutation should remove the monster from the database.', async () => {
    const { token } = mockToken();
    const res = await request(app)
      .post('/graphql')
      .set({ token })
      .send({
        query: 'mutation { removeMonster(id: 1) { __typename ... on UnauthorizedAccess { message } ... on Monster { id, name } } }'
      });
    expect(res.body.data.message).toBeUndefined();
    let removeMonster = res.body.data.removeMonster;
    expect(removeMonster).toBeDefined();
    expect(removeMonster.id).toBe(1);
    expect(removeMonster.name).toBe('Ankheg');

    const check = await request(app)
      .post('/graphql')
      .send({
        query: '{ monster(id: 1) { name } }'
      })
    expect(check.body.data.monster).toBeNull();
  });

  test('removeMonster mutation should return an unauthorized message if bad token is supplied.', async () => {
    const res = await request(app)
      .post('/graphql')
      .set({ token: 'bad-token' })
      .send({
        query: 'mutation { removeMonster(id: 2) { __typename ... on UnauthorizedAccess { status, message } ... on Monster { id } } }'
      });
    expect(res.body.data.removeMonster.message).toBe('Unauthorized access.');
    expect(res.body.data.removeMonster.status).toBe(401);

    const check = await request(app)
      .post('/graphql')
      .send({ query: '{ monster(id: 2) { name } }' })
    expect(check.body.data.monster).toHaveProperty('name');
  });

  test('addMonster mutation should add a new monster to the database.',async () => {
    const { token } = mockToken();
    const res = await request(app)
      .post('/graphql')
      .set({ token })
      .send({
        query: 'mutation { addMonster(name: "Test") { name } }'
      })
    expect(res.body.data.addMonster?.name).toBe('Test');
  })
});