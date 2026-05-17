import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, Tag, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Question } from '../data/topics';

interface RevealCardProps {
  question: Question;
  key?: string;
}

export default function RevealCard({ question }: RevealCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card-dark border border-border-dark rounded-2xl overflow-hidden mb-4"
    >
      <div 
        className="p-5 flex justify-between items-start cursor-pointer hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {question.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/20 flex items-center gap-1">
                <Tag size={10} />
                {tag}
              </span>
            ))}
            {question.year && (
              <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider rounded-full border border-secondary/20 flex items-center gap-1">
                <Calendar size={10} />
                Last Asked: {question.year}
              </span>
            )}
          </div>
          <h4 className="text-lg font-medium leading-relaxed"><b>{question.question}</b></h4>
        </div>
        <div className="ml-4 pt-1">
          {isOpen ? <ChevronUp className="text-white/40" /> : <ChevronDown className="text-white/40" />}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 border-t border-border-dark bg-primary/5">
          <div className="mt-4 p-4 bg-bg-dark rounded-xl border border-primary/20">
            <span className="text-xs font-bold uppercase text-primary mb-1 block">Answer:</span>
            <p className="text-xl font-display font-semibold">{question.answer}</p>
          </div>
          {question.explanation && (
            <div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">Quick Explanation:</span>
              <p className="text-sm text-white/70 leading-relaxed italic">{question.explanation}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
