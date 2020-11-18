import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../graphql/types";
import { resolvers } from "../graphql/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

apolloServer.applyMiddleware({ app });

export default app;
