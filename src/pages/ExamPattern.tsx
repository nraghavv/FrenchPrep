import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  PenTool, 
  Zap, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Star,
  Brain
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TopicItemProps {
  name: string;
  id?: string;
  important?: boolean;
}

function TopicItem({ name, id, important }: TopicItemProps) {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => id && navigate(`/topic/${id}`)}
      className={`group flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all text-left w-full ${id ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-1.5 h-1.5 rounded-full ${important ? 'bg-[#FF006E]' : 'bg-[#3A86FF]'}`} />
        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{name}</span>
      </div>
      {id && <ArrowRight size={14} className="text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />}
    </button>
  );
}

export default function ExamPattern() {
  const navigate = useNavigate();
  const [grammarOpen, setGrammarOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-12 pb-32"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
        >
          <ShieldCheck size={14} />
          Official Exam Blueprint
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight">
          Exam <span className="text-white/20">Pattern</span>
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          A visual breakdown of the End Semester French curriculum. Master these sections to secure your grade.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Part A & C */}
        <div className="lg:col-span-4 space-y-8">
          {/* Part A Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-card-dark border border-border-dark rounded-[2rem] p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF006E]/10 blur-3xl -mr-16 -mt-16 group-hover:bg-[#FF006E]/20 transition-colors" />
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-[#FF006E]/10 text-[#FF006E] flex items-center justify-center shadow-[0_0_20px_rgba(255,0,110,0.2)]">
                  <Globe size={24} />
                </div>
                <span className="text-2xl font-display font-black text-white/10 uppercase tracking-tighter">PART A</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Culture</h2>
                <p className="text-[#FF006E] font-display font-bold text-xl">20 Marks</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle2 size={14} className="text-[#FF006E]" />
                  French Symbols & Monuments
                </li>
                <li className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle2 size={14} className="text-[#FF006E]" />
                  Basic Expressions
                </li>
                <li className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle2 size={14} className="text-[#FF006E]" />
                  Numbers & History
                </li>
              </ul>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FF006E]/10 border border-[#FF006E]/20 text-[#FF006E] text-[10px] font-bold uppercase tracking-widest">
                  <Zap size={12} fill="currentColor" />
                  High Scoring & Repeated
                </div>
              </div>
            </div>
          </motion.div>

          {/* Part C Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-card-dark border border-border-dark rounded-[2rem] p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -mr-16 -mt-16" />
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <BookOpen size={24} />
                </div>
                <span className="text-2xl font-display font-black text-white/10 uppercase tracking-tighter">PART C</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Reading</h2>
                <p className="text-emerald-500 font-display font-bold text-xl">15 Marks</p>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Analyze unseen passages and extract meaning. Test your vocabulary through comprehension.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={12} />
                Easy to score with practice
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Part B */}
        <div className="lg:col-span-8">
          <motion.div 
            className="bg-card-dark border border-border-dark rounded-[3rem] overflow-hidden"
          >
            {/* Part B Header */}
            <div className="p-10 border-b border-white/5 bg-gradient-to-br from-[#3A86FF]/5 to-transparent flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#3A86FF]/10 text-[#3A86FF] flex items-center justify-center shadow-[0_0_30px_rgba(58,134,255,0.2)]">
                  <PenTool size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3A86FF]">Core Curriculum</span>
                    <span className="text-2xl font-display font-black text-white/10 uppercase tracking-tighter">PART B</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold">Grammar Mastery</h2>
                  <p className="text-[#3A86FF] font-display font-bold text-2xl">40 Marks</p>
                </div>
              </div>
              <button 
                onClick={() => setGrammarOpen(!grammarOpen)}
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronDown className={`transition-transform duration-500 ${grammarOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <AnimatePresence>
              {grammarOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="p-8 md:p-12 space-y-12">
                    
                    {/* Section 1 & 2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Basic Grammar */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                          <Brain size={14} className="text-[#3A86FF]" />
                          01. Basic Grammar
                        </div>
                        <div className="grid gap-2">
                          <TopicItem name="Les salutations" id="culture-basics" />
                          <TopicItem name="Les articles définis" id="definite-articles" />
                          <TopicItem name="Prépositions & Orientations" />
                          <TopicItem name="Les adjectifs possessifs" id="possessive-adjectives" />
                        </div>
                      </div>

                      {/* Core Writing */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                          <Star size={14} className="text-[#3A86FF]" />
                          02. Core Writing Skills
                        </div>
                        <div className="grid gap-2">
                          <TopicItem name="Écrivez l’heure" id="time-numbers" />
                          <TopicItem name="Les mots interrogatifs" id="interrogatives-quantity" />
                        </div>
                        <div className="p-4 rounded-2xl bg-[#3A86FF]/5 border border-primary/10 mt-4">
                          <p className="text-[10px] leading-relaxed text-white/40 italic">
                             Practice Tip: Time format (12h/24h) is a high-frequency exam question.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Verbs Section */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                          <Zap size={14} className="text-[#FF006E]" />
                          03. Verbs (Power Conjugations)
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#FF006E]/10 border border-[#FF006E]/20 text-[#FF006E] text-[10px] font-bold uppercase tracking-widest">
                          🔥 Most Important
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {['Être', 'Avoir', 'Aller', 'Pouvoir', 'Devoir', 'Voulour', 'Faire', 'Prendre', 'Venir', 'Voir', 'Écrire', 'Sortir', 'Connaître'].map((verb) => (
                          <button 
                            key={verb}
                            onClick={() => navigate('/topic/verbs-auxiliary')}
                            className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-xs font-bold text-white/60 hover:text-white hover:bg-[#FF006E]/10 hover:border-[#FF006E]/30 transition-all text-center"
                          >
                            {verb}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Grammar */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-widest">
                        <Sparkles size={14} className="text-[#3A86FF]" />
                        04. Advanced Grammar
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                          <h4 className="text-sm font-bold">L'Adjectifs Démonstratifs</h4>
                          <p className="text-[10px] text-white/30 leading-relaxed font-medium">This/That agreements (Ce, Cette, Ces).</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-[#FF006E]/5 border border-[#FF006E]/20 space-y-4 relative overflow-hidden group">
                           <div className="absolute -top-1 -right-1">
                              <span className="px-2 py-1 bg-[#FF006E] text-white text-[8px] font-black rounded-bl-lg">REPEATED</span>
                           </div>
                           <h4 className="text-sm font-bold text-[#FF006E]">La Négation</h4>
                           <button onClick={() => navigate('/topic/negation-adverbs')} className="text-[10px] font-bold text-white/60 hover:text-white flex items-center gap-1">
                             Start Topic <ArrowRight size={10} />
                           </button>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                           <h4 className="text-sm font-bold">Adverbes de Quantité</h4>
                           <TopicItem name="Quantité" id="interrogatives-quantity" />
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-8">
                      <button 
                         onClick={() => navigate('/')}
                         className="w-full py-5 rounded-2xl bg-[#3A86FF] text-white font-bold tracking-widest shadow-[0_20px_40px_rgba(58,134,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase flex items-center justify-center gap-3"
                      >
                         <Zap size={18} fill="currentColor" />
                         Build Your Custom Practice Session
                      </button>
                    </div>
                    
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
