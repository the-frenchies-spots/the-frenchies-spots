import { itinariesBusiness } from '../../business';
import { ItinaryFindManyResult } from '../../types';

export const itinariesQuery = {
  itinaries: (): ItinaryFindManyResult => {
    return itinariesBusiness.getAll();
  }
};
