import React from 'react';
import { PartyPopper } from 'lucide-react';

interface GameOverProps {
  onNewGame: () => void;
  guess: number;
}

export function GameOver({ onNewGame, guess }: GameOverProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <PartyPopper className="w-12 h-12 text-yellow-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">I got it!</h2>
      <p className="text-gray-600 mb-6">
        Your number is <span className="font-semibold">{guess}</span>
      </p>
      <button
        onClick={onNewGame}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Play Again
      </button>
    </div>
  );
}