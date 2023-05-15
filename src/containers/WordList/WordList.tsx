import { useState } from "react";
import { motion } from "framer-motion";

import { WordLearned } from "@/interfaces/interfaces";

import WordListItem from "./WordListItem";
import WordDetails from "./WordDetails";

type WordListProps = {
  words: WordLearned[];
};

function WordList(props: WordListProps) {
  const [showWordDetails, setShowWordDetails] = useState(false);
  const [selectedWord, setSelectedWord] = useState<WordLearned | undefined>(undefined);

  const handleShowWordDetails = (word: WordLearned | null) => {
    if (word) {
      setSelectedWord(word);
      setShowWordDetails(true);
    } else {
      setShowWordDetails(false);
    }
  };
  return (
    <>
      {props.words.length > 0 ? (
        showWordDetails ? (
          <WordDetails wordLearned={selectedWord} hideWordDetails={handleShowWordDetails} />
        ) : (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <div className="grid md:grid-cols-4 grid-cols-3 gap-2 h-[60vh] shadow border p-2 rounded-lg overflow-y-auto">
              {props.words.map((wordLearned: WordLearned) => (
                <WordListItem
                  wordLearned={wordLearned}
                  key={wordLearned.word.id}
                  showWordDeatils={handleShowWordDetails}
                />
              ))}
            </div>
          </motion.div>
        )
      ) : (
        <div className="w-full bg-red-600 text-white rounded-lg px-2 py-4 text-center">
          <h1>Very Soon</h1>
        </div>
      )}
    </>
  );
}

export default WordList;
