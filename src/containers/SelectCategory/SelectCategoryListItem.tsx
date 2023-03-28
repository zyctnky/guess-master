import MyIcon from "@/components/MyIcon/MyIcon";
import { Category } from "@/interfaces/interfaces";
import * as ReactIcons from "react-icons/all";

type SelectCategoryListItemProps = {
  category: Category;
  onClick: () => Promise<void> | void;
  isSelected: boolean;
};

export default function SelectCategoryListItem(
  props: SelectCategoryListItemProps
) {
  return (
    <>
      {props.category.readyForPlay ? (
        <div
          className={`flex flex-col items-center border rounded-lg shadow p-3 gap-2 cursor-pointer  ${
            props.isSelected ? "bg-indigo-600 text-white" : "hover:bg-slate-200"
          } `}
          onClick={props.onClick}
        >
          <span className="md:text-4xl text-3xl">
            <MyIcon icon={props.category.icon} />
          </span>
          <span className="text-sm">{props.category.name}</span>
        </div>
      ) : (
        <div className="flex flex-col items-center border rounded-lg shadow gap-2">
          <span className="text-xs bg-red-500 w-full text-center rounded-t text-white py-1">
            VERY SOON
          </span>
          <span className="md:text-4xl text-3xl text-slate-400">
            <MyIcon icon={props.category.icon} />
          </span>
          <span className="text-sm mb-2 text-slate-400">
            {props.category.name}
          </span>
        </div>
      )}
    </>
  );
}
