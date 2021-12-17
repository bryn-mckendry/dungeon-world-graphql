import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './api';

const app: Application = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

export default app;