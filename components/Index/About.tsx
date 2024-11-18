import React, { useContext } from 'react';

import { LanguageContext } from '@/components/lib/contexts/LanguageContext';
import { StringToHtml } from '@/components/lib/utils/StringToHtml';

import { about as aboutFr } from '@/components/data/data.fr';
import { about as aboutEn } from '@/components/data/data.en';

const About = () => {
  const { language } = useContext(LanguageContext);
  const data = language === 'en' ? aboutEn : aboutFr;
  const html = StringToHtml(data.about);

  return <h6 className="mb-8 text-base font-medium">{html}</h6>;
};

export default About;