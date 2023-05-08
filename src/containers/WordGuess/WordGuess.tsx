import { Letter, Word } from "@/interfaces/interfaces";
import { motion } from "framer-motion";
import React from "react";

type WordGuessProps = {
  selectedWord?: Word;
  guessedLetters: Letter[];
  showHint: boolean;
  category?: string;
  difficultyLevel?: string;
};

export default function WordGuess(props: WordGuessProps) {
  return (
    <>
      <div className="px-1 flex flex-col items-center gap-4">
        <div className="uppercase flex items-center flex-col">
          <span className="font-bold md:text-2xl">{props.category}</span>
          <span className="text-sm font-semibold text-gray-500">{props.difficultyLevel}</span>
        </div>
        <div className={`flex flex-wrap gap-2  ${!props.showHint && " mb-10"}`}>
          {props.selectedWord?.word.split("").map((letter, index) => (
            <div
              className="h-10 w-10 md:h-16 md:w-16 flex items-center justify-center rounded-lg border-2 shadow-md font-semibold text-lg md:text-3xl"
              key={index}
            >
              {props.guessedLetters.findIndex(
                (l: Letter) => l.char.toLowerCase() === letter.toLowerCase()
              ) > -1 && letter.toUpperCase()}
            </div>
          ))}
        </div>
        {props.showHint && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className="flex justify-between text-center w-full md:w-96 p-4 font-semibold italic bg-orange-100 shadow mb-4 rounded-lg">
              {props.selectedWord?.description}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
