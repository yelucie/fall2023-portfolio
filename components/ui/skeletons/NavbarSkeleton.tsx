import React from 'react';

export function NavbarSkeleton() {
  return (
    <div className="flex justify-between px-5 py-3 my-4">
        <div className="rounded-2xl w-24 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/> 
        <div className="flex space-x-5">
            <div className="rounded-xl w-20 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/> 
            <div className="rounded-xl w-16 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/> 
            <div className="rounded-xl w-28 h-8 bg-gray-300 dark:bg-dark-400 animate-pulse"/> 
        </div>
    </div>
  );
}