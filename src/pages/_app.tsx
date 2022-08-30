import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Login from "layouts/Login";
import { AuthProvider, useAuth } from "contexts/auth";
import Amplify from "aws-amplify";
import awsconfig from "aws-exports";
import { LinearProgress } from "@mui/material";

Amplify.configure(awsconfig);

function PaxAppContent({ Component, pageProps }: AppProps) {
  const { user, loadingUser } = useAuth();

  if (loadingUser) return <LinearProgress color="primary" />;

  if (user === undefined && !loadingUser) return <Login />;

  return <Component {...pageProps} />;
}

function PaxApp(appProps: AppProps) {
  return (
    <AuthProvider>
      <PaxAppContent {...appProps} />
    </AuthProvider>
  );
}

export default PaxApp;
