export interface Rating {
  id: string;
  rate: number;
  // profileId: string;
  // spotId: string;
}

export interface CreateOrUpdateRatingRequestResult {
  rating: { currentRating: Rating; maxVote: number; avg: number };
}
