import { TbConfetti } from "react-icons/tb";
import StartGameButton from "./Button/StartGameButton";

type AllWordsLearnedProps = {
  message: string;
};

function AllWordsLearned(props: AllWordsLearnedProps) {
  return (
    <>
      <div className="flex flex-col items-center gap-10 bg-green-100 text-green-500 md:w-1/3 w-full rounded-xl shadow-xl py-10 px-5">
        <TbConfetti className="text-9xl" />
        <span className="text-3xl font-semibold">Congratulations! </span>
        <span className="text-lg text-center font-semibold">{props.message}</span>
        <div className="flex w-1/2 px-3 gap-5">
          <StartGameButton />
        </div>
      </div>
    </>
  );
}

export default AllWordsLearned;
