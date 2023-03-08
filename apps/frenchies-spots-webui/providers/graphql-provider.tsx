import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql";

type Props = { children: JSX.Element };

const GraphqlProvider = (props: Props) => {
  const { children } = props;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphqlProvider;
