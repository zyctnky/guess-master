import { Letter } from "@/interfaces/interfaces";

type LetterGuesListItemProps = {
  letter: Letter;
  handleGuessLatter: (letter: string) => any;
};

export default function LetterGuesListItem(props: LetterGuesListItemProps) {
  return (
    <>
      {props.letter.guessed ? (
        <div
          key={props.letter.char}
          className="shadow font-semibold rounded-lg w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl bg-indigo-500 text-white flex items-center justify-center"
        >
          {props.letter.char}
        </div>
      ) : (
        <button
          key={props.letter.char}
          className="shadow font-semibold rounded-lg w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl bg-slate-200  hover:bg-slate-300"
          onClick={() => props.handleGuessLatter(props.letter.char)}
        >
          {props.letter.char}
        </button>
      )}
    </>
  );
}
