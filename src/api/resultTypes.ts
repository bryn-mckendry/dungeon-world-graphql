import {
  GraphQLUnionType
} from 'graphql';
import { UnauthorizedAccessType } from './errorType';
import { MonsterType } from './monsterType';

export const MonsterMutationResultType: GraphQLUnionType = new GraphQLUnionType({
  name: 'MonsterMutationResult',
  description: 'Resulting data from mutating Monster resources.',
  types: [UnauthorizedAccessType, MonsterType],
  resolveType: val => val.name && val.id ? 'Monster' : 'UnauthorizedAccess'
});