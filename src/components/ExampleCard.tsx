import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Example } from '../data/topics';

interface ExampleCardProps {
  example: Example;
  key?: string | number;
}

export default function ExampleCard({ example }: ExampleCardProps) {
  return (
    <div className="bg-bg-dark/50 border border-border-dark rounded-2xl p-6 mb-4 hover:border-primary/30 transition-all group">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2 block">Standard</span>
          <p className="text-lg opacity-70 italic">"{example.input}"</p>
        </div>
        
        <div className="flex justify-center md:block">
          <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="flex-1">
          <span className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-2 block">Transformation</span>
          <p className="text-xl font-medium font-display leading-tight" dangerouslySetInnerHTML={{ __html: example.output }} />
        </div>
      </div>
      {example.explanation && (
        <div className="mt-4 pt-4 border-t border-border-dark text-sm text-white/50">
          <span className="font-bold text-primary mr-2">Note:</span>
          {example.explanation}
        </div>
      )}
    </div>
  );
}
