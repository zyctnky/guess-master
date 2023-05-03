import { FcGoogle } from "react-icons/fc";
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

type GmIconProps = {
  icon: string;
  size?: number;
};

export default function GmIcon(props: GmIconProps) {
  return (
    <>
      {props.icon === "TbCat" && <TbCat size={props.size} />}
      {props.icon === "TbApple" && <TbApple size={props.size} />}
      {props.icon === "TbBuilding" && <TbBuilding size={props.size} />}
      {props.icon === "TbBrandCakephp" && <TbBrandCakephp size={props.size} />}
      {props.icon === "TbColorSwatch" && <TbColorSwatch size={props.size} />}
      {props.icon === "TbChefHat" && <TbChefHat size={props.size} />}
      {props.icon === "TbCarrot" && <TbCarrot size={props.size} />}
      {props.icon === "TbMap2" && <TbMap2 />}
      {props.icon === "TbBallAmericanFootball" && <TbBallAmericanFootball size={props.size} />}
      {props.icon === "TbMoodSmile" && <TbMoodSmile size={props.size} />}
      {props.icon === "TbMoodEmpty" && <TbMoodEmpty size={props.size} />}
      {props.icon === "TbMoodAngry" && <TbMoodAngry size={props.size} />}
      {props.icon === "FcGoogle" && <FcGoogle size={props.size} />}
    </>
  );
}
