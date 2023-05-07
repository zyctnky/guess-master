import React, { Dispatch, ReactElement, SetStateAction } from "react";
import SelectCategoryListItem from "./SelectCategoryListItem";
import { Category } from "@/interfaces/interfaces";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { motion } from "framer-motion";

type SelectCategoryListProps = {
  categories: Category[];
  category: Category;
  setCategory: Dispatch<SetStateAction<Category>>;
};

export default function SelectCategoryList(props: SelectCategoryListProps) {
  const previousCategory = () => {
    const selectedIndex = props.categories.indexOf(props.category);
    if (selectedIndex === 0) props.setCategory(props.categories[props.categories.length - 1]);
    else props.setCategory(props.categories[selectedIndex - 1]);
  };
  const nextCategory = () => {
    const selectedIndex = props.categories.indexOf(props.category);
    if (selectedIndex === props.categories.length - 1) props.setCategory(props.categories[0]);
    else props.setCategory(props.categories[selectedIndex + 1]);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h1 className="font-semibold text-xl">Select Category</h1>
      <div className="md:w-1/3 w-full p-3 mb-3 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div
            className="rounded-full bg-stone-100 text-stone-800 shadow-md  cursor-pointer hover:scale-110"
            onClick={() => previousCategory()}
          >
            <TbArrowBadgeLeft size={40} />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
            key={props.category.id}
          >
            <SelectCategoryListItem category={props.category} />
          </motion.div>
          <div
            className="rounded-full bg-stone-100 text-stone-800 shadow-md cursor-pointer hover:scale-110"
            onClick={() => nextCategory()}
          >
            <TbArrowBadgeRight size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
