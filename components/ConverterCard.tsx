
import React from 'react';
import { Converter } from '../types';

interface ConverterCardProps {
  converter: Converter;
  onSelect: () => void;
}

const ConverterCard: React.FC<ConverterCardProps> = ({ converter, onSelect }) => {
  const { name, description, Icon } = converter;
  return (
    <div
      onClick={onSelect}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-200 flex flex-col items-start"
    >
      <div className="bg-blue-100 p-3 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  );
};

export default ConverterCard;
