import { gql } from "@apollo/client";

const BY_PRODUCT_MUTATION = gql`
  mutation buyProduct($gamePoint: Int, $token: String, $amount: Int) {
    profile: buyProduct(gamePoint: $gamePoint, token: $token, amount: $amount) {
      id
      gamePoint
    }
  }
`;

export default BY_PRODUCT_MUTATION;
