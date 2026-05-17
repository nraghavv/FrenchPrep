import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, FileText, ExternalLink } from 'lucide-react';
import { TOPICS } from '../data/topics';
import ExampleCard from '../components/ExampleCard';
import RevealCard from '../components/RevealCard';
import TipsBox from '../components/TipsBox';
import { useState } from 'react';

export default function TopicPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const activeTopic = TOPICS.find(t => t.id === id);

  if (!activeTopic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold">Topic not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-primary hover:underline"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-12 pb-32"
    >
      {/* Header Detail */}
      <div className="space-y-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Dashboard</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20">
                Weightage: {activeTopic.weightage}
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full border border-secondary/20">
                Difficulty: {activeTopic.difficulty}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold">{activeTopic.name}</h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">{activeTopic.description}</p>
          </div>

          <button 
            onClick={() => setIsCompleted(!isCompleted)}
            className={`px-8 py-4 rounded-2xl font-bold transition-all shadow-xl ${
              isCompleted 
                ? 'bg-green-500 text-white shadow-green-500/20' 
                : 'bg-white text-bg-dark hover:bg-white/90 shadow-white/10'
            }`}
          >
            {isCompleted ? 'Lesson Completed' : 'Mark as Complete'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          {/* PDF Handout Embed */}
          {activeTopic.materials?.find(m => m.driveLink) && (
            <section className="space-y-6">
              <h2 className="text-2xl font-display font-bold flex items-center gap-3">
                <div className="w-2 h-8 bg-red-500 rounded-full" />
                Handout Viewer
              </h2>
              <div className="aspect-[4/5] md:aspect-video w-full rounded-[2rem] overflow-hidden border border-white/10 glass shadow-2xl">
                <iframe
                  src={activeTopic.materials.find(m => m.driveLink)?.driveLink?.replace('/view?usp=drive_link', '/preview').replace('/view?usp=sharing', '/preview')}
                  className="w-full h-full"
                  allow="autoplay"
                />
              </div>
            </section>
          )}

          {/* Concept */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-primary rounded-full" />
              Concept Breakdown
            </h2>
            <div className="bg-card-dark border border-border-dark rounded-3xl p-8 markdown-body text-white/70">
              <ul className="space-y-4">
                {activeTopic.explanation.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-primary font-black mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Examples */}
          <section>
             <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-secondary rounded-full" />
              Transformation Examples
            </h2>
            <div>
              {activeTopic.examples.map((ex, i) => (
                <ExampleCard key={i} example={ex} />
              ))}
            </div>
          </section>

          {/* PYQs */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-yellow-500 rounded-full" />
              Practice Question Bank
            </h2>
            <div className="space-y-4">
              {activeTopic.pyqs.map((q) => (
                <RevealCard key={q.id} question={q} />
              ))}
              {!activeTopic.pyqs.length && (
                 <div className="p-8 text-center bg-white/5 rounded-3xl border border-dashed border-white/10 text-white/20">
                    Complete question set coming soon for this topic.
                 </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="sticky top-12 space-y-8">
            <TipsBox tips={activeTopic.tips || []} />
            
            {/* Materials PDF Links */}
            {activeTopic.materials && activeTopic.materials.length > 0 && (
              <div className="bg-card-dark border border-border-dark rounded-3xl p-6">
                <h3 className="font-display font-bold mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" />
                  Handouts & Documents
                </h3>
                <div className="space-y-3">
                  {activeTopic.materials.map((material, idx) => (
                    material.driveLink && (
                      <a 
                        key={idx}
                        href={material.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group/link"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <FileText size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white/80 group-hover/link:text-white truncate max-w-[150px]">
                              {material.title}
                            </p>
                            <p className="text-[10px] text-white/30 uppercase font-bold tracking-tighter">View PDF</p>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-white/20 group-hover/link:text-primary transition-colors" />
                      </a>
                    )
                  ))}
                </div>
              </div>
            )}

            <div className="bg-card-dark border border-border-dark rounded-3xl p-6">
              <h3 className="font-display font-bold mb-4">Topic Checklist</h3>
              <div className="space-y-3">
                {['Read concept', 'Check examples', 'Review Questions'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                    <div className="w-5 h-5 rounded border border-border-dark flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-sm opacity-20" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
