import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { GET_ALL_TAG } from "../graphql";
import { useLazyQuery } from "@apollo/client";
import { TagsRequestResult } from "../types";

interface TagProviderProps {
  children: React.ReactNode;
}

const TagProvider: React.FC<TagProviderProps> = ({ children }) => {
  const { tags, onTagChange } = useContext(AppContext);
  const [getTags] = useLazyQuery<TagsRequestResult>(GET_ALL_TAG);

  useEffect(() => {
    if (!tags) {
      getTags().then((result) => {
        if (result?.data?.tags) {
          onTagChange(result.data.tags);
        }
      });
    }
  }, [tags]);

  return <>{children}</>;
};

export default TagProvider;
