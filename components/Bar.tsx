import { Skill } from "@/type";
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: Skill;
}> = ({ data: { name, level, Icon } }) => {
  const bar_width = `${level}%`;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100
      },
    },
  };

  return (
    <div className="text-white my-2 rounded-full bg-gray-300 dark:bg-dark-200">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;