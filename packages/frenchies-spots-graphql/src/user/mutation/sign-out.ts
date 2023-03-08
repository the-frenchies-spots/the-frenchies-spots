import { gql } from "@apollo/client";

const SIGN_OUT_MUTATION = gql`
  mutation signOut {
    signOut
  }
`;

export default SIGN_OUT_MUTATION;
