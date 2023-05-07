import GmIcon from "@/components/GmIcon";
import { DifficultyLevel } from "@/interfaces/interfaces";
import React from "react";

type SelectDifficultyItemProps = {
  difficultyLevel: DifficultyLevel;
};

export default function SelectDifficultyItem(props: SelectDifficultyItemProps) {
  const colorVariants = {
    green: "bg-green-200 text-green-800",
    amber: "bg-amber-200 text-amber-800",
    red: "bg-red-200 text-red-800",
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-between rounded-xl shadow-xl w-40 py-2 px-5 gap-2 ${
          colorVariants[props.difficultyLevel.baseColor]
        }`}
      >
        <span className="text-2xl">
          <GmIcon icon={props.difficultyLevel.icon} size={64} />
        </span>
        <span className="text-lg">{props.difficultyLevel.name}</span>
      </div>
    </>
  );
}
