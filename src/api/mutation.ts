
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import {
  addMonster,
  removeMonsterById,
  updateMonster,
 } from '../database/monster';
import { MonsterQueryResultType } from './types';
import { validateToken } from '../auth';
import {
  MonsterAttackTagQueryResultType,
  MonsterSettingQueryResultType,
  MonsterTagQueryResultType
} from './types/resultTypes';
import {
  addMonsterAttackTag,
  removeMonsterAttackTagById,
  updateMonsterAttackTag
} from '../database/monsterAttackTags';
import {
  addMonsterTag,
  removeMonsterTagById,
  updateMonsterTag
} from '../database/monsterTag';
import { addMonsterSetting, removeMonsterSettingById, updateMonsterSetting } from '../database/monsterSetting';
import { ErrorMessages } from '../database/constants';


const validateRequest = async (token: string, callback: Function) => {
  return await validateToken(token) ? await callback() : ErrorMessages.UNAUTHORIZED;
}


export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'root mutation.',
  fields: () => ({
    addMonster: {
      type: MonsterQueryResultType,
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
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await addMonster(args)
      )
    },
    removeMonster: {
      type: MonsterQueryResultType,
      description: 'Remove a monster.',
      args: { 
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }, context) => await validateRequest(
        context.headers.token,
        async () => await removeMonsterById(id)
      )
    },
    updateMonster: {
      type: MonsterQueryResultType,
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
        actions: { type: new GraphQLList(GraphQLString) },
        setting: { type: GraphQLString }
      },
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await updateMonster(args)
      )
    },
    removeMonsterAttackTag: {
      type: MonsterAttackTagQueryResultType,
      description: 'Remove a monster attack tag.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (_, { id }, context) => await validateRequest(
        context.headers.token,
        async () => await removeMonsterAttackTagById(id)
      )
    },
    updateMonsterAttackTag: {
      type: MonsterAttackTagQueryResultType,
      description: 'Update an existing monster attack tag.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await updateMonsterAttackTag(args)
      )
    },
    addMonsterAttackTag: {
      type: MonsterAttackTagQueryResultType,
      description: 'Add a new monster attack tag.',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString }
      },
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await addMonsterAttackTag(args)
      )
    },
    removeMonsterTag: {
      type: MonsterTagQueryResultType,
      description: 'Remove an existing monster tag.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (_, { id }, context) => await validateRequest(
        context.headers.token,
        async () => await removeMonsterTagById(id)
      )
    },
    addMonsterTag: {
      type: MonsterTagQueryResultType,
      description: 'Add a new monster tag.',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await addMonsterTag(args)
      )
    },
    updateMonsterTag: {
      type: MonsterTagQueryResultType,
      description: 'Update an existing monster tag.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await updateMonsterTag(args)
      )
    },
    removeMonsterSetting: {
      type: MonsterSettingQueryResultType,
      description: 'Remove an existing monster setting.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (_, { id }, context) => await validateRequest(
        context.headers.token,
        async () => await removeMonsterSettingById(id)
      )
    },
    addMonsterSetting: {
      type: MonsterSettingQueryResultType,
      description: 'Add a new monster setting.',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await addMonsterSetting(args)
      )
    },
    updateMonsterSetting: {
      type: MonsterSettingQueryResultType,
      description: 'Update an existing monster setting.',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve: async (_, args, context) => await validateRequest(
        context.headers.token,
        async () => await updateMonsterSetting(args)
      )
    }
  })
});