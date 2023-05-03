import GmIcon from "@/components/GmIcon";
import { DifficultyLevel } from "@/interfaces/interfaces";
import React from "react";

type SelectDifficultyItemProps = {
  difficultyLevel: DifficultyLevel;
  onClick: () => Promise<void> | void;
  isSelected: boolean;
};

export default function SelectDifficultyItem(props: SelectDifficultyItemProps) {
  return (
    <>
      <div
        className={`flex items-center justify-between border rounded-lg shadow py-2 px-3 w-full gap-2 cursor-pointer hover:scale-105 ${
          props.isSelected ? "bg-indigo-600 text-white" : "hover:bg-slate-200"
        } `}
        onClick={props.onClick}
      >
        <span className="text-2xl">
          <GmIcon icon={props.difficultyLevel.icon} />
        </span>
        <span className="text-sm">{props.difficultyLevel.name}</span>
      </div>
    </>
  );
}
