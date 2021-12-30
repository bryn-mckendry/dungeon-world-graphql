
import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import {
  addMonster,
  removeMonster,
  updateMonster,
 } from '../database/monster';
import {
  MonsterMutationResultType
} from './types';
import { validateToken } from '../auth';


const validateRequest = async (token: string, callback: Function) => {
  return await validateToken(token) ? await callback() : { status: 401, message: 'Unauthorized access.' }
}


export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'root mutation.',
  fields: () => ({
    addMonster: {
      type: MonsterMutationResultType,
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
      type: MonsterMutationResultType,
      description: 'Remove a monster.',
      args: { 
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }, context) => await validateRequest(
        context.headers.token,
        async () => await removeMonster(id)
      )
    },
    updateMonster: {
      type: MonsterMutationResultType,
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
    }
  })
});