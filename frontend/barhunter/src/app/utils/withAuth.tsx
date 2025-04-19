/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";
import { getAccessToken } from "./localStorage";

const withAuth = (WrappedComponent: React.ComponentType): React.FC => {
  return function ProtectedRoute(props: any): ReactNode {
    const router = useRouter();

    useEffect(() => {
      const accessToken = getAccessToken();
      if (!accessToken) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
