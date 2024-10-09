import Bar from "@/components/Bar";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";
import Head from "next/head";
import { schools } from "@/data";
import EducationCard from "@/components/EducationCard";

const education = () => {
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
        {/* Education */}
        {schools.map((school) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200"
              key={school.school}
            >
              <EducationCard school={school} /> 
            </motion.div>
          ))}
      </motion.div>
    </>
  );
};

//export default education;