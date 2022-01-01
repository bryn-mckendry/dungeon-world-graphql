import { GraphQLUnionType } from 'graphql';
import { MonsterAttackTagType } from '.';
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