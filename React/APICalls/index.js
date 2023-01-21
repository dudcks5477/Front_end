import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from "fs";

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
    books: [Book]
    book(bookId: Int): Book
  }
  type Mutation {
    addBook(title: String, message: String, author: String, url: String): Book
    editBook(bookId: Int, title: String, message: String, author: String, url: String): Book
    deleteBook(bookId: Int): Book
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
    },
    editBook: (parent, args, context, info) => {
      const books = JSON.parse(readFileSync(join(__dirname, "books.json")).toString());

      const newBooks = books.map(book => {
        if (book.bookId === args.bookId) {
          return args;
        } else {
          return book;
        }
      });

      writeFileSync(
        join(__dirname, "books.json"),
        JSON.stringify([ ... books, newBook])
      );
      return args;
    },
    delete: (parent, args, context, info) => {
      const books = JSON.parse(readFileSync(join(__dirname, "books.json")).toString());

      const deleted = books.find(book => book.bookID === args.bookId);

      const newBooks = books.filter((book) => book.bookId !== args.bookId);

      writeFileSync(
        join(__dirname, "books.json"),
        JSON.stringify([ ... books, newBook])
      );
      return deleted;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);