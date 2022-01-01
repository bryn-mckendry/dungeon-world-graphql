import { GraphQLUnionType } from 'graphql';
import {
  MonsterAttackTagType,
  MonsterSettingType,
  MonsterTagType
} from '.';
import { ApiErrorType } from './errorType';
import { MonsterType } from './monsterType';

export const MonsterQueryResultType: GraphQLUnionType = new GraphQLUnionType({
  name: 'MonsterQueryResult',
  description: 'Resulting data from querying Monster resources.',
  types: [ApiErrorType, MonsterType],
  resolveType: val => val.id ? 'Monster' : 'ApiError'
});

export const MonsterAttackTagQueryResultType: GraphQLUnionType = new GraphQLUnionType({
  name: 'MonsterAttackTagQueryResult',
  description: 'Resulting data from querying Monster Attack Tag resources.',
  types: [ApiErrorType, MonsterAttackTagType],
  resolveType: val => val.id ? 'MonsterAttackTag' : 'ApiError'
});

export const MonsterTagQueryResultType: GraphQLUnionType = new GraphQLUnionType({
  name: 'MonsterTagQueryResult',
  description: 'Resulting data from querying Monster Tag resources.',
  types: [ApiErrorType, MonsterTagType],
  resolveType: val => val.id ? 'MonsterTag' : 'ApiError'
})

export const MonsterSettingQueryResultType: GraphQLUnionType = new GraphQLUnionType({
  name: 'MonsterSettingQueryResult',
  description: 'Resulting data from querying Monster Setting resources.',
  types: [ApiErrorType, MonsterSettingType],
  resolveType: val => val.id ? 'MonsterSetting' : 'ApiError'
})