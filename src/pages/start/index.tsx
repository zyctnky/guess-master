import LayoutMain from "@/containers/LayoutMain/LayoutMain";
import SelectCategoryList from "@/containers/SelectCategory/SelectCategoryList";
import SelectCategoryListItem from "@/containers/SelectCategory/SelectCategoryListItem";
import SelectDifficulty from "@/containers/SelectDifficulty/SelectDifficulty";
import SelectDifficultyItem from "@/containers/SelectDifficulty/SelectDifficultyItem";
import {
  Category,
  DifficultyLevel,
  StartGameResponse,
} from "@/interfaces/interfaces";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";

const fetchCategories = async () => {
  const res = await fetch("https://guess-master.vercel.app/api/categories");
  const data = await res.json();
  const result: Category[] = data.data;
  return result;
};

const fetchDifficultyLevels = async () => {
  const res = await fetch("https://guess-master.vercel.app/api/difficulty-levels");
  const data = await res.json();
  const result: Category[] = data.data;
  return result;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await fetchCategories();
  const difficultyLevels = await fetchDifficultyLevels();
  return {
    props: { categories, difficultyLevels },
  };
};

export default function SelectCategory(props: StartGameResponse) {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] =
    useState<DifficultyLevel>();

  return (
    <>
      <LayoutMain>
        <SelectDifficulty>
          {props.difficultyLevels.map((difficultyLevel) => (
            <SelectDifficultyItem
              key={difficultyLevel.id}
              difficultyLevel={difficultyLevel}
              isSelected={selectedDifficultyLevel === difficultyLevel}
              onClick={() => setSelectedDifficultyLevel(difficultyLevel)}
            />
          ))}
        </SelectDifficulty>
        <SelectCategoryList>
          {props.categories.map((category) => (
            <SelectCategoryListItem
              key={category.id}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </SelectCategoryList>
        {selectedCategory && selectedDifficultyLevel && (
          <Link
            href={`/play?c=${selectedCategory.id}&dl=${selectedDifficultyLevel.id}`}
            className="bg-indigo-600 text-white rounded-lg p-3 cursor-pointer"
          >
            Start Game
          </Link>
        )}
      </LayoutMain>
    </>
  );
}
