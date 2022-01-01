import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import { getMonsterAttackTagsByMonsterId } from '../../database/monsterAttackTags';
import {
  getMonstersByMonsterAttackTagId,
  getMonstersByMonsterQualityId,
  getMonstersByMonsterTagId,
  getMonstersBySettingId
} from '../../database/monster';
import { getMonsterActionsByMonsterId } from '../../database/monsterActions';
import { getMonsterQualitiesByMonsterId } from '../../database/monsterQualities';
import { getSettingById } from '../../database/monsterSetting';
import { getMonsterTagsByMonsterId } from '../../database/monsterTag';

export const MonsterType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Monster',
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
    },
    setting_id: {
      type: GraphQLInt,
      description: 'id of the monster\'s setting.'
    },
    setting: {
      type: MonsterSettingType,
      description: 'the monster\'s setting.',
      resolve: async parent => await getSettingById(parent.setting_id)
    }
  })
});


export const MonsterTagType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterTag',
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
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the description of the tag.'
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'List of monsters that share this tag.',
      resolve: async parent => await getMonstersByMonsterTagId(parent.id)
    }
  })
});

export const MonsterQualityType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterQuality',
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
  name: 'MonsterAttackTag',
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
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the description of the attack tag.'
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'list of monsters that share this attack tag.',
      resolve: async parent => await getMonstersByMonsterAttackTagId(parent.id)
    }
  })
});

export const MonsterActionType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterAction',
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

export const MonsterSettingType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MonsterSetting',
  description: 'settings for monsters.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the setting.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'name of the setting.'
    },
    description: {
      type: GraphQLString,
      description: 'description of the setting.'
    },
    monsters: {
      type: new GraphQLList(MonsterType),
      description: 'monsters under this setting.',
      resolve: async parent => await getMonstersBySettingId(parent.id) 
    }
  })
});
