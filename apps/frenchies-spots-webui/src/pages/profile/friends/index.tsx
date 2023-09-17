import React, { ReactElement } from "react";
import { PageLayout } from "../../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../../components/Layout/NavigationLayout/NavigationLayout";
import { useQuery } from "@apollo/client";
import {
  ContactEntity,
  QueryContactsArgs,
  queries,
} from "@frenchies-spots/gql";
import { Log } from "@frenchies-spots/material";
import { GuardLayout } from "../../../components/Layout/GuardLayout/GuardLayout";

const FriendsPage = () => {
  const { data, loading } = useQuery<
    { contacts: ContactEntity[] },
    QueryContactsArgs
  >(queries.contacts, {
    variables: { contactsInput: { isFriend: true, authorization: true } },
  });

  return <Log value={data} />;
};

FriendsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <GuardLayout isProtected>
        <NavigationLayout>{page}</NavigationLayout>
      </GuardLayout>
    </PageLayout>
  );
};

export default FriendsPage;
