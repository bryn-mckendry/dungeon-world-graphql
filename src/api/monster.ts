import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import {
  getMonsterActionsByMonsterId,
  getMonsterAttackTagsByMonsterId,
  getMonsterQualitiesByMonsterId,
  getMonstersByMonsterAttackTagId,
  getMonstersByMonsterQualityId,
  getMonstersByMonsterTagId,
  getMonsterTagsByMonsterId
} from '../database/monster';

export const MonsterType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterType',
  description: 'Type for monsters.',
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
      type: new GraphQLList(MonsterTagType),
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
      type: new GraphQLList(MonsterAttackTagType),
      description: 'the tags of the monster\'s attacks.',
      resolve: async parent => await getMonsterAttackTagsByMonsterId(parent.id)
    },
    qualities: {
      type: new GraphQLList(MonsterQualityType),
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
      type: new GraphQLList(MonsterActionType),
      description: 'actions that the monster can take.',
      resolve: async parent => await getMonsterActionsByMonsterId(parent.id)
    }
  })
});


export const MonsterTagType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterTagType',
  description: 'Tags for monsters.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the monster tag.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the tag itself.'
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'List of monsters that share this tag.',
      resolve: async parent => await getMonstersByMonsterTagId(parent.id)
    }
  })
});

export const MonsterQualityType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterQualityType',
  description: 'Qualities for monsters.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the monster quality.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the quality itself.'
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'list of monsters that share this quality.',
      resolve: async parent => await getMonstersByMonsterQualityId(parent.id)
    }
  })
});

export const MonsterAttackTagType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterAttackTagType',
  description: 'attack tag for monsters.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the monster attack tag'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the attack tag'
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'list of monsters that share this attack tag.',
      resolve: async parent => await getMonstersByMonsterAttackTagId(parent.id)
    }
  })
});

export const MonsterActionType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterActionType',
  description: 'action of a monster.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the monster action'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the action'
    },
    monster_id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the id of the monster this action is for.'
    }
  })
});
