
import React from 'react';

const SparklesIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L13 12l-1.293-1.293a1 1 0 010-1.414L14 7m5 5l-2.293-2.293a1 1 0 00-1.414 0L13 12l1.293 1.293a1 1 0 001.414 0L18 11m-1 9l-2.293-2.293a1 1 0 010-1.414L17 12l1.293 1.293a1 1 0 010 1.414L16 17z" />
  </svg>
);

export default SparklesIcon;
