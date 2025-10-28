
import React from 'react';

export interface Converter {
  id: string;
  name: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
  acceptedFileTypes: string;
  promptLabel: string;
  requiresPrompt: boolean;
  model: 'gemini-2.5-flash' | 'gemini-2.5-pro';
}
