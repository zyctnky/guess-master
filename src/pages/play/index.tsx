import LayoutMain from "@/containers/LayoutMain/LayoutMain";
import LetterGuesList from "@/containers/LetterGuess/LetterGuesList";
import PlayerLife from "@/containers/PlayerLife/PlayerLife";
import Result from "@/containers/Result/Result";
import WordGuess from "@/containers/WordGuess/WordGuess";
import WordHint from "@/containers/WordHint/WordHint";
import { Letter, RandomWord, Word } from "@/interfaces/interfaces";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Header from "@/containers/Header/Header";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: { destination: "/?callbackurl=/start", permanent: false },
    };
  }

  const { c, dl } = context.query;
  const res = await fetch(
    `https://guess-master.vercel.app/api/words/random?category=${c}&difficultyLevel=${dl}`
  );
  const data = await res.json();
  const word: RandomWord = data.data;
  return {
    props: word,
  };
};

export default function Play(props: RandomWord) {
  const [letters, setLetters] = useState(allLetters);
  const [playerLifes, setPlayerLifes] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [playerWin, setPlayerWin] = useState(false);

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
  }, [props]);

  const handleGuessLatter = (letter: string) => {
    setLetterAsGuessed();

    if (!props.word.toLowerCase().includes(letter.toLowerCase())) setPlayerLifes(playerLifes - 1);

    setPlayerWin(checkPlayerWin());

    function checkPlayerWin() {
      const guessedLetters = letters.filter((l) => l.guessed);
      if (props.word) {
        for (let i = 0; i < props.word.length; i++) {
          if (
            guessedLetters.findIndex(
              (gl) => gl.char.toLowerCase() === props.word[i].toLowerCase()
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
    if (!showHint) {
      setShowHint(true);
    }
  };

  return (
    <>
      <LayoutMain>
        <Header />
        {playerLifes > 0 ? (
          playerWin ? (
            <Result win={true} selectedWord={props} />
          ) : (
            <>
              <div className="flex justify-between items-center p-2 w-full md:w-1/2">
                <PlayerLife remainingLifes={playerLifes} />
                <WordHint
                  description={props.description}
                  handleShowHint={handleShowHint}
                  showHint={showHint}
                  playerLifes={playerLifes}
                />
              </div>
              <WordGuess
                selectedWord={props}
                guessedLetters={letters.filter((l) => l.guessed)}
                showHint={showHint}
                category={props.categoryName as string}
                difficultyLevel={props.difficultyLevelName as string}
              />
              <LetterGuesList letters={letters} handleGuessLatter={handleGuessLatter} />
            </>
          )
        ) : (
          <Result win={playerLifes > 0} selectedWord={props} />
        )}
      </LayoutMain>
    </>
  );
}
