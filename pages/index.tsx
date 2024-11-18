import React, { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { routeAnimation } from '@/components/lib/animations';
import { LanguageContext } from '@/components/lib/contexts/LanguageContext';

import About from '@/components/Index/About';
import Services from '@/components/Index/Services';

const Index: NextPage = () => {
  const { language } = useContext(LanguageContext);
  const title = language === 'en' ? "Lucie Ye's portfolio" : "Portfolio de Lucie YE";
  
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <About />
        <Services />
      </motion.div>
    </>
  );
};

export default Index;