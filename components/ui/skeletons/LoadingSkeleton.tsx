import { ThemeProvider } from 'next-themes';
import React from 'react';
import { SidebarSkeleton } from './SidebarSkeleton';
import { NavbarSkeleton } from './NavbarSkeleton';
import { ComponentSkeleton } from './ComponentSkeleton';

const LoadingSkeleton = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 py-7 my-14 sm:px-20 md:px-32 lg:px-36 xl:px-48">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 xl:col-span-3 rounded-2xl">
          <SidebarSkeleton />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 rounded-2xl xl:col-span-9">
          <NavbarSkeleton />
          <ComponentSkeleton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoadingSkeleton;
