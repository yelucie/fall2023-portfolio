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
            <div className="pb-3">
              <h5 className=" mt-2 text-xl font-bold">
                Master of Information Technology and Management
              </h5>
              <p>
                May 2024 | Illinois Institute of Technology, Chicago, Illinois
              </p>
              <p className="my-3">
                <strong>Specialization in Web Design and Application Development.</strong><br></br>
                <u>Notable Coursework</u>: Full-Stack Development, Front-end Development, Back-end Development, 
                Web Systems Architecture, Human-Computer Interaction
              </p>
            </div>
            <div>
              <h5 className=" mt-2 text-xl font-bold">
                Master of Engineering
              </h5>
              <p>
                June 2023 | ESEO Graduate School, Angers, France
              </p>
              <p className="my-3">
              <strong>Specialization in Software Engineering and Database management.</strong><br></br>
                <u>Notable Coursework</u>: Object-Oriented Software Development, Java Development, Software Testing, Relational Database, Spring 
                Boot RESTful API, Agile methodologies, Creativity and Entrepreneurship
              </p>
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div className="pb-3">
              <h5 className=" my-2 text-xl font-bold">
                Java Developer
              </h5>
              <p className="font-semibold">
                adesso insurance solutions GmbH, Cologne, Germany
              </p>
              <p className="my-3">
                I've reduced the cost per product release by implementing automated <strong>Java</strong> integration tests, 
                collaborating closely with a team of software engineers. 
                Additionally, I've conducted testing across six modules deployed on <strong>three Docker images</strong>, 
                utilizing <strong>JBoss</strong> and <strong>SQL databases</strong>, all accomplished within a tight deadline of three weeks. 
                Moreover, in response to a customer request, I efficiently <strong>updated a Docker image's</strong> JBoss application server and PostgreSQL database, 
                completing the task within a mere eight-hour timeframe. 
                These achievements highlight my ability to deliver efficient and effective solutions while maintaining a high standard of quality and timeliness.
              </p>
            </div>
          </div>
        </div>
        {/* Language and tool */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages (by preference)</h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Frameworks (by preference)</h5>
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