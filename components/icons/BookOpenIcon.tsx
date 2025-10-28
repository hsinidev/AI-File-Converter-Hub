
import React from 'react';

const BookOpenIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-6.75-11.494v11.494m-1.5-11.494v11.494M12 3.75l-7.5 1.5v13.5l7.5-1.5 7.5 1.5v-13.5l-7.5-1.5z" />
  </svg>
);

export default BookOpenIcon;
