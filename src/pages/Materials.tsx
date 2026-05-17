import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, FileText, ChevronRight, ChevronDown, ListCheck, ExternalLink, Info, Sparkles } from 'lucide-react';
import { TOPICS, Material } from '../data/topics';
import { useState } from 'react';

interface MaterialCardProps {
  material: Material & { topicName: string };
  idx: number;
  [key: string]: any; // Allow extra props like 'key'
}

function MaterialCard({ material, idx }: MaterialCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.05 }}
      className={`bg-card-dark border ${isOpen ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border-dark'} p-6 rounded-3xl group hover:border-primary/30 transition-all flex flex-col`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-2xl ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} flex items-center justify-center transition-all`}>
          <FileText size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold truncate" title={material.title}>{material.title}</h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 truncate">{material.topicName}</p>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 space-y-6 border-t border-white/5 mt-2">
              {/* PDF Embed if available */}
              {material.driveLink && (
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/5 mb-6">
                   <iframe
                      src={material.driveLink.replace('/view?usp=drive_link', '/preview').replace('/view?usp=sharing', '/preview')}
                      className="w-full h-full"
                      allow="autoplay"
                    />
                </div>
              )}

              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Digital Highlights</span>
              </div>

              {material.slides.map((slide, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-secondary rounded-full" />
                    <h5 className="text-sm font-bold text-white/90">{slide.header}</h5>
                  </div>
                  <div className="pl-4 space-y-2">
                    {slide.content.map((point, pIdx) => (
                      <div key={pIdx} className="flex gap-3 text-xs text-white/50 leading-relaxed">
                        <ListCheck size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <div className="flex flex-col gap-4 pt-4 border-t border-white/5 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">
              {material.slides.length} Digital Slides
            </span>
            <button 
              onClick={() => setIsOpen(true)}
              className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
            >
              View Handout
            </button>
          </div>

          {material.driveLink ? (
             <a 
              href={material.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border border-white/5"
            >
                <ExternalLink size={14} className="text-primary" />
                View original on Google Drive
            </a>
          ) : (
             <div className="py-3 px-4 bg-white/5 rounded-xl text-[9px] text-white/30 italic flex items-center gap-2">
                <Info size={12} />
                Add Drive link in topics.ts to view PDF
             </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Materials() {
  const allMaterials = TOPICS.flatMap(topic => 
    (topic.materials || []).map(m => ({ ...m, topicName: topic.name }))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-32"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-display font-extrabold">Study <span className="france-gradient">Materials</span></h1>
          <p className="text-white/40 text-lg max-w-xl">
            Access all curated handouts and cheat-sheets. Interactive digital versions of your curriculum slides.
          </p>
        </div>
        <a 
          href="https://drive.google.com/drive/folders/1heSE07f2DBSlwKDy9X8CCYs5aJSlGf2D?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all shrink-0"
        >
          <BookOpen size={18} />
          All Materials Folder
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allMaterials.map((material, idx) => (
          <MaterialCard key={idx} material={material} idx={idx} />
        ))}
      </div>

      {allMaterials.length === 0 && (
         <div className="p-20 text-center glass rounded-3xl border border-dashed border-white/10">
            <h3 className="text-white/20 font-display text-xl">No materials uploaded yet.</h3>
         </div>
      )}
    </motion.div>
  );
}
