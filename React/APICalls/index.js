import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const { readFileSync } = require('fs');

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
    books: [Book]
    book(bookId: Int): Book
  }
  type Mutation {
    addBook(title: String, message: String, author: String, url: String): Book
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
    book: (parent, args, context, info) => {
      const books = JSON.parse(readFileSync(join(__dirname, "books.json")).toString());
      return books.find(book => book.bookId === args.bookId);
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const books = JSON.parse(readFileSync(join(__dirname, "books.json")).toString());
      const maxId = Math.max( ... books.map(book => book.bookId));
      const newBook =  { ...args, bookId: maxId + 1}
      writeFileSync(
        join(__dirname, "books.json"),
        JSON.stringify([ ... books, newBook])
      );
      return newBook;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);