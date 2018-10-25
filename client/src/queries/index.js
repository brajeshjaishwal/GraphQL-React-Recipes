import {gql} from 'apollo-boost';

/* Recipe Queries */
export const GET_ALL_RECIPES = gql `
  query {
    getAllRecipes {
      name,
      category,
      description,
      instruction,
      Username,
      createdDate,
      likes
    }
  }
`;

/* Recipe Mutations */

/* User Queries */

export const GET_CURRENT_USER = gql `
  query {
    getCurrentUser {
      username,
      joinDate,
      email
    }
  }
`;

/* User Mutations */

export const SIGNIN_USER = gql `
mutation($username : String !, $password : String !) {
  signinUser(username : $username, password : $password) {
    token
  }
}

`;

export const SIGNUP_USER = gql `
  mutation($username : String !, $email : String !, $password : String !) {
    signupUser(username : $username, email : $email, password : $password) {
      token
    }
  }
`;