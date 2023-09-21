/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useEffect } from "react";

import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";

const TOKEN_STORAGE_KEY = process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY || "";

interface GuardLayoutProps {
  children: ReactNode | ((connected: boolean) => ReactNode);
  isProtected?: boolean;
}

export const GuardLayout = ({
  children,
  isProtected = false,
}: GuardLayoutProps) => {
  const { user, refresh } = useAuth();

  const router = useRouter();

  const handleRedirect = (authentificated: boolean) => {
    if (isProtected && !authentificated) {
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
  }, [router.pathname]);

  if (!user && isProtected)
    return <LoadingOverlay visible={true} overlayBlur={2} />;
  return <>{typeof children === "function" ? children(!!user) : children}</>;
};
