
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql';

import MonsterType from './monster';
import { getMonsters, getMonster } from '../database/monster';


const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query.',
  fields: () => ({
    monster: {
      type: MonsterType,
      description: 'A specific monster.',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (parent, args) => await getMonster(args.id) 
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'List of all monsters.',
      resolve: async () => await getMonsters()
    }
  })
});


const schema = new GraphQLSchema({ query: RootQueryType });

export default schema;