import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations";

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* Education & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className=" my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">IIT</p>
            <p className="my-3">BLBLLBLALBLABLBLALBLBKABKJBKJA</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className=" my-2 text-xl font-bold">Java dev</h5>
            <p className="font-semibold">adesso</p>
            <p className="my-3">
              bsudhfozheuofjdisjfozijeonf zoeihfosn zefohdsolfjb fds dfa
            </p>
          </div>
        </motion.div>
      </div>
      {/* Language and tool */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;