import { StartGameResponse } from "@/interfaces/interfaces";
import { Category, DifficultyLevel } from "@prisma/client";
import { ReactNode, createContext, useEffect, useState } from "react";

interface IGameStore {
  selectedCategory: Category;
  setSelectedCategory: (value: IGameStore["selectedCategory"]) => void;
  selectedDifficultyLevel: DifficultyLevel;
  setSelectedDifficultyLevel: (value: IGameStore["selectedDifficultyLevel"]) => void;
  categories: Category[];
  difficultyLevels: DifficultyLevel[];
  gameStartLoading: boolean;
}

export const GameStoreContext = createContext<IGameStore>({
  selectedCategory: { baseColor: "", color: "", icon: "", id: "", name: "", readyForPlay: false },
  setSelectedCategory: () => {},
  selectedDifficultyLevel: { baseColor: "", icon: "", id: "", name: "" },
  setSelectedDifficultyLevel: () => {},
  categories: [],
  difficultyLevels: [],
  gameStartLoading: false,
});

export function GameStoreProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<IGameStore["selectedCategory"]>({
    baseColor: "",
    color: "",
    icon: "",
    id: "",
    name: "",
    readyForPlay: false,
  });
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<
    IGameStore["selectedDifficultyLevel"]
  >({ baseColor: "", icon: "", id: "", name: "" });
  const [categories, setCategories] = useState<IGameStore["categories"]>([]);
  const [difficultyLevels, setDifficultyLevels] = useState<IGameStore["difficultyLevels"]>([]);
  const [gameStartLoading, setGameStartLoading] = useState<IGameStore["gameStartLoading"]>(false);

  const initApp = async () => {
    try {
      setGameStartLoading(true);
      const res = await fetch("http://localhost:3000/api/start-game");
      const data = await res.json();
      const startGame: StartGameResponse = data.data;
      setCategories(startGame.categories);
      setDifficultyLevels(startGame.difficultyLevels);
      setSelectedCategory(startGame.categories[0]);
      setSelectedDifficultyLevel(startGame.difficultyLevels[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setGameStartLoading(false);
    }
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <GameStoreContext.Provider
      value={{
        gameStartLoading,
        categories,
        difficultyLevels,
        selectedCategory,
        setSelectedCategory,
        selectedDifficultyLevel,
        setSelectedDifficultyLevel,
      }}
    >
      {children}
    </GameStoreContext.Provider>
  );
}
