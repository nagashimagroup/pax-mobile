import "tailwindcss/tailwind.css";
import "global.css";
import "polyfills.ts";
import type { AppProps } from "next/app";
import Login from "layouts/Login";
import { AuthProvider, useAuth } from "contexts/auth";
import Amplify from "aws-amplify";
import awsconfig from "aws-exports";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback";
import { startServiceWorker } from "utils/sw";

Amplify.configure(awsconfig);

function PaxAppContent({ Component, pageProps }: AppProps) {
  const { user, loadingUser } = useAuth();

  useEffect(() => {
    startServiceWorker();
  }, []);

  if (loadingUser) return <LinearProgress color="primary" />;

  if (user === undefined && !loadingUser) return <Login />;

  return <Component {...pageProps} />;
}

function PaxApp(appProps: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <PaxAppContent {...appProps} />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default PaxApp;
