import React, { useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/components/lib/animations';

import { LanguageContext } from '@/components/lib/contexts/LanguageContext';
import ServiceCard from '@/components/Index/ServiceCard';
import IntersectionObserverUtil from '@/components/lib/utils/Observer';

import { services as servicesFr } from '@/components/data/data.fr';
import { services as servicesEn } from '@/components/data/data.en';
import ScrollDownArrow from '@/components/ui/ScrollDownArrow';

const Services = () => {
  const { language } = useContext(LanguageContext);
  const data = language === 'en' ? servicesEn : servicesFr;
  const title = language === 'en' ? 'My skill set' : 'Mes compétences';

  const target = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const isBottom = IntersectionObserverUtil(target, root);

  return (
    <div
      ref={root}
      className="relative flex-grow p-5 xl:h-2 xl:overflow-auto xl:[&::-webkit-scrollbar]:hidden xl:[-ms-overflow-style:none] xl:[scrollbar-width:none] bg-gray-400 dark:bg-dark-100"
      style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
    >
      <ScrollDownArrow isBottom={isBottom} className="top-3/4 text-gray-500 dark:text-gray-600"/>
      <h4 className="mb-3 text-xl font-semibold tracking-wide">{title}</h4>
      <motion.div
        className="grid gap-6 my-3 lg:grid-cols-2"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {data.map((data) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-2 md:col-span-1"
            key={data.title}
          >
            <ServiceCard service={data} />
          </motion.div>
        ))}
      </motion.div>
      <span ref={target}/>
    </div>
  );
};

export default Services;
