
import React, { useState } from 'react';
import { ClipboardCopyIcon, CheckCircleIcon } from './icons';

interface ResultDisplayProps {
  content: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative h-full">
      <pre className="whitespace-pre-wrap break-words text-sm text-gray-800 font-sans h-full overflow-y-auto">
        {content}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <CheckCircleIcon className="h-5 w-5 text-green-600" />
        ) : (
          <ClipboardCopyIcon className="h-5 w-5 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default ResultDisplay;
