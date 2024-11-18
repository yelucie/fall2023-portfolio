import React from 'react';

export function ComponentSkeleton() {
  return (
    <div className="px-5 py-3 my-4">
      {/* Sample introduction */}
      <div className="rounded-xl h-8 w-5/12 mb-8 bg-gray-300 dark:bg-dark-400 animate-pulse" />
      <div className="rounded-xl h-8 w-auto mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
      <div className="rounded-xl h-8 w-auto mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
      <div className="rounded-xl h-8 w-auto mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
      <div className="rounded-xl h-8 w-7/12 mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />

      <div className="mt-6 grid grid-cols-2 gap-5">
        {/* Sample picture */}
        <div className="rounded-xl h-64 w-full bg-gray-300 dark:bg-dark-400 animate-pulse" />
        {/* Sample list */}
        <div>
          <div className="rounded-xl h-8 w-5/12 mb-8 bg-gray-300 dark:bg-dark-400 animate-pulse" />
          <div className="rounded-xl h-8 w-2/5 mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
          <div className="rounded-xl h-8 w-4/5 mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
          <div className="rounded-xl h-8 w-3/5 mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
          <div className="rounded-xl h-8 w-4/5 mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
          <div className="rounded-xl h-8 w-2/5 mb-2 bg-gray-300 dark:bg-dark-400 animate-pulse" />
        </div>
      </div>

      <div className='mt-6 flex justify-between gap-3'>
        {/* Sample boxes */}
        <div className="rounded-xl h-24 w-full bg-gray-300 dark:bg-dark-400 animate-pulse" />
        <div className="rounded-xl h-24 w-full bg-gray-300 dark:bg-dark-400 animate-pulse" />
        <div className="rounded-xl h-24 w-full bg-gray-300 dark:bg-dark-400 animate-pulse" />
        <div className="rounded-xl h-24 w-full bg-gray-300 dark:bg-dark-400 animate-pulse" />
        <div className="rounded-xl h-24 w-full bg-gray-300 dark:bg-dark-400 animate-pulse" />
      </div>
    </div>
  );
}
