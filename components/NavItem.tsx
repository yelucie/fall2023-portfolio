import { Category } from "@/type";
import React, { FunctionComponent } from "react";

const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
}> = ({ value, handlerFilterCategory }) => {
  return (
    <li
      className="cursor-pointer hover:text-green capitalize"
      onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

export default NavItem;