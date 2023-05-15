import { motion } from "framer-motion";
import { TbArrowLeft } from "react-icons/tb";

import { Prisma } from "@prisma/client";

import { WordLearned } from "@/interfaces/interfaces";

type WordDetailsProps = {
  wordLearned: WordLearned | undefined;
  hideWordDetails: (word: WordLearned | null) => void;
};

type WordWithDetails = Prisma.WordGetPayload<{
  include: { category: true; difficultyLevel: true };
}>;

function WordDetails(props: WordDetailsProps) {
  const word = props.wordLearned?.word as WordWithDetails;

  const colorVariants = {
    orange: "bg-orange-200 text-orange-800 ",
    lime: "bg-lime-200 text-lime-800 ",
    emerald: "bg-emerald-200 text-emerald-800 ",
    cyan: "bg-cyan-200 text-cyan-800 ",
    violet: "bg-violet-200 text-violet-800 ",
    pink: "bg-pink-200 text-pink-800 ",
    fuchsia: "bg-fuchsia-200 text-fuchsia-800 ",
    sky: "bg-sky-200 text-sky-800 ",
    rose: "bg-rose-200 text-rose-800 ",
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <div
        key={word.id}
        className={`flex flex-col items-center justify-center gap-4 p-10 rounded-lg ${
          colorVariants[word.category.baseColor as keyof typeof colorVariants]
        }`}
      >
        <span className="text-2xl font-semibold">{word.word}</span>
        <span className="text-lg text-center">{word.description}</span>
        <button
          onClick={() => props.hideWordDetails(null)}
          className="flex gap-3 items-center mt-5 p-3 rounded-lg shadow hover:shadow-lg"
        >
          <TbArrowLeft /> Back to Words
        </button>
      </div>
    </motion.div>
  );
}

export default WordDetails;
