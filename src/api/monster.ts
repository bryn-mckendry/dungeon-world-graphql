import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import { getMonsterActionsByMonsterId } from '../database/monsterActions';
import { getMonsterAttackTagsByMonsterId } from '../database/monsterAttackTags';
import { getMonsterQualitiesByMonsterId } from '../database/monsterQualities';
import { getMonsterTagsByMonsterId } from '../database/monsterTag';

const MonsterType = new GraphQLObjectType({
  name: 'MonsterType',
  description: 'Type for 5e monsters.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the monster.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'name of the monster.'
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      description: 'tags for the monster.',
      resolve: async parent => await getMonsterTagsByMonsterId(parent.id)
    },
    attack: {
      type: GraphQLString,
      description: 'name of the monster\'s attack.'
    },
    damage: {
      type: GraphQLString,
      description: 'damage of the monster\'s attack.'
    },
    hp: {
      type: GraphQLInt,
      description: 'hit points of the monster.'
    },
    armor: {
      type: GraphQLInt,
      description: 'armor of the monster.'
    },
    attackTags: {
      type: new GraphQLList(GraphQLString),
      description: 'the tags of the monster\'s attacks.',
      resolve: async parent => await getMonsterAttackTagsByMonsterId(parent.id)
    },
    qualities: {
      type: new GraphQLList(GraphQLString),
      description: 'special qualities of the monster.',
      resolve: async parent => await getMonsterQualitiesByMonsterId(parent.id)
    },
    description: {
      type: GraphQLString,
      description: 'description of the monster.'
    },
    instinct: {
      type: GraphQLString,
      description: 'instict of the monster.'
    },
    actions: {
      type: new GraphQLList(GraphQLString),
      description: 'actions that the monster can take.',
      resolve: async parent => await getMonsterActionsByMonsterId(parent.id)
    }
  })
})

export default MonsterType;