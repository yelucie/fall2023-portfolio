import React from "react";
import { services } from "../data";
import ServiceCard from "@/components/ServiceCard";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import Head from "next/head";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lucie Ye&apos;s portfolio</title>
      </Head>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h6 className="my-3 text-base font-medium">
        As a <b>versatile Full-Stack Developer</b> with a double master's degree in <b>Software Engineering</b> and <b>Web Development</b> from ESEO Graduate School (France) and Illinois Tech (IL, USA), 
        I can bring a wealth of expertise to the table. My experience includes working within <b>agile team</b> environments  
        where I've led successful projects, such as delivering <b>Spring Boot web applications</b> ahead of schedule and implementing <b>Next.JS</b> websites within tight deadlines. 
        I am seeking a dynamic role where the fusion of <b>innovation and collaboration</b> fosters the creation of cutting-edge solutions.
        </h6>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
            What I offer
          </h4>
          <motion.div
            className="grid gap-6 my-3 xl:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                className="col-span-2 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg md:col-span-1"
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default index;
