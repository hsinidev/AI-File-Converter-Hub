
import React from 'react';
import { CubeTransparentIcon } from './icons';

interface HeaderProps {
  onTitleClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTitleClick }) => {
  return (
    <header className="text-center mb-10 md:mb-16">
      <div 
        className="inline-flex items-center gap-4 mb-4 cursor-pointer group"
        onClick={onTitleClick}
      >
        <CubeTransparentIcon className="h-12 w-12 text-blue-600 group-hover:animate-spin" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors">
          AI File Converter Hub
        </h1>
      </div>
      <p className="max-w-3xl mx-auto text-lg text-gray-600">
        Leverage the power of AI to transform your files. Extract text from images, summarize documents, generate structured data, and much more.
      </p>
    </header>
  );
};

export default Header;
