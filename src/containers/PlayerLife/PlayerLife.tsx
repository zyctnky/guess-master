import { TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";

type PlayerLifeProps = {
  remainingLifes: number;
};

export default function PlayerLife(props: PlayerLifeProps) {
  const totalLife = 5;

  const generateStars = () => {
    let content = [];
    for (let i = 0; i < props.remainingLifes; i++) {
      content.push(<TiHeartFullOutline className="text-indigo-600" key={i} />);
    }
    for (let i = 5; i < totalLife - props.remainingLifes + 5; i++) {
      content.push(<TiHeartOutline className="text-indigo-600" key={i} />);
    }
    return content;
  };

  return (
    <>
      <div className="flex gap-1 text-2xl md:text-3xl">{generateStars()}</div>
    </>
  );
}
