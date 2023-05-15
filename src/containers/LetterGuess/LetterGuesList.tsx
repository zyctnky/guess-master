import { Letter } from "@/interfaces/interfaces";
import LetterGuesListItem from "./LetterGuesListItem";

type LetterGuesListProps = {
  letters: Letter[];
  handleGuessLatter: (letter: string) => any;
};

export default function LetterGuesList(props: LetterGuesListProps) {
  return (
    <>
      <div className="flex flex-wrap gap-3 w-full md:w-1/2 items-center justify-center">
        {props.letters.map((letter) => (
          <LetterGuesListItem
            letter={letter}
            handleGuessLatter={props.handleGuessLatter}
            key={letter.char}
          />
        ))}
      </div>
    </>
  );
}
