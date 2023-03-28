import LayoutMain from "@/containers/LayoutMain/LayoutMain";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hangman App</title>
        <meta name="description" content="Play hangman app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutMain>
        <Link
          href="/start"
          className="bg-teal-600 px-9 py-2 my-10 text-white rounded-md shadow-lg outline-none"
        >
          Start Game
        </Link>
        <span className="text-sm font-semibold">v1.0.0</span>
      </LayoutMain>
    </>
  );
}
