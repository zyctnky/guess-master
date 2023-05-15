import GmLoading from "@/components/GmLoading";
import GmSelect from "@/components/GmSelect";
import LayoutMain from "@/containers/LayoutMain";
import WordList from "@/containers/WordList/WordList";
import { WordLearned } from "@/interfaces/interfaces";
import { GameStoreContext } from "@/stores/common";
import { useContext, useEffect, useState } from "react";

export default function Words() {
  const [isLoadingWords, setIsLoadingWords] = useState(false);
  const [words, setWords] = useState([] as WordLearned[]);
  const {
    categories,
    difficultyLevels,
    selectedCategory,
    setSelectedCategory,
    selectedDifficultyLevel,
    setSelectedDifficultyLevel,
  } = useContext(GameStoreContext);

  useEffect(() => {
    setSelectedCategory(categories[0]);
    setSelectedDifficultyLevel(difficultyLevels[0]);
  }, [categories, difficultyLevels, setSelectedCategory, setSelectedDifficultyLevel]);

  useEffect(() => {
    const fetchWords = async () => {
      setIsLoadingWords(true);
      const res = await fetch(
        `http://localhost:3000/api/words/all?category=${selectedCategory.id}&difficultyLevel=${selectedDifficultyLevel.id}`
      );
      const data = await res.json();
      setWords(data.data);
      setIsLoadingWords(false);
    };

    fetchWords();
  }, [selectedCategory, selectedDifficultyLevel]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(categories.filter((c) => c.id === e.target.value)[0]);
  };
  const handleDifficultyLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDifficultyLevel(difficultyLevels.filter((dl) => dl.id === e.target.value)[0]);
  };

  return (
    <>
      <LayoutMain>
        <>
          <div className="w-full md:w-1/3 p-2">
            <div className="flex justify-between gap-5 items-center w-full mb-3">
              <GmSelect value={selectedDifficultyLevel.id} onChange={handleDifficultyLevelChange}>
                {difficultyLevels.map((difficultyLevel) => (
                  <option key={difficultyLevel.id} value={difficultyLevel.id}>
                    {difficultyLevel.name}
                  </option>
                ))}
              </GmSelect>
              <GmSelect value={selectedCategory.id} onChange={handleCategoryChange}>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </GmSelect>
            </div>
            <h1 className="font-bold text-center mb-2 mt-1">
              {words.filter((w) => w.learned).length} / {words.length} Learned
            </h1>

            {isLoadingWords ? (
              <div>
                <GmLoading text="Loading Words..." />
              </div>
            ) : (
              <WordList words={words} />
            )}
          </div>
        </>
      </LayoutMain>
    </>
  );
}
