import GmButton from "@/components/GmButton";

interface SaveAsLearnedButtonProps {
  onCLick: () => void;
}

function SaveAsLearnedButton(props: SaveAsLearnedButtonProps) {
  return (
    <>
      <GmButton
        onClick={props.onCLick}
        text="Save as Learned"
        bgColor="bg-orange-600"
        textColor="text-white"
        icon="TbBookmarks"
      />
    </>
  );
}

export default SaveAsLearnedButton;
