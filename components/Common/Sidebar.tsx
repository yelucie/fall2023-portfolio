import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import { ButtonColor } from '@/components/ui/ButtonColor';
import { ButtonGray } from '@/components/ui/ButtonGray';
import { LanguageContext } from '@/components/lib/contexts/LanguageContext';

import { profile as profileFr } from '@/components/data/data.fr';
import { profile as profileEn } from '@/components/data/data.en';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FR, US } from 'country-flag-icons/react/3x2';
import Moon from '@/components/ui/svg/Moon';
import Sun from '@/components/ui/svg/Sun';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const data = language === 'en' ? profileEn : profileFr;
  const document = language === 'en' ? 'Lucie_Ye_Resume.pdf' : 'Lucie_YE_CV.pdf';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Basics */}
        <Image
          src="/images/profile.jpg"
          alt="avatar"
          className="mx-auto rounded-full ring-2 p-1 my-4 ring-gray-400 dark:ring-gray-200"
          height="128"
          width="128"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
          <span className="text-purple-500">{data.firstname}</span>{' '}
          {data.lastname}
        </h3>
        <ButtonGray className="px-2 py-1 my-3">{data.profession}</ButtonGray>
        <ButtonGray className="px-2 py-1 my-3">{data.hobby}</ButtonGray>

        {/* Socials */}
        <div className="flex w-9/12 mx-auto my-5 text-purple-500 justify-evenly md:w-full">
          <a href={data.linkedin} target="_blank">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
          <a href={data.github} target="_blank">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </a>
        </div>

        {/* Contacts */}
        <div
          className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
          style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
        >
          <p className="flex items-center justify-center">
            <GoLocation className="mr-2" />
            <span>{data.location}</span>
          </p>
          <p className="my-2">{data.email}</p>
          <p>{data.languages}</p>
        </div>

        {/* Resume Button */}
        <ButtonColor type="button" className="w-10/12">
          <a
            href={`/assets/${document}`}
            download={document}
          >
            {data.downloadLabel}
          </a>
        </ButtonColor>

        {/* Email Button */}
        <ButtonColor
          type="button"
          className="w-10/12 my-4"
          onClick={() => window.open('mailto:'+data.email)}
        >
          {data.emailLabel}
        </ButtonColor>
      </div>
      
      {/* Website Settings */}
      <div className="flex justify-center w-full p-4">
        <ButtonGray
          className="cursor-pointer w-10 h-10 mr-3 rounded-xl flex items-center justify-center hover:scale-105"
          onClick={toggleLanguage}
        >
          {language === 'en' ? (
            <FR className="w-6 rounded-sm" />
          ) : (
            <US className="w-6 rounded-sm" />
          )}
        </ButtonGray>

        {/* Theme Button */}
        {mounted && (
          <ButtonGray
            className="cursor-pointer w-10 h-10 rounded-xl flex items-center justify-center hover:scale-105"
            onClick={changeTheme}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </ButtonGray>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
