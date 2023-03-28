import LayoutMain from "@/containers/LayoutMain/LayoutMain";
import LetterGuesList from "@/containers/LetterGuess/LetterGuesList";
import PlayerLife from "@/containers/PlayerLife/PlayerLife";
import Result from "@/containers/Result/Result";
import WordGuess from "@/containers/WordGuess/WordGuess";
import WordHint from "@/containers/WordHint/WordHint";
import { Letter, Word, WordList } from "@/interfaces/interfaces";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { c, dl } = query;

  const res = await fetch(
    `https://guess-master.vercel.app/api/words?category=${c}&difficultyLevel=${dl}`
  );
  const data = await res.json();
  const result: WordList = data.data;
  return {
    props: result,
  };
};

export default function Play(props: WordList) {
  const [selectedWord, setSelectedWord] = useState<Word>();
  const [letters, setLetters] = useState(allLetters);
  const [playerLifes, setPlayerLifes] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [playerWin, setPlayerWin] = useState(false);

  useEffect(() => {
    const getRandomWord = () => {
      const wordList: WordList = props;

      if (wordList.words) {
        var randomIndex = Math.floor(Math.random() * wordList?.words.length);
        return wordList?.words[randomIndex];
      }
    };

    setSelectedWord(getRandomWord());
  }, [props]);

  const handleGuessLatter = (letter: string) => {
    setLetterAsGuessed();

    if (!selectedWord?.word.toLowerCase().includes(letter.toLowerCase()))
      setPlayerLifes(playerLifes - 1);

    setPlayerWin(checkPlayerWin());

    function checkPlayerWin() {
      const guessedLetters = letters.filter((l) => l.guessed);
      if (selectedWord) {
        for (let i = 0; i < selectedWord?.word.length; i++) {
          if (
            guessedLetters.findIndex(
              (gl) =>
                gl.char.toLowerCase() === selectedWord.word[i].toLowerCase()
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
    if (playerLifes > 2 && !showHint) {
      setPlayerLifes(playerLifes - 2);
      setShowHint(true);
    }
  };

  return (
    <>
      <LayoutMain>
        {playerLifes > 0 ? (
          playerWin ? (
            <Result win={true} selectedWord={selectedWord} />
          ) : (
            <>
              <div className="flex justify-between items-center p-2 w-full md:w-1/2">
                <PlayerLife remainingLifes={playerLifes} />
                <WordHint
                  description={selectedWord?.description}
                  handleShowHint={handleShowHint}
                  showHint={showHint}
                />
              </div>
              <WordGuess
                selectedWord={selectedWord}
                guessedLetters={letters.filter((l) => l.guessed)}
                showHint={showHint}
                category={props.category}
              />
              <LetterGuesList
                letters={letters}
                handleGuessLatter={handleGuessLatter}
              />
            </>
          )
        ) : (
          <Result win={playerLifes > 0} selectedWord={selectedWord} />
        )}
      </LayoutMain>
    </>
  );
}
