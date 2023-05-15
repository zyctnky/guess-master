import GmButton from "@/components/GmButton";

function StartGameButton() {
  return (
    <GmButton
      href="/start"
      text="New Game"
      bgColor="bg-indigo-500"
      textColor="text-white"
      icon="TbLanguage"
    />
  );
}

export default StartGameButton;
