import { useSession } from "next-auth/react";
import Image from "next/image";

import SignOutButton from "@/containers/Button/SignOutButton";
import GoogleSignInButton from "@/containers/Button/GoogleSignInButton";
import StartGameButton from "@/containers/Button/StartGameButton";
import GmCard from "@/components/GmCard";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="mx-auto flex flex-col items-center h-[100vh] md:py-10 py-3">
      <h1 className="text-4xl mb-3">
        guess<span className="font-bold">master</span>
      </h1>
      {session ? (
        <div className="w-80">
          <GmCard>
            {session.user?.image && (
              <div className="relative h-20 w-20 mb-4">
                <Image
                  src={session.user?.image}
                  alt={session.user?.name || ""}
                  className="inline-block rounded-full"
                  fill
                  sizes="20"
                />
              </div>
            )}
            <h1>{session.user?.name}</h1>
            <div className="mt-5 mb-3 w-full">
              <StartGameButton />
            </div>
            <div className="w-full">
              <SignOutButton />
            </div>
          </GmCard>
        </div>
      ) : (
        <div className="w-full md:w-1/3 px-2">
          <GmCard>
            <p className="text-center text-lg mb-8 font-semibold">
              Put your vocabulary to the test with Guess Master - can you guess the word before you
              run out of lives?
            </p>
            <div className="w-48">
              <GoogleSignInButton />
            </div>
          </GmCard>
        </div>
      )}

      <span className="text-sm font-semibold">v2.0</span>
    </div>
  );
}
