
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
  UnauthorizedAccessType,
  MonsterMutationResultType
} from './types';
import { validateToken } from '../auth';


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
      resolve: async (_, args, context) => { 
        if (await validateToken(context.headers.token)) {
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
      resolve: async (_, args, context) => { 
        if (await validateToken(context.headers.token)) {
          return await updateMonster(args);
        }
        return UnauthorizedAccessType;
      }
    }
  })
});