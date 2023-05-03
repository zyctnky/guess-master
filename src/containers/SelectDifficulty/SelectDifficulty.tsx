import { ReactElement } from "react";
import SelectDifficultyItem from "./SelectDifficultyItem";

type SelectDifficultyProps = {
  children:
    | ReactElement<typeof SelectDifficultyItem>
    | Array<ReactElement<typeof SelectDifficultyItem>>;
};

export default function SelectDifficulty(props: SelectDifficultyProps) {
  return (
    <>
      <h2 className="font-semibold">Select Difficulty Level</h2>
      <div className="grid grid-cols-3 gap-4 md:w-1/3 w-full p-3 mb-3">
        {props.children}
      </div>
    </>
  );
}
