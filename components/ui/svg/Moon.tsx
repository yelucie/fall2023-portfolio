import React from 'react';

const Moon = () => {
  return (
    <svg
      className="w-6 fill-none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(159,88,255)" />
          <stop offset="100%" stopColor="rgb(45,212,191)" />
        </linearGradient>
      </defs>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="url(#gradLight)"
      />
    </svg>
  );
};

export default Moon;
