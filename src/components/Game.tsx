import React, { useState } from 'react';
import { ArrowLeftRight, Brain, RotateCcw } from 'lucide-react';
import { GameState } from './types';
import { GuessInput } from './GuessInput';
import { GameOver } from './GameOver';

export function Game() {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(99);
  const [gameState, setGameState] = useState<GameState>('playing');
  
  const currentGuess = Math.floor((low + high) / 2);

  const handleResponse = (response: 'yes' | 'no' | 'equal') => {
    if (response === 'yes') {
      setLow(currentGuess + 1);
    } else if (response === 'no') {
      setHigh(currentGuess);
    } else {
      setGameState('won');
    }
  };

  const startNewGame = () => {
    setLow(1);
    setHigh(99);
    setGameState('playing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Number Guesser</h1>
        </div>

        {gameState === 'playing' ? (
          <>
            <p className="text-gray-600 mb-6">
              Think of a number between 1 and 99, and I'll try to guess it!
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-sm text-gray-500">Range:</div>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-gray-100 px-3 py-1 rounded">{low}</span>
                <ArrowLeftRight className="w-4 h-4 text-gray-400" />
                <span className="font-mono bg-gray-100 px-3 py-1 rounded">{high}</span>
              </div>
            </div>
            <GuessInput currentGuess={currentGuess} onResponse={handleResponse} />
          </>
        ) : (
          <GameOver onNewGame={startNewGame} guess={currentGuess} />
        )}

        <button
          onClick={startNewGame}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors w-full"
        >
          <RotateCcw className="w-4 h-4" />
          Start New Game
        </button>
      </div>
    </div>
  );
}