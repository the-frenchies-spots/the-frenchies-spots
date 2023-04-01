import axios from "axios";

const apiURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const MAPBOX_API_KEY =
  "pk.eyJ1IjoiZnJlbmNoaWVzcG90cyIsImEiOiJjbGZzbmZ3YjEwMDQwM25wZWM1bm96emc4In0.CrgJmxNyiLfQ4QUewh_jXg";

export const searchLocation = async (keyWord: string) => {
  return axios({
    method: "get",
    url: `${apiURL}${keyWord}.json?access_token=${MAPBOX_API_KEY}`,
  });
};
