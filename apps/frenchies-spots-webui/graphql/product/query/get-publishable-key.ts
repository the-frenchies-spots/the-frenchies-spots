import { gql } from "@apollo/client";

const GET_PUBLISHABLE_KEY_QUERY = gql`
  query getBuyProductRequest($amount: Int) {
    publishableKey: getBuyProductRequest(amount: $amount)
  }
`;

export default GET_PUBLISHABLE_KEY_QUERY;
