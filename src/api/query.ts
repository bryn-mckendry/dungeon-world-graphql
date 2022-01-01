
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import {
  MonsterType,
  MonsterTagType,
  MonsterAttackTagType,
  MonsterSettingType,
  AuthResponseType
} from './types';
import {
  getMonsters,
  getMonsterById,
 } from '../database/monster';
import { getSettingById, getSettings } from '../database/monsterSetting';
import { getMonsterTagById, getMonsterTags } from '../database/monsterTag';
import { getMonsterAttackTagById, getMonsterAttackTags } from '../database/monsterAttackTags';
import { login } from '../auth';


export const RootQueryType = new GraphQLObjectType({
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
      args: {
        id: { type: GraphQLInt }
      },
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
