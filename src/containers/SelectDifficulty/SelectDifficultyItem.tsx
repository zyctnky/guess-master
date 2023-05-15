import { useContext } from "react";

import GmIcon from "@/components/GmIcon";
import { GameStoreContext } from "@/stores/common";

export default function SelectDifficultyItem() {
  const { selectedDifficultyLevel } = useContext(GameStoreContext);

  const colorVariants = {
    green: "bg-green-200 text-green-800",
    amber: "bg-amber-200 text-amber-800",
    red: "bg-red-200 text-red-800",
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-between rounded-xl shadow-xl w-40 py-2 px-5 gap-2 ${
          colorVariants[selectedDifficultyLevel.baseColor as keyof typeof colorVariants]
        }`}
      >
        <span className="text-2xl">
          <GmIcon icon={selectedDifficultyLevel.icon} size={64} />
        </span>
        <span className="text-lg">{selectedDifficultyLevel.name}</span>
      </div>
    </>
  );
}
