import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import Head from "next/head";
import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Head>
        <title>Guess Master</title>
        <meta name="description" content="Play guessing word game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
