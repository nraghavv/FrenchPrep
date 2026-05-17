import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Send } from 'lucide-react';
import { Question } from '../data/topics';

interface PracticeBoxProps {
  question: Question;
  key?: string;
}

export default function PracticeBox({ question }: PracticeBoxProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const checkAnswer = () => {
    // Basic normalization for simple checks
    const normalize = (s: string) => s.toLowerCase().trim().replace(/[.,!?;]$/, '');
    if (normalize(userAnswer) === normalize(question.answer)) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <div className="bg-card-dark border border-border-dark rounded-2xl p-6 mb-6">
      <div className="mb-4">
        <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2 block">Practice Exercise</span>
        <h3 className="text-xl font-medium">{question.question}</h3>
      </div>

      <div className="relative group">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value);
            setStatus('idle');
          }}
          placeholder="Type your answer here..."
          className="w-full bg-bg-dark border border-border-dark rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg"
          onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
        />
        <button
          onClick={checkAnswer}
          className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary/90 text-white px-4 rounded-lg transition-colors flex items-center gap-2 font-medium"
        >
          <Send size={18} />
          <span className="hidden sm:inline">Check</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {status !== 'idle' && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 overflow-hidden"
          >
            {status === 'correct' ? (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl">
                <CheckCircle2 size={24} />
                <div>
                  <p className="font-bold">Excellent! Correct.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-secondary/10 border border-secondary/20 text-secondary rounded-xl">
                  <XCircle size={24} />
                  <div>
                    <p className="font-bold">Not quite. Try again!</p>
                  </div>
                </div>
                <div className="p-4 bg-bg-dark border border-border-dark rounded-xl">
                  <span className="text-xs text-white/40 block mb-1">Correct Answer:</span>
                  <p className="text-lg font-display text-primary">{question.answer}</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
