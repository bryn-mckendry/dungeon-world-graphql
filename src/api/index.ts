
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';
import {
  MonsterType,
  MonsterTagType,
  MonsterAttackTagType,
  MonsterSettingType
} from './monsterType';
import {
  getMonsters,
  addMonster,
  removeMonster,
  getMonsterById,
  updateMonster,
 } from '../database/monster';
import { getSettingById, getSettings } from '../database/monsterSetting';
import { getMonsterTagById, getMonsterTags } from '../database/monsterTag';
import { getMonsterAttackTagById, getMonsterAttackTags } from '../database/monsterAttackTags';
import { UnauthorizedAccessType } from './errorType';
import { MonsterMutationResultType } from './resultTypes';
import { AuthResponseType } from './authType';
import { login, validateToken } from '../auth';


const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query.',
  fields: () => ({
    setting: {
      type: MonsterSettingType,
      description: 'A specific monster setting.',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }) => await getSettingById(id)
    },
    settings: {
      type: new GraphQLList(MonsterSettingType),
      description: 'List of all monster settings.',
      resolve: async () => await getSettings()
    },
    monster: {
      type: MonsterType,
      description: 'A specific monster.',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }) => await getMonsterById(id)
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'List of all monsters.',
      resolve: async () => await getMonsters()
    },
    monsterTag: {
      type: MonsterTagType,
      description: 'A specific monster tag.',
      resolve: async (_, { id }) => await getMonsterTagById(id)
    },
    monsterTags: {
      type: new GraphQLList(MonsterTagType),
      description: 'List of all monster tags.',
      resolve: async () => await getMonsterTags()
    },
    monsterAttackTag: {
      type: MonsterAttackTagType,
      description: 'A specific monster attack tag.',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }) => await getMonsterAttackTagById(id)
    },
    monsterAttackTags: {
      type: new GraphQLList(MonsterAttackTagType),
      description: 'List of all monster attack tags.',
      resolve: async () => await getMonsterAttackTags()
    },
    login: {
      type: AuthResponseType,
      description: 'Login for admin privileges.',
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (_, { username, password }) => await login(username, password)
    }
  })
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'root mutation.',
  fields: () => ({
    addMonster: {
      type: MonsterType,
      description: 'Add a monster.',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: new GraphQLList(GraphQLString) },
        attack: { type: GraphQLString },
        damage: { type: GraphQLString },
        hp: { type: GraphQLInt },
        armor: { type: GraphQLInt },
        attackTags: { type: new GraphQLList(GraphQLString) },
        qualities: { type: new GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        instinct: { type: GraphQLString },
        actions: { type: new GraphQLList(GraphQLString) }
      },
      resolve: async (_, args, context) => { 
        if ( await validateToken(context.headers.token)) {
          return await addMonster(args);
        }
        return UnauthorizedAccessType;
      }
    },
    removeMonster: {
      type: MonsterMutationResultType,
      description: 'Remove a monster.',
      args: { 
        id: { type: GraphQLInt }
      },
        resolve: async (_, { id }, context) => {
          if (await validateToken(context.headers.token)) {
            return await removeMonster(id); 
          }
          return UnauthorizedAccessType;
        }
    },
    updateMonster: {
      type: MonsterType,
      description: 'Update a monster.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) },
        attack: { type: GraphQLString },
        damage: { type: GraphQLString },
        hp: { type: GraphQLInt },
        armor: { type: GraphQLInt },
        attackTags: { type: new GraphQLList(GraphQLString) },
        qualities: { type: new GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        instinct: { type: GraphQLString },
        actions: { type: new GraphQLList(GraphQLString) }
      },
      resolve: async (_, args, context) => { 
        if ( await validateToken(context.headers.token)) {
          return await updateMonster(args);
        }
        return UnauthorizedAccessType;
      }
    }
  })
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

export default schema;