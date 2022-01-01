
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
import { MonsterAttackTagQueryResultType } from './types/resultTypes';
import { addMonsterAttackTag, removeMonsterAttackTagById, updateMonsterAttackTag } from '../database/monsterAttackTags';


const validateRequest = async (token: string, callback: Function) => {
  return await validateToken(token) ? await callback() : { status: 401, message: 'Unauthorized access.' }
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
      resolve: async(_, args, context) => await validateRequest(
        context.headers.token,
        async () => await addMonsterAttackTag(args)
      )
    }
  })
});