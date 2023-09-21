import React, { ReactElement } from "react";
import { PageLayout } from "../components/Layout/PageLayout/PageLayout";
import { HomePage } from "../components";

export default function Home() {
  return <HomePage />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout opacity={0}>{page}</PageLayout>;
};
