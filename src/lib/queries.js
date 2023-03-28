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



export {
    GET_ALL_USERS,
    GET_USER
}
