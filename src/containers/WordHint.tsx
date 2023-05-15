import { TiLightbulb } from "react-icons/ti";

type WordHintProps = {
  description?: string;
  handleShowHint: () => any;
  showHint: boolean;
  playerLifes: number;
};

export default function WordHint(props: WordHintProps) {
  return (
    <>
      <TiLightbulb
        className="border rounded-md px-1 bg-indigo-500 text-white h-10 w-10 cursor-pointer"
        onClick={props.handleShowHint}
      />
    </>
  );
}
