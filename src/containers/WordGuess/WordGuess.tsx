import { Letter, Word } from "@/interfaces/interfaces";
import React from "react";

type WordGuessProps = {
  selectedWord?: Word;
  guessedLetters: Letter[];
  showHint: boolean;
  category: string;
};

export default function WordGuess(props: WordGuessProps) {
  return (
    <>
      <div className="px-1 flex flex-col items-center gap-4">
        <h1 className="uppercase font-bold md:text-2xl">{props.category}</h1>
        <div className="flex flex-wrap gap-2">
          {props.selectedWord?.word.split("").map((letter, index) => (
            <div
              className={`h-10 w-10 md:h-16 md:w-16 flex items-center justify-center rounded-lg border-2 shadow-md font-semibold text-lg md:text-3xl ${
                !props.showHint && " mb-10"
              }`}
              key={index}
            >
              {props.guessedLetters.findIndex(
                (l: Letter) => l.char.toLowerCase() === letter.toLowerCase()
              ) > -1 && letter.toUpperCase()}
            </div>
          ))}
        </div>
        {props.showHint && (
          <div className="flex justify-between text-center w-full md:w-96 p-4 font-semibold italic bg-orange-100 shadow mb-4 rounded-lg">
            {props.selectedWord?.description}
          </div>
        )}
      </div>
    </>
  );
}
