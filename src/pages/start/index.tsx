import LayoutMain from "@/containers/LayoutMain/LayoutMain";
import SelectCategoryList from "@/containers/SelectCategory/SelectCategoryList";
import SelectDifficulty from "@/containers/SelectDifficulty/SelectDifficulty";
import { Category, DifficultyLevel, StartGameResponse } from "@/interfaces/interfaces";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useState } from "react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Header from "@/containers/Header/Header";

const fetchCategories = async () => {
  const res = await fetch("https://guess-master.vercel.app/api/categories");
  const data = await res.json();
  const result: Category[] = data.data;
  return result;
};

const fetchDifficultyLevels = async () => {
  const res = await fetch("https://guess-master.vercel.app/api/difficulty-levels");
  const data = await res.json();
  const result: DifficultyLevel[] = data.data;
  return result;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: { destination: "/?callbackurl=/start", permanent: false },
    };
  }

  const categories = await fetchCategories();
  const difficultyLevels = await fetchDifficultyLevels();
  return {
    props: { categories, difficultyLevels },
  };
};

export default function SelectCategory(props: StartGameResponse) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(props.categories[0]);
  const [selectedDifficultyLevel, setSelectedDifficultyLevel] = useState<DifficultyLevel>(
    props.difficultyLevels[0]
  );

  return (
    <>
      <LayoutMain>
        <Header />
        <SelectDifficulty
          difficultyLevels={props.difficultyLevels}
          difficultyLevel={selectedDifficultyLevel}
          setDifficultyLevel={setSelectedDifficultyLevel}
        />
        <SelectCategoryList
          categories={props.categories}
          category={selectedCategory}
          setCategory={setSelectedCategory}
        />
        {selectedCategory && selectedDifficultyLevel && (
          <>
            {selectedCategory.readyForPlay ? (
              <Link
                href={`/play?c=${selectedCategory.id}&dl=${selectedDifficultyLevel.id}`}
                className="bg-indigo-600 text-white rounded-lg p-3 cursor-pointer hover:scale-105 w-40 text-center"
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
