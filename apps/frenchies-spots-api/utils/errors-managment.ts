import { GraphQLError } from "graphql";

interface TError {
  statusCode: number;
  errorMessage: Record<string, string>;
}

export enum codeErrors {
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS",
  UNAUTHENTICATED = "UNAUTHENTICATED",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  INCORRECT_PASSWORD = "INCORRECT_PASSWORD",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  SPOT_NOT_FOUND = "SPOT_NOT_FOUND",
  SPOT_ID_NOT_MATCH_PROFILE_ID = "SPOT_ID_NOT_MATCH_PROFILE_ID",
  SPOT_ID_MATCH_PROFILE_ID = "SPOT_ID_MATCH_PROFILE_ID",
  FAVORITE_NOT_FOUND = "FAVORITE_NOT_FOUND",
  FAVORITE_ID_NOT_MATCH_PROFILE_ID = "FAVORITE_ID_NOT_MATCH_PROFILE_ID",
  RATING_NOT_FOUND = "RATING_NOT_FOUND",
  RATING_ID_NOT_MATCH_PROFILE_ID = "RATING_ID_NOT_MATCH_PROFILE_ID",
  RATING_OUT_OF_RANGE = "RATING_OUT_OF_RANGE",
  SPOT_CATEGORY_NOT_MATCH_TAG_CATEGORY = "SPOT_CATEGORY_NOT_MATCH_TAG_CATEGORY",
  TAG_NOT_FOUND = "TAG_NOT_FOUND",
  TAG_IS_MANDATORY = "TAG_IS_MANDATORY",
  USER_DONT_HAVE_THE_PERMISSION = "USER_DONT_HAVE_THE_PERMISSION",
}

const errorsMessage: Record<keyof typeof codeErrors, TError> = {
  USER_ALREADY_EXISTS: {
    statusCode: 412,
    errorMessage: { en: "This user is already registred with the email: " },
  },
  USER_DONT_HAVE_THE_PERMISSION: {
    statusCode: 404,
    errorMessage: { en: "User don't have the permission to access to this functionnality" },
  },
  UNAUTHENTICATED: {
    statusCode: 401,
    errorMessage: { en: "User is not authenticated" },
  },
  USER_NOT_FOUND: {
    statusCode: 401,
    errorMessage: { en: "No user registred with the email: " },
  },
  INCORRECT_PASSWORD: {
    statusCode: 401,
    errorMessage: { en: "Incorrect password" },
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    errorMessage: { en: "500 Internal Server Error: " },
  },
  SPOT_NOT_FOUND: {
    statusCode: 404,
    errorMessage: { en: "No spot found with id: " },
  },
  SPOT_ID_NOT_MATCH_PROFILE_ID: {
    statusCode: 404,
    errorMessage: { en: "Spot profile id doesn't match with the current profile id"}
  },
  SPOT_ID_MATCH_PROFILE_ID: {
    statusCode: 404,
    errorMessage: { en: "Spot ProfileId is the same that your profileId. You can't rate your own spot."}
  },
  RATING_NOT_FOUND: {
    statusCode: 404,
    errorMessage: { en: "No rating found with id: "}
  },
  RATING_ID_NOT_MATCH_PROFILE_ID: {
    statusCode: 404,
    errorMessage: { en: "Rating profile id doesn't match already with the current profile id"}
  },
  RATING_OUT_OF_RANGE: {
    statusCode: 404,
    errorMessage: { en: "Rate is not include between 1 and 5"}
  },
  FAVORITE_NOT_FOUND: {
    statusCode: 404,
    errorMessage: { en: "No favorite found with id: "}
  },
  FAVORITE_ID_NOT_MATCH_PROFILE_ID: {
    statusCode: 404,
    errorMessage: { en: "Favorite profile id doesn't match already with the current profile id"}
  },
  SPOT_CATEGORY_NOT_MATCH_TAG_CATEGORY: {
    statusCode: 404,
    errorMessage: { en : "Spot category and tag category doesn't match." }
  },
  TAG_NOT_FOUND: {
    statusCode: 404,
    errorMessage: { en: "No tag found with id: "}
  },
  TAG_IS_MANDATORY: {
    statusCode: 404,
    errorMessage: { en: "Tag in spot is mandatory"}
  }
};

class GenericError extends GraphQLError {
  constructor(codeError: keyof typeof codeErrors, err: string = "") {
    const errorMessage = errorsMessage[codeError].errorMessage["en"];
    const statusCode = errorsMessage[codeError].statusCode;

    super(`${errorMessage}${err}`, {
      extensions: {
        code: codeError,
        http: { status: statusCode },
      },
    });
  }
}

export default GenericError;
