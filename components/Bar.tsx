import { Skill } from "@/type";
import React, { FunctionComponent } from "react";

const Bar: FunctionComponent<{
  data: Skill;
}> = ({ data: { name, level, Icon } }) => {
  return (
    <div className="text-white my-2 rounded-full bg-gray-300 dark:bg-dark-200">
      <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
      style={{ width: level }}>
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
