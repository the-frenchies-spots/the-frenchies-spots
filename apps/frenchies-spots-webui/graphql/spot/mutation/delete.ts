import { gql } from "@apollo/client";

const DELETE_SPOT_MUTATION = gql`
  mutation deleteSpot($id: String) {
    deleteSpot(id: $id)
  }
`;

export default DELETE_SPOT_MUTATION;
