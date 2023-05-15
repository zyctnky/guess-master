import GmIcon from "@/components/GmIcon";

import { Prisma } from "@prisma/client";

import { WordLearned } from "@/interfaces/interfaces";

type WordListItemProps = {
  wordLearned: WordLearned;
  showWordDeatils: (word: WordLearned) => void;
};

type WordWithDetails = Prisma.WordGetPayload<{
  include: { category: true; difficultyLevel: true };
}>;

function WordListItem(props: WordListItemProps) {
  const word = props.wordLearned.word as WordWithDetails;

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
    <>
      {props.wordLearned.learned ? (
        <div
          key={word.id}
          className={`flex items-center justify-center py-4 px-2 rounded-lg cursor-pointer hover:shadow text-sm ${
            colorVariants[word.category.baseColor as keyof typeof colorVariants]
          }`}
          onClick={() => props.showWordDeatils(props.wordLearned)}
        >
          {word.word}
        </div>
      ) : (
        <div
          key={word.id}
          className={`flex items-center justify-center py-4 px-2 rounded-lg ${
            colorVariants[word.category.baseColor as keyof typeof colorVariants]
          }`}
        >
          <GmIcon icon={word.category.icon} size={32} />
        </div>
      )}
    </>
  );
}

export default WordListItem;
