/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

const TOKEN_STORAGE_KEY = process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY || "";

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

export const Guard = ({ children, excludedRoutes }: GuardProps) => {
  const { refresh } = useAuth();

  const router = useRouter();

  const handleRedirect = (authentificated: boolean) => {
    if (!authentificated && excludedRoutes?.includes(router.pathname)) {
      router.push("/sign-in");
    }
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (storedValue?.length) {
      refresh().then(handleRedirect);
    } else {
      handleRedirect(false);
    }
  }, []);

  return <>{children}</>;
};
