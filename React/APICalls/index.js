import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const { readFileSync } = require('fs');

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
    books: [Book]
  }
  type Book {
    bookId: Int
    title: String
    message: String
    author: String
    url: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    books: () => {
      return JSON.parse(readFileSync(join(__dirname, "books.json")).toString());
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);