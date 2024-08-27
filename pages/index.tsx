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
        <h6 className="mb-8 text-base font-medium">
          Hello World!
          <br></br><br></br>
          I&apos;m Lucie, a Full-Stack Developer with dual master&apos;s degrees in <strong>Software Engineering</strong> and <strong>IT Management</strong>.
          I specialize in building high-quality web applications, from elegant React interfaces to robust Spring Boot systems.
          My experience in agile teams has also enhanced my ability to work effectively with others to make projects that consistently deliver results ahead of schedule.
          <br></br><br></br>
          With experience from multiple technological environments in <strong>Angers (France)</strong>, <strong>Cologne (Germany)</strong>, and <strong>Chicago (IL)</strong>, I have gained a deep understanding of the tie between technology and innovation on a global scale.
          This exposure has allowed me to appreciate the diverse perspectives and unique approaches that drive technological advancements across different cultures.
          <br></br><br></br>
          <i>Let’s connect and explore how we can collaborate to bring innovative ideas to life!</i>
        </h6>
        <div
          className="flex-grow p-5 bg-gray-400 dark:bg-dark-100"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="mb-3 text-xl font-semibold tracking-wide">
            My skill set
          </h4>
          <motion.div
            className="grid gap-6 my-3 lg:grid-cols-2"
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
