import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "layouts";
import Login from "layouts/Login";
import { AuthProvider, useAuth } from "contexts/auth";
import Amplify from "aws-amplify";
import awsconfig from "aws-exports";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";

Amplify.configure(awsconfig);

function PaxAppContent({ Component, pageProps }: AppProps) {
  const { user, loadingUser } = useAuth();

  useEffect(() => {
    console.log({ user, loadingUser });
  }, [user, loadingUser]);

  if (loadingUser) return <LinearProgress color="primary" />;

  if (user === undefined && !loadingUser) return <Login />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

function PaxApp(appProps: AppProps) {
  return (
    <AuthProvider>
      <PaxAppContent {...appProps} />
    </AuthProvider>
  );
}

export default PaxApp;
