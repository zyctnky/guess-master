import { TbFidgetSpinner } from "react-icons/tb";

type GmLoadingProps = {
  text: string;
};

function GmLoading(props: GmLoadingProps) {
  return (
    <div className="h-1/2 w-full p-5 flex flex-col gap-4 items-center justify-center">
      <TbFidgetSpinner className="animate-spin text-stone-800" size="48" viewBox="0 0 24 24" />
      <h1 className="text-xl font-semibold text-stone-800">{props.text}</h1>
    </div>
  );
}

export default GmLoading;
