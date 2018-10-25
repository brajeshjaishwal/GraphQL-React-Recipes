// this is the GraphQl Schema reflecting the mongoose models

exports.typeDefs = `

type Recipe {
  _id: ID
  name: String!
  category: String!
  description: String!
  instruction: String!
  createdDate: String!
  likes: Int
  Username: String
}

type User {
  _id: ID
  username: String! @unique
  password: String!
  email: String!
  joinDate: String
  favorites: [Recipe]
}

type Query {
  getAllRecipes: [Recipe]

  getCurrentUser: User
}

type Token {
  token: String!
}

type Mutation {
  addRecipe(
  name: String!,
  category: String!,
  description: String!,
  instruction: String!,
  Username: String
    ): Recipe

  
  signinUser(
    username : String!
    password : String!
  ): Token
  
    signupUser(
    username: String! @unique
    password: String!
    email: String!
  ): Token
}

`;