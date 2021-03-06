import { mockRequest } from './utils';


describe('Monster Attack Tags API', () => { 
  /* ------------------------------ GET TESTS -------------------------------- */

  test('monsterAttackTags should return all attack tags.', async () => {
    const { body } = await mockRequest(`
      {
        monsterAttackTags {
          id,
          name,
          description
        }
      }
    `)
    for (let tag of body.data.monsterAttackTags) {
      expect(tag).toHaveProperty('id');
      expect(tag).toHaveProperty('name');
      expect(tag).toHaveProperty('description');
    }
  });

  test('monsterAttackTag should return a single attack tag by id.', async () => {
    const { body } = await mockRequest(`
          {
            monsterAttackTag(id: 1) {
              id,
              name,
              description
            }
          }
        `);
    expect(body).toEqual({
      data: {
        monsterAttackTag: {
          id: 1,
          name: 'Close',
          description: 'It\'s useful for attacking something at arm\'s reach plus a foot or two.'
        }
      }
    });
  });

  /* ------------------------------ DELETE TESTS ------------------------------ */
  
  test('removeMonsterAttackTag mutation should remove the attack tag from the database.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterAttackTag(id: 1) {
          __typename
          ... on MonsterAttackTag {
            id
          }
          ... on ApiError {
            message
          }
        }
      }
    `, true);
    expect(body).toEqual({
      data: {
        removeMonsterAttackTag: {
          __typename: 'MonsterAttackTag',
          id: 1
        }
      }
    });
  });

  test('removeMonsterAttackTag mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterAttackTag(id: 2) {
          __typename
          ... on MonsterAttackTag {
            id
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, 'bad-token');
    expect(body).toEqual({
      data: {
        removeMonsterAttackTag: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    })
  });

  test('removeMonsterAttackTag mutation should return a not found message if attack tag does not exist.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterAttackTag(id: 999) {
          __typename
          ... on MonsterAttackTag {
            id
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, true);
    expect(body).toEqual({
      data: {
        removeMonsterAttackTag: {
          __typename: 'ApiError',
          status: 404,
          message: 'Resource not found.'
        }
      }
    })
  });

    
  /* ------------------------------ INSERT TESTS ------------------------------ */
  
  test('addMonsterAttackTag mutation should add a new monster to the database.', async () => {
    const { body } = await mockRequest(`
      mutation {
        addMonsterAttackTag(name: "Test attack tag", description: "Test description") {
          __typename
          ... on MonsterAttackTag {
            name,
            description
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, true);
    expect(body).toEqual({
      data: {
        addMonsterAttackTag: {
          __typename: 'MonsterAttackTag',
          name: 'Test attack tag',
          description: 'Test description'
        }
      }
    });
  });

  test('addMonsterAttackTag mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        addMonsterAttackTag(name: "Bad attack tag request") {
          __typename
          ... on MonsterAttackTag {
            name
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `);
    expect(body).toEqual({
      data: {
        addMonsterAttackTag: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    });
  });

  /* ------------------------------ UPDATE TESTS ------------------------------ */
  test('updateMonsterAttackTag mutation should update the tag data.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterAttackTag(
          id: 2,
          name: "Updated attack tag",
          description: "Updated description"
        ) {
          __typename
          ... on MonsterAttackTag {
            id,
            name,
            description
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, true);
    expect(body).toEqual({
      data: {
        updateMonsterAttackTag: {
          __typename: 'MonsterAttackTag',
          id: 2,
          name: 'Updated attack tag',
          description: 'Updated description'
        }
      }
    });
  });

  test('updateMonsterAttackTag mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterAttackTag(
          id: 3,
          name: "Bad request"
        ) {
          __typename
          ... on MonsterAttackTag {
            id
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `);
    expect(body).toEqual({
      data: {
        updateMonsterAttackTag: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    })
  });

  test('updateMonsterAttackTag mutation should return a not found message if monster does not exist.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterAttackTag(
          id: 999,
          name: "Bad Request"
        ) {
          __typename
          ... on MonsterAttackTag {
            id
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, true);
    expect(body).toEqual({
      data: {
        updateMonsterAttackTag: {
          __typename: 'ApiError',
          status: 404,
          message: 'Resource not found.'
        }
      }
    })
  });
});