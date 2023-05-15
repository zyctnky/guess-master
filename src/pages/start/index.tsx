import LayoutMain from "@/containers/LayoutMain";
import SelectCategoryList from "@/containers/SelectCategory/SelectCategoryList";
import SelectDifficulty from "@/containers/SelectDifficulty/SelectDifficulty";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

import { GameStoreContext } from "@/stores/common";

export default function SelectCategory() {
  const {
    selectedCategory,
    categories,
    setSelectedCategory,
    difficultyLevels,
    selectedDifficultyLevel,
    setSelectedDifficultyLevel,
  } = useContext(GameStoreContext);

  useEffect(() => {
    setSelectedCategory(categories[0]);
    setSelectedDifficultyLevel(difficultyLevels[0]);
  }, [categories, difficultyLevels, setSelectedCategory, setSelectedDifficultyLevel]);

  return (
    <>
      <LayoutMain>
        {selectedCategory && selectedDifficultyLevel && (
          <>
            <SelectDifficulty />
            <SelectCategoryList />

            {selectedCategory.readyForPlay ? (
              <Link
                href="/play"
                className="bg-indigo-500 text-white rounded-lg p-3 cursor-pointer hover:scale-105 w-40 text-center"
              >
                Start Game
              </Link>
            ) : (
              <div className="bg-red-600 text-white rounded-lg p-3 w-40 text-center">Very Soon</div>
            )}
          </>
        )}
      </LayoutMain>
    </>
  );
}
