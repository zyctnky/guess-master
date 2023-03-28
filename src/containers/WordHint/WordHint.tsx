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
      {!props.showHint && props.playerLifes > 2 ? (
        <TiLightbulb
          className="border rounded-md px-1 bg-indigo-600 text-white h-8 w-8 cursor-pointer"
          onClick={props.handleShowHint}
        />
      ) : (
        <TiLightbulb className="border rounded-md px-1 bg-indigo-300 text-white h-8 w-8" />
      )}
    </>
  );
}
