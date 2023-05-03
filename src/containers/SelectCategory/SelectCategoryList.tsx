import React, { ReactElement } from "react";
import SelectCategoryListItem from "./SelectCategoryListItem";

type SelectCategoryListProps = {
  children:
    | ReactElement<typeof SelectCategoryListItem>
    | Array<ReactElement<typeof SelectCategoryListItem>>;
};

export default function SelectCategoryList(props: SelectCategoryListProps) {
  return (
    <>
      <h2 className="font-semibold">Select Category</h2>
      <div className="grid grid-cols-3 gap-4 w-full md:w-1/3 p-3 mb-3">{props.children}</div>
    </>
  );
}
