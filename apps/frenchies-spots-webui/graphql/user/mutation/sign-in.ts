import { gql } from "@apollo/client";

const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String, $password: String) {
    user: signIn(email: $email, password: $password) {
      id
      token
      profile {
        id
        pseudo
        gamePoint
        photoUrl
      }
    }
  }
`;

export default SIGN_IN_MUTATION;
