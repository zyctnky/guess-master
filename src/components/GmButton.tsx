import Link from "next/link";

import GmIcon from "./GmIcon";

type GmButtonProps = {
  href?: string;
  onClick?: () => void;
  text: string;
  icon?: string;
  bgColor?: string;
  textColor?: string;
};

function GmButton(props: GmButtonProps) {
  return (
    <>
      {props.href ? (
        <Link
          href={props.href}
          className={`${props.bgColor ? props.bgColor : "bg-white"} ${
            props.textColor ? props.textColor : "text-slate-700"
          } px-3 py-2 w-full rounded-md border border-slate-200 shadow-lg flex items-center justify-between hover:scale-105`}
        >
          {props.icon && <GmIcon icon={props.icon} />}
          {props.text}
        </Link>
      ) : (
        <button
          className={`${props.bgColor ? props.bgColor : "bg-white"} ${
            props.textColor ? props.textColor : "text-slate-700"
          } px-3 py-2 w-full rounded-md border border-slate-200 shadow-lg flex items-center justify-between hover:scale-105`}
          onClick={props.onClick}
        >
          {props.icon && <GmIcon icon={props.icon} size={24} />}
          {props.text}
        </button>
      )}
    </>
  );
}

export default GmButton;
