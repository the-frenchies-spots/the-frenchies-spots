import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./star-rating-style";

// Filled Star. You can also give the path from local
const starImageFilled =
  "https://res.cloudinary.com/db00tntyg/image/upload/v1675281587/travelerSpot/assets/bozgfqkpombbsmambkva.png";
// Empty Star. You can also give the path from local
const starImageCorner =
  "https://res.cloudinary.com/db00tntyg/image/upload/v1675281587/travelerSpot/assets/ibugu4bcykisnmwgosvz.png";

type StarRatingProps = {
  onChange?: (rating: number) => void;
  max?: number;
  value?: number;
  init?: boolean;
};

export const StarRating = (props: StarRatingProps) => {
  const { onChange, max = 5, value = 0, init = false } = props;
  const [rating, setRating] = useState(value);

  const maxRating = useMemo<number[]>(
    () => new Array(max).fill(0).map((_, index) => index++),
    [max]
  );

  useEffect(() => {
    setRating(value);
  }, [value]);

  const handleChange = useCallback(
    (rateValue: number) => {
      setRating(rateValue);
      if (typeof onChange === "function") {
        onChange(rateValue);
      }
    },
    [rating]
  );

  //   {defaultRating} / {Math.max.apply(null, maxRating)} (2/5)
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item) => {
        const rateValue = item + 1;
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => handleChange(rateValue)}
          >
            <Image
              style={styles.starImageStyle}
              source={{
                uri: init
                  ? starImageCorner
                  : rateValue <= rating
                  ? starImageFilled
                  : starImageCorner,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
