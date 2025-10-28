
import React, { useState, useCallback, useRef } from 'react';
import { Converter } from '../types';
import { performConversion } from '../services/geminiService';
import Loader from './Loader';
import ResultDisplay from './ResultDisplay';
import { ArrowLeftIcon, UploadIcon, DocumentTextIcon } from './icons';

interface ConverterViewProps {
  converter: Converter;
  onBack: () => void;
}

const ConverterView: React.FC<ConverterViewProps> = ({ converter, onBack }) => {
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setOutput('');
      setError('');
    }
  };

  const handleConvert = useCallback(async () => {
    if (!file) {
      setError('Please select a file first.');
      return;
    }
    if (converter.requiresPrompt && !prompt.trim()) {
      setError('This converter requires a prompt.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    setOutput('');

    const result = await performConversion(converter, file, prompt);
    
    if (result.startsWith('An error occurred:')) {
        setError(result);
    } else {
        setOutput(result);
    }
    
    setIsLoading(false);
  }, [file, prompt, converter]);

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-6">
        <ArrowLeftIcon className="h-5 w-5" />
        Back to All Converters
      </button>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 p-3 rounded-lg">
            <converter.Icon className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{converter.name}</h2>
            <p className="text-gray-600">{converter.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="font-semibold text-gray-700">1. Upload File</label>
              <div 
                className="mt-2 flex justify-center items-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                onClick={triggerFileSelect}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept={converter.acceptedFileTypes}
                  className="hidden"
                />
                {!file ? (
                  <div className="text-center text-gray-500">
                    <UploadIcon className="mx-auto h-12 w-12" />
                    <p>Click to upload or drag & drop</p>
                    <p className="text-xs">{converter.acceptedFileTypes}</p>
                  </div>
                ) : (
                  <div className="text-center text-green-600 font-medium">
                    <DocumentTextIcon className="mx-auto h-12 w-12" />
                    <p>{file.name}</p>
                    <p className="text-xs">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                )}
              </div>
            </div>
            
            {converter.requiresPrompt ? (
              <div>
                <label htmlFor="prompt" className="font-semibold text-gray-700">2. Your Instruction *</label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={converter.promptLabel}
                  rows={3}
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>
            ) : (
                 <div>
                    <label htmlFor="prompt" className="font-semibold text-gray-700">2. Add Instructions (Optional)</label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={converter.promptLabel}
                        rows={3}
                        className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                </div>
            )}


            <button
              onClick={handleConvert}
              disabled={isLoading || !file}
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center"
            >
              {isLoading && <Loader />}
              {!isLoading && 'Convert File'}
            </button>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Result</h3>
            <div className="w-full h-full min-h-[20rem] bg-gray-100 border border-gray-200 rounded-lg p-4">
              {isLoading && <div className="flex justify-center items-center h-full text-gray-500">Processing...</div>}
              {error && <div className="text-red-600 bg-red-100 p-3 rounded-md">{error}</div>}
              {output && <ResultDisplay content={output} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterView;
