import React from 'react';
import { ThumbsDown, ThumbsUp, Check } from 'lucide-react';

interface GuessInputProps {
  currentGuess: number;
  onResponse: (response: 'yes' | 'no' | 'equal') => void;
}

export function GuessInput({ currentGuess, onResponse }: GuessInputProps) {
  return (
    <div className="space-y-4">
      <p className="text-xl font-semibold text-center mb-6">
        Is your number {currentGuess}?
      </p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => onResponse('no')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
        >
          <ThumbsDown className="w-4 h-4" />
          Lower
        </button>
        <button
          onClick={() => onResponse('equal')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
        >
          <Check className="w-4 h-4" />
          Correct!
        </button>
        <button
          onClick={() => onResponse('yes')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
        >
          <ThumbsUp className="w-4 h-4" />
          Higher
        </button>
      </div>
    </div>
  );
}