
import React from 'react';
import { Converter } from '../types';
import ConverterCard from './ConverterCard';

interface ConverterGridProps {
  converters: Converter[];
  onSelect: (converter: Converter) => void;
}

const ConverterGrid: React.FC<ConverterGridProps> = ({ converters, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {converters.map((converter) => (
        <ConverterCard key={converter.id} converter={converter} onSelect={() => onSelect(converter)} />
      ))}
    </div>
  );
};

export default ConverterGrid;
