import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Trophy, Search, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOPICS } from '../data/topics';
import TopicCard from '../components/TopicCard';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Simple progress simulation (in a real app this would be in context or store)
  const progress = 15; 

  const filteredTopics = TOPICS.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-32"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <span className="text-secondary font-mono text-sm font-bold tracking-widest uppercase text-primary">French Prep</span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-none">
            French <span className="france-gradient">End-Sem</span> <br/> Mastery.
          </h1>
          <p className="text-white/40 text-lg max-w-xl">
            Interactive PYQ-driven preparation portal designed for high scores. 
            Master patterns, solve real questions, ace your exams.
          </p>
        </div>

        <div className="glass p-6 rounded-3xl min-w-[240px] relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <GraduationCap className="text-primary" size={20} />
            </div>
            <span className="text-3xl font-display font-black text-secondary">{progress}%</span>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Syllabus Progress</p>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Pattern Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Part A', desc: 'Culture & Civilation', marks: '20M', color: 'border-blue-500/20 bg-blue-500/5' },
          { title: 'Part B', desc: 'Grammar & Applied', marks: '40M', color: 'border-secondary/20 bg-secondary/5' },
          { title: 'Part C', desc: 'Reading & Writing', marks: '15M', color: 'border-green-500/20 bg-green-500/5' },
        ].map((item) => (
          <div key={item.title} className={`p-6 rounded-3xl border ${item.color}`}>
            <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-white/50 mb-4">{item.desc}</p>
            <span className="text-2xl font-black text-white/90">{item.marks}</span>
          </div>
        ))}
      </div>

      {/* Topics Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-3xl font-display font-bold flex items-center gap-3">
            <BookOpen className="text-primary" />
            High Weightage Topics
          </h2>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="text" 
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card-dark border border-border-dark rounded-full pl-12 pr-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm w-full md:w-64"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map(topic => (
            <TopicCard 
              key={topic.id} 
              topic={topic} 
              onClick={(id) => navigate(`/topic/${id}`)} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
