import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";
import Head from "next/head";

const resume = () => {
  return (
    <>
      <Head>
        <title>Lucie Ye&apos;s portfolio</title>
      </Head>
      <motion.div
        className="px-6 py-2"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Education & exp */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>
              <h5 className=" my-2 text-xl font-bold">
                Master of Information Technology and Management
              </h5>
              <p className="font-semibold">
                Illinois Institute of Technology, Chicago, Illinois
              </p>
              <p className="my-3">
                I focused my studies on <strong>web development</strong>,
                particularly emphasizing <strong>frontend technologies</strong>{" "}
                and <strong>web system architecture</strong>. Furthermore, I
                engaged in projects that were closely tied to fostering{" "}
                <strong>innovation</strong> and{" "}
                <strong>open-box thinking.</strong>
              </p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div>
              <h5 className=" my-2 text-xl font-bold">
                Java development intern
              </h5>
              <p className="font-semibold">
                adesso insurance solutions GmbH, Cologne, Germany
              </p>
              <p className="my-3">
                I enhanced code efficiency by developing <strong>Java</strong>{" "}
                classes to optimize resource allocation from external CSV files.
                Additionally, I conducted comprehensive testing on six product
                modules across three Docker images with <strong>JBoss</strong>{" "}
                and SQL databases, ensuring successful functionality in customer
                environments for the 2022.1.0 version release.
              </p>
            </div>
          </div>
        </div>
        {/* Language and tool */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages</h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Frameworks</h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar data={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default resume;