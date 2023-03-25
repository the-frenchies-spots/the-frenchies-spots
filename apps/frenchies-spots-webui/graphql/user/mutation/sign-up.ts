import { gql } from "@apollo/client";

const SIGN_UP_MUTATION = gql`
  mutation signUp($pseudo: String, $email: String, $password: String) {
    user: signUp(pseudo: $pseudo, email: $email, password: $password) {
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

export default SIGN_UP_MUTATION;
