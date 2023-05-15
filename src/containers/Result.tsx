import { useState } from "react";
import Link from "next/link";
import { TbMoodCry, TbConfetti } from "react-icons/tb";
import { motion } from "framer-motion";

import { Word } from "@prisma/client";

import SaveAsLearnedButton from "./Button/SaveAsLearnedButton";
import StartGameButton from "./Button/StartGameButton";
import { ApiResult } from "@/interfaces/interfaces";

type ResultProps = {
  win: boolean;
  selectedWord?: Word;
};

export default function Result(props: ResultProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSavedAsLearned, setIsSavedAsLearned] = useState(true);
  const [savedAsLearnedMessage, setSavedAsLearnedMessage] = useState("");

  const handleSaveAsLearned = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/words/learned", {
      method: "POST",
      body: JSON.stringify(props.selectedWord),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result: ApiResult = await res.json();
    setIsSavedAsLearned(result.success);
    setSavedAsLearnedMessage(result.message);
    setIsLoading(false);
  };

  return (
    <>
      <motion.div
        className="w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: [0, 0.71, 0.5, 1.01] }}
      >
        {props.win ? (
          <div className="flex flex-col items-center gap-4 bg-green-100 text-green-500 md:w-1/3 w-full rounded-xl shadow-xl py-10 px-5">
            <TbConfetti className="text-9xl" />
            <span className="text-4xl font-extrabold rounded-lg w-3/4 text-center pt-2">
              {props.selectedWord?.word.toUpperCase()}
            </span>
            <span className="text-center mb-3 italic">{props.selectedWord?.description}</span>
            <span className="font-bold text-2xl mb-3">You win!</span>
            {!isSavedAsLearned ? (
              <div className="flex w-full px-3">
                <div className="bg-red-300 text-red-800 text-center p-3 w-full rounded-lg flex flex-col items-center gap-3">
                  {savedAsLearnedMessage}
                  <button
                    className="bg-red-800 text-red-300 w-16 rounded-md px-3 py-1 hover:bg-red-600"
                    onClick={() => setIsSavedAsLearned(true)}
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex w-full px-3 gap-5">
                {isLoading ? (
                  <div className="bg-green-500 text-white p-3 flex items-center justify-center text-lg w-full rounded-lg">
                    Saving
                  </div>
                ) : (
                  <>
                    <SaveAsLearnedButton onCLick={handleSaveAsLearned} />
                    <StartGameButton />
                  </>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 bg-red-100 text-red-500 md:w-1/3 w-full rounded-xl shadow-xl py-10 px-5">
            <TbMoodCry className="text-9xl" />
            <span className="text-4xl font-extrabold rounded-lg w-3/4 text-center pt-2">
              {props.selectedWord?.word.toUpperCase()}
            </span>
            <span className="text-center mb-3 italic">{props.selectedWord?.description}</span>
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
