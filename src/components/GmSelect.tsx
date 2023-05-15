import { ChangeEventHandler, ReactNode } from "react";

type GmSelectProps = {
  children: ReactNode | ReactNode[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value?: string;
};

function GmSelect(props: GmSelectProps) {
  return (
    <select
      onChange={props.onChange}
      value={props.value}
      className="w-full border rounded-lg p-2 text-md"
    >
      {props.children}
    </select>
  );
}

export default GmSelect;
