
import React, { useState } from 'react';
import { Converter } from './types';
import { CONVERTERS } from './constants';
import Header from './components/Header';
import ConverterGrid from './components/ConverterGrid';
import ConverterView from './components/ConverterView';
import SeoContent from './components/SeoContent';

const App: React.FC = () => {
  const [selectedConverter, setSelectedConverter] = useState<Converter | null>(null);

  const handleSelectConverter = (converter: Converter) => {
    setSelectedConverter(converter);
  };

  const handleGoBack = () => {
    setSelectedConverter(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Header onTitleClick={handleGoBack} />

        {selectedConverter ? (
          <ConverterView converter={selectedConverter} onBack={handleGoBack} />
        ) : (
          <>
            <ConverterGrid converters={CONVERTERS} onSelect={handleSelectConverter} />
            <SeoContent />
          </>
        )}
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AI File Converter Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
