import { Category } from "@/components/lib/definitions";
import React, { FunctionComponent } from "react";

const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  isSelected: boolean;
}> = ({ value, handlerFilterCategory, isSelected }) => {
  return (
    <li className={`cursor-pointer hover:text-purple-500 capitalize ${isSelected ? "text-purple-500" : ""}`}
      onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

export default NavItem;