import React, { ReactNode } from "react";

type GmCardProps = {
  children: ReactNode | ReactNode[];
};

function GmCard(props: GmCardProps) {
  return (
    <div className="border border-slate-100 w-full rounded-md p-8 flex flex-col items-center my-4 shadow">
      {props.children}
    </div>
  );
}

export default GmCard;
