import { Lightbulb } from 'lucide-react';

interface TipsBoxProps {
  tips: string[];
}

export default function TipsBox({ tips }: TipsBoxProps) {
  if (tips.length === 0) return null;

  return (
    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute -right-4 -top-4 opacity-10">
        <Lightbulb size={120} className="text-primary" />
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <Lightbulb size={20} />
        </div>
        <div>
          <h3 className="text-lg font-display font-bold">Exam Hacks</h3>
          <p className="text-xs text-primary/80 uppercase font-bold tracking-widest">Tips & Tricks for SRMIST Exams</p>
        </div>
      </div>

      <ul className="space-y-3 relative z-10">
        {tips.map((tip, i) => (
          <li key={i} className="flex gap-3 text-sm text-white/80 items-start">
            <span className="text-primary font-bold">#0{i + 1}</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
