import React from 'react';

export function SidebarSkeleton() {
  return (
    <div>
      {/* Basics */}
      <div className="mx-auto rounded-full ring-2 p-1 my-4 h-32 w-32 ring-transparent bg-gray-300 dark:bg-dark-400 animate-pulse"/>
      <div className='flex gap-2 mt-6 mb-4 justify-center'>
        <div className="rounded-xl h-7 w-20 bg-gray-200 dark:bg-dark-400 animate-pulse"/>
        <div className="rounded-xl h-7 w-12 bg-gray-200 dark:bg-dark-400 animate-pulse"/>
      </div>
      <div className="rounded-full my-3 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
      <div className="rounded-full my-3 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/>

      {/* Socials */}
      <div className="flex w-9/12 mx-auto my-5 text-purple-500 justify-evenly md:w-full">
        <div className="rounded-full w-8 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
        <div className="rounded-full w-8 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
        <div className="rounded-full w-8 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
        <div className="rounded-full w-8 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
      </div>
        
      {/* Contacts */}
      <div className="flex flex-col gap-3 flex-nowrap items-center py-3 my-5 bg-gray-100 dark:bg-dark-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="rounded-xl h-6 w-6/12 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
        <div className="rounded-xl h-6 w-7/12 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
        <div className="rounded-xl h-6 w-5/12 bg-gray-300 dark:bg-dark-400 animate-pulse"/>
      </div>

      {/* Resume */}
      <div className="rounded-full mx-auto w-10/12 my-4 h-10 bg-gray-300 dark:bg-dark-400 animate-pulse"/>

      {/* Email */}
      <div className="rounded-full mx-auto w-10/12 my-4 h-10 bg-gray-300 dark:bg-dark-400 animate-pulse"/>

      {/* Website Settings */}
      <div className="flex mx-auto md:mb-4 mt-14 w-9/10 justify-center relative bottom-4">
        <div className="w-10 h-10 mr-3 rounded-xl flex items-center justify-center bg-gray-300 dark:bg-dark-400 animate-pulse"/>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-300 dark:bg-dark-400 animate-pulse"/>
      </div>
    </div>
  );
}