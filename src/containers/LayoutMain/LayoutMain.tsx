import React, { ReactNode } from "react";

export type LayoutMainProps = {
  children: ReactNode;
};

export default function LayoutMain(props: LayoutMainProps) {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center h-[100vh] md:py-10 py-3">
        <h1 className="text-4xl mb-3">
          guess<span className="font-bold">master</span>
        </h1>
        {props.children}
      </div>
    </>
  );
}
