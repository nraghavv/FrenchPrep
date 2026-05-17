import { motion } from 'motion/react';
import { Topic } from '../data/topics';
import { ArrowUpRight, Clock, AlertTriangle } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  onClick: (topicId: string) => void;
  key?: string;
}

export default function TopicCard({ topic, onClick }: TopicCardProps) {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-white/40 bg-white/5';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(topic.id)}
      className="bg-card-dark border border-border-dark rounded-3xl p-6 cursor-pointer group hover:border-primary/50 transition-all relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="text-primary" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {topic.isRepeated && (
          <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-tighter rounded-md border border-secondary/20 flex items-center gap-1">
            <AlertTriangle size={10} />
            High Frequency
          </span>
        )}
        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-md border flex items-center gap-1 ${getDifficultyColor(topic.difficulty)}`}>
          {topic.difficulty}
        </span>
      </div>

      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{topic.name}</h3>
      <p className="text-white/60 text-sm line-clamp-2 leading-relaxed mb-6">{topic.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-widest uppercase">
          <Clock size={12} />
          Weightage: {topic.weightage}
        </div>
        <div className="w-8 h-8 rounded-full border border-border-dark flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary transition-all">
          <ArrowUpRight size={14} className="text-white/40 group-hover:text-primary" />
        </div>
      </div>
    </motion.div>
  );
}
