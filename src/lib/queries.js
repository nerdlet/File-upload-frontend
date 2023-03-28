import { gql } from '@apollo/client';

const GET_USER = gql`
query getUser($username: String!) {
  user(username: $username) {
    id
    username
    isSuperuser
    isStaff
  }
}
`;


const GET_ALL_USERS = gql`
query {
    allUsers {
      items {
        id,
        username,
        isSuperuser,
        isStaff
      }
    }
  }
`;


const CREATE_USER_MUTATION = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(
      username: $username,
      password: $password,
      isSuperuser: false,
      isStaff: false,
      canLogin: true,
    ) {
      user {
        id
        username
      }
    }
  }
`;



export {
   CREATE_USER_MUTATION,
    GET_ALL_USERS,
    GET_USER
}
