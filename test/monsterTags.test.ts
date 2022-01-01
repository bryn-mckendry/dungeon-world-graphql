import { mockRequest } from './utils';


describe('Monster Tags API', () => { 
  /* ------------------------------ GET TESTS -------------------------------- */

  test('monsterTags should return all tags.', async () => {
    const { body } = await mockRequest(`
      {
        monsterTags {
          id,
          name,
          description
        }
      }
    `)
    for (let tag of body.data.monsterTags) {
      expect(tag).toHaveProperty('id');
      expect(tag).toHaveProperty('name');
      expect(tag).toHaveProperty('description');
    }
  });

  test('monsterTag should return a single tag by id.', async () => {
    const { body } = await mockRequest(`
          {
            monsterTag(id: 1) {
              id,
              name,
              description
            }
          }
        `);
    
    expect(body).toEqual({
      data: {
        monsterTag: {
          id: 1,
          name: 'Amorphous',
          description: 'Its anatomy and organs are bizarre and unnatural.'
        }
      }
    });
  });

  /* ------------------------------ DELETE TESTS ------------------------------ */
  
  test('removeMonsterTag mutation should remove the tag from the database.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterTag(id: 1) {
          __typename
          ... on MonsterTag {
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
        removeMonsterTag: {
          __typename: 'MonsterTag',
          id: 1
        }
      }
    })
  });

  test('removeMonsterTag mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterTag(id: 2) {
          __typename
          ... on MonsterTag {
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
        removeMonsterTag: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    })
  });

  test('removeMonsterTag mutation should return a not found message if tag does not exist.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterTag(id: 999) {
          __typename
          ... on MonsterTag {
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
        removeMonsterTag: {
          __typename: 'ApiError',
          status: 404,
          message: 'Resource not found.'
        }
      }
    })
  });

    
  /* ------------------------------ INSERT TESTS ------------------------------ */
  
  test('addMonsterTag mutation should add a new monster to the database.', async () => {
    const { body } = await mockRequest(`
      mutation {
        addMonsterTag(name: "Test tag", description: "Test description") {
          __typename
          ... on MonsterTag {
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
        addMonsterTag: {
          __typename: 'MonsterTag',
          name: 'Test tag',
          description: 'Test description'
        }
      }
    });
  });

  test('addMonsterTag mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        addMonsterTag(name: "Bad tag request", description: "descrip") {
          __typename
          ... on MonsterTag {
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
        addMonsterTag: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    });
  });

  /* ------------------------------ UPDATE TESTS ------------------------------ */
  test('updateMonsterTag mutation should update the tag data.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterTag(
          id: 2,
          name: "Updated tag",
          description: "Updated description"
        ) {
          __typename
          ... on MonsterTag {
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
        updateMonsterTag: {
          __typename: 'MonsterTag',
          id: 2,
          name: 'Updated tag',
          description: 'Updated description'
        }
      }
    });
  });

  test('updateMonsterTag mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterTag(
          id: 3,
          name: "Bad request"
        ) {
          __typename
          ... on MonsterTag {
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
        updateMonsterTag: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    })
  });

  test('updateMonsterTag mutation should return a not found message if monster does not exist.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterTag(
          id: 999,
          name: "Bad Request"
        ) {
          __typename
          ... on MonsterTag {
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
        updateMonsterTag: {
          __typename: 'ApiError',
          status: 404,
          message: 'Resource not found.'
        }
      }
    })
  });
});