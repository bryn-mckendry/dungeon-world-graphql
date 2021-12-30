import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const ApiErrorType: GraphQLObjectType = new GraphQLObjectType({
  name: 'ApiError',
  description: 'Result of failed API request.',
  fields: () => ({
    status: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The HTTP status code.'
    },
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The error message.'
    }
  })
});
