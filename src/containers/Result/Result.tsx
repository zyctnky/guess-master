import { Word } from "@/interfaces/interfaces";
import { motion } from "framer-motion";
import Link from "next/link";
import { TbMoodCry, TbConfetti } from "react-icons/tb";

type ResultProps = {
  win: boolean;
  selectedWord?: Word;
};

export default function Result(props: ResultProps) {
  return (
    <>
      <motion.div
        className="w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: [0, 0.71, 0.5, 1.01] }}
      >
        {props.win ? (
          <div className="flex flex-col items-center gap-4 bg-green-100 text-green-500 md:w-1/3 w-3/4 rounded-xl shadow-xl py-10">
            <TbConfetti className="text-9xl" />
            <span className="text-4xl font-extrabold rounded-lg w-3/4 text-center py-2 mb-3">
              {props.selectedWord?.word.toUpperCase()}
            </span>
            <span className="font-bold text-2xl mb-3">You win!</span>
            <Link
              href="/start"
              className="w-3/4 text-center bg-green-500 text-white rounded-lg py-2 shadow outline-none"
            >
              New Game
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 bg-red-100 text-red-500 md:w-1/3 w-3/4 rounded-xl shadow-xl py-10">
            <TbMoodCry className="text-9xl" />
            <span className="text-4xl font-extrabold rounded-lg w-3/4 text-center py-2 mb-3">
              {props.selectedWord?.word.toUpperCase()}
            </span>
            <span className="font-bold text-2xl mb-3">You lose!</span>
            <Link
              href="/start"
              className="w-3/4 text-center bg-red-500 text-white rounded-lg py-2 shadow outline-none"
            >
              New Game
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
}
