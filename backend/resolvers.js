'user strict'

const User = require('./models/User');

exports.resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find({})
      return users;
    }
  },

  Mutation: {
    addUser: async (root, { name, description, category, instructions }) => {
      const newUser = await new User({
        name, description, category, instructions
      }).save()
      return newUser
    }
  }
}
