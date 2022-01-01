import { mockRequest } from './utils';


describe('Monster Settings API', () => { 
  /* ------------------------------ GET TESTS -------------------------------- */

  test('monsterSettings should return all settings.', async () => {
    const { body } = await mockRequest(`
      {
        monsterSettings {
          id,
          name,
          description
        }
      }
    `)
    for (let setting of body.data.monsterSettings) {
      expect(setting).toHaveProperty('id');
      expect(setting).toHaveProperty('name');
      expect(setting).toHaveProperty('description');
    }
  });

  test('monsterSetting should return a single setting by id.', async () => {
    const { body } = await mockRequest(`
      {
        monsterSetting(id: 1) {
          id,
          name,
          description
        }
      }
    `);
    
    expect(body).toEqual({
      data: {
        monsterSetting: {
          id: 1,
          name: 'Cavern Dwellers',
          description: 'At the edges of civilization in the caves and tunnels below the old mountains of the world dwell all sorts of scheming, dangerous monsters. Some are wily and old, like the race of goblins scheming to burn villages and make off with livestock. Others are strange aberrations of nature like the stinking, trash-eating Otyugh. A word of caution, then, to those brave adventurers whose first foray into danger leads them into these dank and shadowy places; bad things live in the dark. Bad things with sharp teeth.'
        }
      }
    });
  });

  /* ------------------------------ DELETE TESTS ------------------------------ */
  
  test('removeMonsterSetting mutation should remove the setting from the database.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterSetting(id: 1) {
          __typename
          ... on MonsterSetting {
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
        removeMonsterSetting: {
          __typename: 'MonsterSetting',
          id: 1
        }
      }
    })
  });

  test('removeMonsterSetting mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterSetting(id: 2) {
          __typename
          ... on MonsterSetting {
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
        removeMonsterSetting: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    })
  });

  test('removeMonsterSetting mutation should return a not found message if setting does not exist.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonsterSetting(id: 999) {
          __typename
          ... on MonsterSetting {
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
        removeMonsterSetting: {
          __typename: 'ApiError',
          status: 404,
          message: 'Resource not found.'
        }
      }
    })
  });

    
  /* ------------------------------ INSERT TESTS ------------------------------ */
  
  test('addMonsterSetting mutation should add a new monster to the database.', async () => {
    const { body } = await mockRequest(`
      mutation {
        addMonsterSetting(name: "Test setting", description: "Test description") {
          __typename
          ... on MonsterSetting {
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
        addMonsterSetting: {
          __typename: 'MonsterSetting',
          name: 'Test setting',
          description: 'Test description'
        }
      }
    });
  });

  test('addMonsterSetting mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        addMonsterSetting(name: "Bad setting request", description: "descrip") {
          __typename
          ... on MonsterSetting {
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
        addMonsterSetting: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    });
  });

  /* ------------------------------ UPDATE TESTS ------------------------------ */
  test('updateMonsterSetting mutation should update the setting data.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterSetting(
          id: 2,
          name: "Updated setting",
          description: "Updated description"
        ) {
          __typename
          ... on MonsterSetting {
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
        updateMonsterSetting: {
          __typename: 'MonsterSetting',
          id: 2,
          name: 'Updated setting',
          description: 'Updated description'
        }
      }
    });
  });

  test('updateMonsterSetting mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterSetting(
          id: 3,
          name: "Bad request"
        ) {
          __typename
          ... on MonsterSetting {
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
        updateMonsterSetting: {
          __typename: 'ApiError',
          status: 401,
          message: 'Unauthorized access.'
        }
      }
    })
  });

  test('updateMonsterSetting mutation should return a not found message if monster does not exist.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonsterSetting(
          id: 999,
          name: "Bad Request"
        ) {
          __typename
          ... on MonsterSetting {
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
        updateMonsterSetting: {
          __typename: 'ApiError',
          status: 404,
          message: 'Resource not found.'
        }
      }
    })
  });
});