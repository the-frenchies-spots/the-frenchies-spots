export interface Rating {
  id: string;
  rate: number;
  profileId: string;
  spotId: string;
}

export interface CreateOrUpdateRatingRequestResult {
  rating: { currentRating: Rating; maxVote: number; avg: number };
}

// {
//   "data": {
//       "rating": {
//           "currentRating": {
//               "id": "c02bd1bd-8b70-4f21-9833-21d22c5c99a7",
//               "rate": 4,
//               "profileId": "91aa3c92-f9e6-4f13-81aa-341af0e82c6f",
//               "spotId": "4c6e9c6e-7da2-4bc2-8a1c-b40a5dbb1300",
//               "__typename": "Rating"
//           },
//           "avg": 3.3333333333333335,
//           "maxVote": 3,
//           "__typename": "AverageRating"
//       }
//   }
// }
