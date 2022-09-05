import "tailwindcss/tailwind.css";
import "global.css";
import type { AppProps } from "next/app";
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
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

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
