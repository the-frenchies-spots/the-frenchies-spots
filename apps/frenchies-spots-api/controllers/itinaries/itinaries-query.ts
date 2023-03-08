import { itinariesBusiness } from "../../business";

export const itinariesQuery = {
  itinaries: () => {
    return itinariesBusiness.getAll();
  },
};
