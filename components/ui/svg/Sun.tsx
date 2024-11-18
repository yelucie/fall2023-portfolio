import React from 'react';

const Sun = () => {
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
        <linearGradient id="gradDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(159,88,255)" />
          <stop offset="100%" stopColor="rgb(45,212,191)" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="5" stroke="url(#gradDark)" />
      <line x1="12" y1="1" x2="12.01" y2="3" stroke="url(#gradDark)" />
      <line x1="12" y1="21" x2="12.01" y2="23" stroke="url(#gradDark)" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="url(#gradDark)" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="url(#gradDark)" />
      <line x1="1" y1="12" x2="3" y2="12.01" stroke="url(#gradDark)" />
      <line x1="21" y1="12" x2="23" y2="12.01" stroke="url(#gradDark)" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="url(#gradDark)" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="url(#gradDark)" />
    </svg>
  );
};

export default Sun;
