/* eslint-disable @next/next/no-page-custom-font */
import "styles/globals.css";

import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";

//CONTEXT
import { PresenceType } from "context/presenceType";

import NProgress from "nprogress";
import { SWRConfig } from "swr";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  //CONTEXT STAT
  const [presence, setPresence] = useState("");

  const value = {
    //SET DATA
    setPresence: setPresence,
    //DATA
    presence: presence,
  };

  return (
    <>
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SWRConfig
        value={{
          fetcher: fetch,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <PresenceType.Provider value={value}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PresenceType.Provider>
      </SWRConfig>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
