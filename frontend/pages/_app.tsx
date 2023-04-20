import * as React from "react";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";
import { getAuthFromStorage } from "@/utility/auth";
import { UserContext } from "../utility/Store";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: NextPage<MyAppProps> = (props) => {
  const nextRouter = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());

  const isOpenRoute =
    nextRouter.pathname === "/login" || nextRouter.pathname === "/register";

  useEffect(() => {
    const token = getAuthFromStorage();
    token.then((data) =>{

      if (!isOpenRoute && data === null) {
        nextRouter.push("/login");
      } else return;
    })
    
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <CssBaseline />
        <UserContext.Provider value="test">
          <Component {...pageProps} />
        </UserContext.Provider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
