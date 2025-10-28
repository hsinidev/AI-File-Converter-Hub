
import React from 'react';

const CubeTransparentIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M12 21a9 9 0 110-18 9 9 0 010 18zm0 0a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

export default CubeTransparentIcon;
