import React from "react";
import { services } from "../data";
import ServiceCard from "@/components/ServiceCard";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";

const index: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="my-3 text-base font-medium">
        BLABLABLABLBALBLABLBALBLABL bLblbblabdlblbdlblbal
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I offer
        </h4>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
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
  );
};

export default index;