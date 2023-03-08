import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  memo,
} from "react";
import { useMutation } from "@apollo/client";
import { CREATE_OR_UPDATE_RATING_MUTATION } from "../../graphql";
import { Container, StarRating, Typography } from "../../materials";
import { CreateOrUpdateRatingRequestResult, SpotType } from "../../types";
import { AuthContext } from "../../context";
import { useTheme } from "../../hooks";
import { styles } from "./spot-rating-style";
import { cloneDeep } from "lodash";

type TRatingParams = {
  ratingId: string;
  currentRate: number;
  avg: number;
  maxVote: number;
};

type SpotRatingProps = {
  spot: SpotType;
};

const SpotRating = memo(function Rating(props: SpotRatingProps) {
  const { spot } = props;
  const { id: spotId } = spot;
  const style = useTheme(styles);
  const { currentUser } = useContext(AuthContext);

  const [rate, setRate] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const [ratingParams, setRatingParams] = useState<TRatingParams>({
    ratingId: "empty",
    currentRate: 0,
    avg: 0,
    maxVote: 0,
  });

  const { ratingId } = ratingParams;

  const [upsertRating] = useMutation<CreateOrUpdateRatingRequestResult>(
    CREATE_OR_UPDATE_RATING_MUTATION
  );

  const handleUpdateRating = useCallback(
    (rating: CreateOrUpdateRatingRequestResult["rating"]) => {
      const { currentRating, avg, maxVote } = rating;
      const ratingId = currentRating.id;
      const newParams = {
        currentRate: currentRating.rate,
        avg,
        maxVote,
        ratingId,
      };
      setRatingParams(cloneDeep({ ...newParams }));
    },
    [ratingParams]
  );

  const handleRatingChange = (newRate: number) => {
    setRate(newRate);
  };

  useEffect(() => {
    if (rate !== 0 && currentUser) {
      upsertRating({
        variables: {
          ratingId,
          spotId,
          rate: rate,
        },
      }).then((newRate) => {
        if (newRate.data) {
          handleUpdateRating(newRate.data.rating);
        }
      });
    }
  }, [rate, ratingId, spotId]);

  useEffect(() => {
    if (!mounted) {
      setRatingParams((current) => ({
        ...current,
        avg: spot?.averageRating || 0,
      }));

      const ratings = spot?.ratings;

      if (ratings?.length) {
        setRatingParams((current) => ({
          ...current,
          maxVote: ratings.length,
        }));
        const currentRate = ratings.find(
          (rate) => rate.profileId === currentUser?.profileId
        );
        if (currentRate) {
          setRatingParams((current) => ({
            ...current,
            currentRate: currentRate.rate,
            ratingId: currentRate.id,
          }));
        }
      }
      setMounted(true);
    }
  }, [spot]);

  return (
    <Container direction="row" align="center">
      {currentUser && spot.profileId !== currentUser?.profileId && (
        <StarRating
          value={ratingParams.currentRate}
          onChange={handleRatingChange}
          init={ratingParams.currentRate === 0}
        />
      )}

      <Typography style={style.rating}>
        Note: {ratingParams.avg}/5 - ({ratingParams.maxVote} votes)
      </Typography>
    </Container>
  );
});

export default SpotRating;
