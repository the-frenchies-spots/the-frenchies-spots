import React, { ReactNode } from "react";

import { ApolloProvider } from "@apollo/client";

import { client } from "../utils";

type Props = { children: ReactNode };

export const GraphqlProvider = (props: Props) => {
  const { children } = props;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
