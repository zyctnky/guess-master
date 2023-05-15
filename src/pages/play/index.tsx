import LayoutMain from "@/containers/LayoutMain";
import LetterGuesList from "@/containers/LetterGuess/LetterGuesList";
import PlayerLife from "@/containers/PlayerLife";
import Result from "@/containers/Result";
import WordGuess from "@/containers/WordGuess";
import WordHint from "@/containers/WordHint";
import React, { useContext, useEffect, useState } from "react";

import { Prisma } from "@prisma/client";
import { ApiResult } from "@/interfaces/interfaces";
import GmLoading from "@/components/GmLoading";
import AllWordsLearned from "@/containers/AllWordsLearned";
import { GameStoreContext } from "@/stores/common";

interface Letter {
  char: string;
  guessed: boolean;
}

const allLetters: Letter[] = [
  { char: "A", guessed: false },
  { char: "B", guessed: false },
  { char: "C", guessed: false },
  { char: "D", guessed: false },
  { char: "E", guessed: false },
  { char: "F", guessed: false },
  { char: "G", guessed: false },
  { char: "H", guessed: false },
  { char: "I", guessed: false },
  { char: "J", guessed: false },
  { char: "K", guessed: false },
  { char: "L", guessed: false },
  { char: "M", guessed: false },
  { char: "N", guessed: false },
  { char: "O", guessed: false },
  { char: "P", guessed: false },
  { char: "Q", guessed: false },
  { char: "R", guessed: false },
  { char: "S", guessed: false },
  { char: "T", guessed: false },
  { char: "U", guessed: false },
  { char: "V", guessed: false },
  { char: "W", guessed: false },
  { char: "X", guessed: false },
  { char: "Y", guessed: false },
  { char: "Z", guessed: false },
];

type WordWithDetails = Prisma.WordGetPayload<{
  include: { category: true; difficultyLevel: true };
}>;

export default function Play() {
  const [isLoading, setIsLoading] = useState(false);
  const [letters, setLetters] = useState(allLetters);
  const [playerLifes, setPlayerLifes] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [playerWin, setPlayerWin] = useState(false);
  const [word, setWord] = useState<WordWithDetails>();
  const [isFetchError, setIsFetchError] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");

  const { selectedCategory, selectedDifficultyLevel } = useContext(GameStoreContext);

  useEffect(() => {
    const resetLetters = () => {
      return allLetters.map((letter) => {
        return {
          char: letter.char,
          guessed: false,
        };
      });
    };
    setLetters(resetLetters());

    const fetchRandomWord = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://localhost:3000/api/words/random?category=${selectedCategory.id}&difficultyLevel=${selectedDifficultyLevel.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: ApiResult = await res.json();
      if (data) {
        setIsFetchError(!data.success);
        setFetchErrorMessage(data.message);
        setWord(data.data);
      }
    };

    fetchRandomWord().then(() => {
      setIsLoading(false);
    });
  }, [selectedCategory.id, selectedDifficultyLevel.id]);

  const handleGuessLatter = (letter: string) => {
    setLetterAsGuessed();

    if (!word?.word.toLowerCase().includes(letter.toLowerCase())) setPlayerLifes(playerLifes - 1);

    setPlayerWin(checkPlayerWin());

    function checkPlayerWin() {
      const guessedLetters = letters.filter((l) => l.guessed);
      if (word!.word) {
        for (let i = 0; i < word!.word.length; i++) {
          if (
            guessedLetters.findIndex(
              (gl) => gl.char.toLowerCase() === word!.word[i].toLowerCase()
            ) <= -1
          )
            return false;
        }
        return true;
      }
      return true;
    }

    function setLetterAsGuessed() {
      let newArray = [...letters];
      const letterIndex = newArray.findIndex((l) => l.char === letter);
      let letterForUpdate = newArray[letterIndex];
      if (letterForUpdate) {
        letterForUpdate.guessed = true;
        setLetters([...newArray]);
      }
    }
  };

  const handleShowHint = () => {
    setShowHint(!showHint);
  };

  return (
    <>
      <LayoutMain>
        {isLoading ? (
          <GmLoading text="The Game is Starting..." />
        ) : isFetchError ? (
          <AllWordsLearned message={fetchErrorMessage} />
        ) : (
          word &&
          (playerLifes > 0 ? (
            playerWin ? (
              <Result win={true} selectedWord={word} />
            ) : (
              <>
                <div className="flex justify-between items-center p-2 w-full md:w-1/2">
                  <PlayerLife remainingLifes={playerLifes} />
                  <WordHint
                    description={word!.description}
                    handleShowHint={handleShowHint}
                    showHint={showHint}
                    playerLifes={playerLifes}
                  />
                </div>
                <WordGuess
                  selectedWord={word}
                  guessedLetters={letters.filter((l) => l.guessed)}
                  showHint={showHint}
                  category={word!.category.name as string}
                  difficultyLevel={word!.difficultyLevel.name as string}
                />
                <LetterGuesList letters={letters} handleGuessLatter={handleGuessLatter} />
              </>
            )
          ) : (
            <Result win={playerLifes > 0} selectedWord={word!} />
          ))
        )}
      </LayoutMain>
    </>
  );
}
