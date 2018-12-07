const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Query {
    getAllUsers: [User]!
  }

  type User{
    _id: ID!
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
  }


  type Mutation{
    addUser(name: String!, description: String!, category: String!, instructions:String!): User!
  }
`;
