import {
  TbApple,
  TbBallAmericanFootball,
  TbBrandCakephp,
  TbBuilding,
  TbCarrot,
  TbCat,
  TbChefHat,
  TbColorSwatch,
  TbMap2,
  TbMoodAngry,
  TbMoodEmpty,
  TbMoodSmile,
} from "react-icons/tb";

type MyIconProps = {
  icon: string;
};

export default function MyIcon(props: MyIconProps) {
  return (
    <>
      {props.icon === "TbCat" && <TbCat />}
      {props.icon === "TbApple" && <TbApple />}
      {props.icon === "TbBuilding" && <TbBuilding />}
      {props.icon === "TbBrandCakephp" && <TbBrandCakephp />}
      {props.icon === "TbColorSwatch" && <TbColorSwatch />}
      {props.icon === "TbChefHat" && <TbChefHat />}
      {props.icon === "TbCarrot" && <TbCarrot />}
      {props.icon === "TbMap2" && <TbMap2 />}
      {props.icon === "TbBallAmericanFootball" && <TbBallAmericanFootball />}
      {props.icon === "TbMoodSmile" && <TbMoodSmile />}
      {props.icon === "TbMoodEmpty" && <TbMoodEmpty />}
      {props.icon === "TbMoodAngry" && <TbMoodAngry />}
    </>
  );
}
