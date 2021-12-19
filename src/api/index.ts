
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import {
  MonsterType,
  MonsterTagType,
  MonsterQualityType,
  MonsterAttackTagType,
  MonsterSettingType
} from './monster';
import {
  getMonsters,
  getMonsterByName,
  addMonster,
  removeMonster,
 } from '../database/monster';
import { getSettingById, getSettings } from '../database/monsterSetting';
import { getMonsterTagById, getMonsterTags } from '../database/monsterTag';
import { getMonsterAttackTagById, getMonsterAttackTags } from '../database/monsterAttackTags';


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
    monsterQualities: {
      type: new GraphQLList(MonsterQualityType),
      description: 'List of all monster qualities.',
      resolve: async () => await getMonsters()
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