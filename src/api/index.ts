
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { MonsterType, MonsterTagType } from './monster';
import {
  getMonsters,
  getMonsterTags, 
  getMonsterByName,
  addMonster,
  removeMonster
 } from '../database/monster';


const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query.',
  fields: () => ({
    monster: {
      type: MonsterType,
      description: 'A specific monster.',
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
      },
      resolve: async (_, { name }) => await getMonsterByName(name.toLowerCase())
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'List of all monsters.',
      resolve: async () => await getMonsters()
    },
    monsterTags: {
      type: new GraphQLList(MonsterTagType),
      description: 'List of all monster tags.',
      resolve: async () => await getMonsterTags()
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
      resolve: async (_, args) => await addMonster(args)
    },
    removeMonster: {
      type: MonsterType,
      description: 'Remove a monster.',
      args: { 
        id: { type: GraphQLInt }
      },
      resolve: async (_, { id }) => await removeMonster(id) 
    }
  })
});


const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

export default schema;