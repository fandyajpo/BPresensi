import "styles/globals.css";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useState, useEffect, useMemo } from "react";

//CONTEXT
import { PresenceType } from "context/presenceType";
import { BackType } from "context/backType";
import { UserLogged } from "context/userLogged";

import { PresentContent } from "context/presentContent";

import NProgress from "nprogress";
import { SWRConfig } from "swr";
import fetch from "lib/fetchJson";
import { useRouter } from "next/router";
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  //CONTEXT STATE
  const [presence, setPresence] = useState("");
  const [back, setBack] = useState("BACK");
  const [presentContent, setPresentContent] = useState();
  const value = {
    //SET DATA
    setBack: setBack,
    setPresence: setPresence,
    setPresentContent: setPresentContent,
    //DATA
    back: back,
    presence: presence,
    presentContent: presentContent,
  };

  const fromReactNative = (e) => {
    try {
      sendToMobile(Router.asPath);
      const data = JSON.stringify(e.data);
      setBack(data);
      if (back === "BACK") {
        if (
          Router.pathname === "/auth/home/" ||
          Router.pathname === "/auth/jadwal" ||
          Router.pathname === "/auth/riwayat" ||
          Router.pathname === "/auth/rekap" ||
          Router.pathname === "/auth/profile/"
        ) {
          sendToMobile({ mode: "EXITAPP" });
        } else {
          Router.back();
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const sendToMobile = (file) => {
    window.ReactNativeWebView.postMessage(JSON.stringify(file));
  };

  useEffect(() => {
    document.addEventListener("message", fromReactNative);
    return () => document.removeEventListener("message", fromReactNative);
  }, []);

  useEffect(() => {
    window.addEventListener("message", fromReactNative);
    return () => window.removeEventListener("message", fromReactNative);
  }, []);

  return (
    <>
      <Head>
        <meta name='mobile-web-app-capable' content='yes' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://unpkg.com/nprogress@0.2.0/nprogress.css'
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
        <PresentContent.Provider value={value}>
          <UserLogged.Provider value={value}>
            <BackType.Provider value={value}>
              <PresenceType.Provider value={value}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </PresenceType.Provider>
            </BackType.Provider>
          </UserLogged.Provider>
        </PresentContent.Provider>
      </SWRConfig>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;

// if (
//   data.method == "BACK" ||
// Router.pathname === "/auth/home/" ||
// Router.pathname === "/auth/jadwal/" ||
// Router.pathname === "/auth/riwayat/" ||
// Router.pathname === "/auth/rekap/" ||
// Router.pathname === "/auth/profile/"
// ) {
//   sendToMobile({ mode: "EXITAPP" });
// } else {
//   Router.back();
// }
