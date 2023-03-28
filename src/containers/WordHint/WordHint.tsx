import { TiLightbulb } from "react-icons/ti";

type WordHintProps = {
  description?: string;
  handleShowHint: () => any;
  showHint: boolean;
};

export default function WordHint(props: WordHintProps) {
  return (
    <>
      {!props.showHint ? (
        <TiLightbulb
          className="border rounded-md px-1 bg-indigo-600 text-white h-10 w-10 cursor-pointer"
          onClick={props.handleShowHint}
        />
      ) : (
        <TiLightbulb className="border rounded-md px-1 bg-indigo-300 text-white h-10 w-10" />
      )}
    </>
  );
}
