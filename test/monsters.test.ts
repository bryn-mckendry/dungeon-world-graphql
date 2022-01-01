import { mockRequest } from './utils';


describe('Monsters API', () => {

  /* ------------------------------ GET TESTS ------------------------------ */

  test('monsters should return list of all monsters.', async () => {
    const { body } = await mockRequest(`
      {
        monsters {
          id,
          name,
          tags {
            name
          },
          attack,
          damage,
          hp,
          armor,
          attackTags {
            name
          },
          qualities {
            name
          },
          description,
          instinct,
          actions {
            name
          },
          setting_id,
          setting {
            name
          }
        }
      }`
    )
    for (let monster of body.data.monsters) {
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
    const { body } = await mockRequest('{ monster(id: 1) { id } }');
    expect(body.data).toEqual({
      monster: { id: 1 }
    })
  });


  /* ------------------------------ DELETE TESTS ------------------------------ */

  test('removeMonster mutation should remove the monster from the database.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonster(id: 1) {
          __typename
          ... on Monster {
            id
          }
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, true);
    expect(body.data).toEqual({
      removeMonster: {
        __typename: 'Monster',
        id: 1
      }
    });

    const check = await mockRequest('{ monster(id: 1) { name } }');
    expect(check.body.data.monster).toBeNull();
  });

  test('removeMonster mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
          mutation {
            removeMonster(id: 2) {
              __typename
              ... on ApiError {
                status,
                message
              }
              ... on Monster {
                id
              }
            }
          }
        `, 'bad-token');
    expect(body.data).toEqual({
      removeMonster: {
        __typename: 'ApiError',
        status: 401,
        message: 'Unauthorized access.'
      }
    })

    const check = await mockRequest('{ monster(id: 2) { id } }');
    expect(check.body.data).toEqual({
      monster: { id: 2 }
    });
  });

  test('removeMonster mutation should return a not found message if monster does not exist.', async () => {
    const { body } = await mockRequest(`
      mutation {
        removeMonster(id: 1) {
          __typename
          ... on ApiError {
            status,
            message
          }
          ... on Monster {
            id
          }
        }
      }
    `, true);
    expect(body.data).toEqual({
      removeMonster: {
        __typename: 'ApiError',
        status: 404,
        message: `Monster with id '1' does not exist.`
      }
    })
  });


  /* ------------------------------ INSERT TESTS ------------------------------ */

  test('addMonster mutation should add a new monster to the database.', async () => {
    const { body } = await mockRequest(`
    mutation {
      addMonster(name: "Test") {
        __typename
        ... on Monster {
          name
        }
        ... on ApiError {
          status,
          message
        }
      }
    }`, true);
    expect(body.data).toEqual({
      addMonster: {
        __typename: 'Monster',
        name: 'Test'
      }
    })
  });

  test('addMonster mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
        mutation {
          addMonster(name: "Should not be added.") {
            __typename
            ... on ApiError {
              status,
              message
            }
            ... on Monster {
              id
            }
          }
        }
      `, 'bad-token');
    expect(body.data).toEqual({
      addMonster: {
        __typename: 'ApiError',
        status: 401,
        message: 'Unauthorized access.'
      }
    });
  });


  /* ------------------------------ UPDATE TESTS ------------------------------ */

  test('updateMonster mutation should update the monster data.', async () => {
    const { body } = await mockRequest(`
        mutation {
          updateMonster(
            id: 3,
            name: "Test name",
            tags: ["Divine"],
            attack: "Test attack",
            damage: "Test dmg",
            hp: 5,
            armor: 10,
            attackTags: ["Far"],
            qualities: ["Test quality"],
            description: "Test description",
            instinct: "To test",
            actions: ["Test action"],
            setting: "The Dark Woods"
          ) {
            __typename
            ... on Monster {
              id,
              name,
              tags {
                name
              },
              attack,
              damage,
              hp,
              armor,
              attackTags {
                name
              },
              qualities {
                name
              },
              description,
              instinct,
              actions {
                name
              },
              setting {
                name
              }
            }
            ... on ApiError {
              message
            }
          }
        }
      `, true);
      expect(body.data).toEqual({
        updateMonster: {
          __typename: 'Monster',
          id: 3,
          name: 'Test name',
          tags: [{ name: 'Divine' }],
          attack: 'Test attack',
          damage: 'Test dmg',
          hp: 5,
          armor: 10,
          attackTags: [{ name: 'Far' }],
          qualities: [{ name: 'Test quality' }],
          description: 'Test description',
          instinct: 'To test',
          actions: [{ name: 'Test action' }],
          setting: { name: 'The Dark Woods' }
        }
      });
  });

  test('updateMonster mutation should return an unauthorized message if token is not valid.', async () => {
    const { body } = await mockRequest(`
          mutation {
            updateMonster(id: 5, name: "New name") {
              __typename
              ... on ApiError {
                status,
                message
              }
              ... on Monster {
                id
              }
            }
          }
        `, 'bad-token');
    expect(body.data).toEqual({
      updateMonster: {
        __typename: 'ApiError',
        status: 401,
        message: 'Unauthorized access.'
      }
    });
  });

  test('updateMonster mutation with bad tag should not update the monster.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonster(
          id: 1,
          tags: ["Large", "Bad Tag"]
        ) {
          __typename
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, true);
    expect(body.data).toEqual({
      updateMonster: {
        __typename: 'ApiError',
        status: 404,
        message: `Monster tag 'Bad Tag' does not exist.`
      }
    });
  });

  test('updateMonster mutation with bad attack tag should not update the monster.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonster(
          id: 1,
          attackTags: ["Near", "Bad Tag"]
        ) {
          __typename
          ... on ApiError {
            status,
            message
          }
          ... on Monster {
            id
          }
        }
      }
    `, true);
    expect(body.data).toEqual({
      updateMonster: {
        __typename: 'ApiError',
        status: 404,
        message: `Monster attack tag 'Bad Tag' does not exist.`
      }
    });
  });

  test('updateMonster mutation with bad setting should not update the monster.', async () => {
    const { body } = await mockRequest(`
      mutation {
        updateMonster(
          id: 1,
          setting: "Bad Setting"
        ) {
          __typename
          ... on ApiError {
            status,
            message
          }
        }
      }
    `, true);
    expect(body.data).toEqual({
      updateMonster: {
        __typename: 'ApiError',
        status: 404,
        message: `Monster setting 'Bad Setting' does not exist.`
      }
    });
  });
});