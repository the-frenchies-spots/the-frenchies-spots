import React, { ReactNode } from "react";
import type { AppProps } from "next/app";
import type { Page } from "../types/page";

import { AppProvider } from "@/provider";
import { Guard } from "@/components";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
import { Toaster } from "react-hot-toast";

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component?.getLayout || ((page) => page);
  const Layout = getLayout(<Component {...pageProps} />);
  const layout = React.isValidElement(Layout) ? Layout : <>{Layout}</>;
  return (
    <AppProvider>
      <Guard excludedRoutes={["/spots/favorit", "/spots/edition"]}>
        <>
          {layout}
          <Toaster />
        </>
      </Guard>
    </AppProvider>
  );
}
