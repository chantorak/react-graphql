import { createSchema } from 'graphql-yoga';

export const schema = createSchema({
  typeDefs: `
    type Query {
      hello: String
      getUser(id: ID!): User
      getUsers: [User]
    }

    type User {
      id: ID!
      name: String!
      age: Int!
      address: Address!
    }

    type Address {
      street: String!
      city: String!
      country: String!
    }

    type Subscription {
      greetings: String
    }

    type Mutation {
      logMessage(message: String!): String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
      getUser: (_, { id }) => {
        // Simulated user data (can be fetched from a DB or API)
        const users = [
          {
            id: '1',
            name: 'Alice',
            age: 30,
            address: {
              street: '123 Main St',
              city: 'Wonderland',
              country: 'Fantasy Land',
            },
          },
          {
            id: '2',
            name: 'Bob',
            age: 40,
            address: {
              street: '456 Elm St',
              city: 'Nowhere',
              country: 'Unknown',
            },
          },
        ];

        // Find and return the user by id
        return users.find(user => user.id === id) || null;
      },
      getUsers: () => {
        const users = [
          {
            id: '1',
            name: 'Alice',
            age: 30,
            address: {
              street: '123 Main St',
              city: 'Wonderland',
              country: 'Fantasy Land',
            },
          },
          {
            id: '2',
            name: 'Bob',
            age: 40,
            address: {
              street: '456 Elm St',
              city: 'Nowhere',
              country: 'Unknown',
            },
          },
        ];

        // Find and return the user by id
        return users;
      },
    },
    Subscription: {
      greetings: {
        subscribe: async function* () {
          for (const hi of ['Hi', 'Bonjour', 'Hola', 'Ciao', 'Zdravo']) {
            yield { greetings: hi };
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
      },
    },
    Mutation: {
      logMessage: (_, { message }) => {
        console.log(message);
        return `Message logged: ${message}`;
      },
    },
  },
});
