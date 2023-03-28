import { useSession, signIn, signOut } from "next-auth/react";
import React, { ReactNode } from "react";
import { TbSpy } from "react-icons/tb";

export type LayoutMainProps = {
  children: ReactNode;
};

export default function LayoutMain(props: LayoutMainProps) {
  const { data: session } = useSession();

  return (
    <>
      <div className="container mx-auto flex flex-col items-center h-[100vh] md:py-4 py-3">
        {session && session.user ? (
          <>
            <div className="flex flex-col items-center justify-between w-1/2">
              <h1 className="text-3xl">
                guess<span className="font-bold">master</span>
              </h1>
              <div className="flex gap-3 my-3">
                {session?.user?.name}
                <button onClick={() => signOut()} className="bg-red-600 text-white px-3 rounded">Sign out</button>
              </div>
            </div>
            {props.children}
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-between w-1/2">
              <h1 className="text-3xl">
                guess<span className="font-bold">master</span>
              </h1>
              <div className="md:w-1/2 flex flex-col text-center items-center justify-center py-10">
                <TbSpy className="text-8xl mb-4"/>
                <p className="mb-6 text-lg">
                  Test your vocabulary skills and become a <br />
                  <span className="font-bold">Guess Master!</span>
                </p>
                <button
                  onClick={() => signIn()}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
                >
                  Sign in
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
