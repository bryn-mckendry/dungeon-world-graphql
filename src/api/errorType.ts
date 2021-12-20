import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';


export const UnauthorizedAccessType: GraphQLObjectType = new GraphQLObjectType({
  name: 'UnauthorizedAccess',
  description: 'Result of failed authorization for a resource.',
  fields: () => ({
    status: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The HTTP status code.',
      resolve: () => 401
    },
    message: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The error message.',
      resolve: () => 'Unauthorized access.'
    }
  })
});