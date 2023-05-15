import { useContext } from "react";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { motion } from "framer-motion";

import SelectCategoryListItem from "./SelectCategoryListItem";
import { GameStoreContext } from "@/stores/common";

export default function SelectCategoryList() {
  const { categories, selectedCategory, setSelectedCategory } = useContext(GameStoreContext);

  const previousCategory = () => {
    const selectedIndex = categories.indexOf(selectedCategory);
    if (selectedIndex === 0) setSelectedCategory(categories[categories.length - 1]);
    else setSelectedCategory(categories[selectedIndex - 1]);
  };
  const nextCategory = () => {
    const selectedIndex = categories.indexOf(selectedCategory);
    if (selectedIndex === categories.length - 1) setSelectedCategory(categories[0]);
    else setSelectedCategory(categories[selectedIndex + 1]);
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
            key={selectedCategory.id}
          >
            <SelectCategoryListItem />
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
