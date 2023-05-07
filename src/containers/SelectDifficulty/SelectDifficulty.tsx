import { Dispatch, SetStateAction } from "react";
import { DifficultyLevel } from "@/interfaces/interfaces";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { motion } from "framer-motion";
import SelectDifficultyItem from "./SelectDifficultyItem";

type SelectDifficultyProps = {
  difficultyLevels: DifficultyLevel[];
  difficultyLevel: DifficultyLevel;
  setDifficultyLevel: Dispatch<SetStateAction<DifficultyLevel>>;
};

export default function SelectDifficulty(props: SelectDifficultyProps) {
  const previousDifficultyLevel = () => {
    const selectedIndex = props.difficultyLevels.indexOf(props.difficultyLevel);
    console.log(props);
    if (selectedIndex === 0)
      props.setDifficultyLevel(props.difficultyLevels[props.difficultyLevels.length - 1]);
    else props.setDifficultyLevel(props.difficultyLevels[selectedIndex - 1]);
  };
  const nextDifficultyLevel = () => {
    const selectedIndex = props.difficultyLevels.indexOf(props.difficultyLevel);
    if (selectedIndex === props.difficultyLevels.length - 1)
      props.setDifficultyLevel(props.difficultyLevels[0]);
    else props.setDifficultyLevel(props.difficultyLevels[selectedIndex + 1]);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="font-semibold text-xl">Select Difficulty Level</h2>
      <div className="md:w-1/3 w-full p-3 mb-3 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div
            className="rounded-full  bg-stone-100 text-stone-800 shadow-md  cursor-pointer hover:scale-110"
            onClick={() => previousDifficultyLevel()}
          >
            <TbArrowBadgeLeft size={40} />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
            key={props.difficultyLevel.id}
          >
            <SelectDifficultyItem difficultyLevel={props.difficultyLevel} />
          </motion.div>
          <div
            className="rounded-full  bg-stone-100 text-stone-800 shadow-md  cursor-pointer hover:scale-110"
            onClick={() => nextDifficultyLevel()}
          >
            <TbArrowBadgeRight size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
