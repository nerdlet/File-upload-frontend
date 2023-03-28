import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
 const UPLOAD_FILE_MUTATION = gql`
  mutation UploadFile($name: String!, $mimeType: String!, $file: Upload!) {
    createFile(name: $name, mimeType: $mimeType, file: $file) {
      id
    }
  }
`; 

/* const UPLOAD_FILE_MUTATION = gql`
 mutation UploadFile($name: String!, $mimeType: String!, $file: Upload!) {
    createFile(name: $name, mimeType: $mimeType, file: $file) {
      id,
      name, 
      mimeTYp
    }
  }
`;   */

/* const EXAMPLE_UPLOAD_FILE_MUTATION = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`; */

/* const UPLOAD_FILE_MUTATION = gql`
mutation UploadFile($operations: String!, $map: String!, $0: Upload!) {
    createFile: createFile(
      input: { file: $0 },
      operations: $operations
      map: $map
    ) {
      id, 
      name,
      mimeType,
      file
    }
  }
`;   */


export { LOGIN_MUTATION, UPLOAD_FILE_MUTATION }