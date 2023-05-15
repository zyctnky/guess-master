import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import "@/styles/globals.css";

import { Rubik } from "next/font/google";

import { GameStoreProvider } from "@/stores/common";
import Meta from "@/containers/Meta";
import { Analytics } from "@vercel/analytics/react";

const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <Meta />
      <SessionProvider session={session}>
        <GameStoreProvider>
          <main className={rubik.className}>
            <Component {...pageProps} />
          </main>
        </GameStoreProvider>
      </SessionProvider>

      <Analytics />
    </>
  );
}
