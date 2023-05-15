import { useContext } from "react";

import GmIcon from "@/components/GmIcon";
import { GameStoreContext } from "@/stores/common";

export default function SelectCategoryListItem() {
  const { selectedCategory } = useContext(GameStoreContext);

  const colorVariants = {
    orange: "bg-orange-200 text-orange-800",
    lime: "bg-lime-200 text-lime-800",
    emerald: "bg-emerald-200 text-emerald-800",
    cyan: "bg-cyan-200 text-cyan-800",
    violet: "bg-violet-200 text-violet-800",
    pink: "bg-pink-200 text-pink-800",
    fuchsia: "bg-fuchsia-200 text-fuchsia-800",
    sky: "bg-sky-200 text-sky-800",
    rose: "bg-rose-200 text-rose-800",
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-between rounded-xl shadow py-2 px-5 gap-2 w-40 ${
          colorVariants[selectedCategory.baseColor as keyof typeof colorVariants]
        }`}
      >
        <span className="text-2xl">
          <GmIcon icon={selectedCategory.icon} size={64} />
        </span>
        <span className="text-lg">{selectedCategory.name}</span>
      </div>
    </>
  );
}
