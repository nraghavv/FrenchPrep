import { motion } from 'motion/react';
import { Download, FileText, ExternalLink, HelpCircle, History } from 'lucide-react';

export default function PYQs() {
  const pyqLink = "https://drive.google.com/drive/folders/1vS19YplakqsmOlK06ZIbLvgGD0O_IoZN?usp=sharing";

  const years = [
    { year: "2023", sessions: ["End Semester - Autumn", "End Semester - Spring"], color: "bg-blue-500" },
    { year: "2022", sessions: ["End Semester", "Internal Assessment"], color: "bg-purple-500" },
    { year: "2021", sessions: ["End Semester"], color: "bg-pink-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-12 pb-32"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
          <History size={12} />
          Previous Year Questions
        </div>
        <h1 className="text-5xl font-display font-extrabold tracking-tight">Question <span className="france-gradient">Archive</span></h1>
        <p className="text-white/40 text-lg max-w-2xl font-medium">
          The ultimate vault of previous year papers. Studying these patterns is the fastest way to master the French exam.
        </p>
      </div>

      {/* Main Drive Link Hero */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative glass p-10 rounded-[2.5rem] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/5">
              <Download size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">All Papers Repository</h3>
              <p className="text-white/40 text-sm font-medium">Access the organized Google Drive folder with all PDFs.</p>
            </div>
          </div>
          <a 
            href={pyqLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 bg-primary text-white rounded-2xl font-bold text-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center gap-3 whitespace-nowrap"
          >
            Open Drive Folder
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Grouped Mock View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {years.map((y, idx) => (
          <div key={idx} className="p-8 bg-card-dark border border-border-dark rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 ${y.color} text-white rounded-lg text-[10px] font-black`}>{y.year}</span>
              <FileText size={18} className="text-white/20" />
            </div>
            <div className="space-y-4">
              {y.sessions.map((session, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between p-4 bg-white/5 rounded-xl group/item cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="text-sm font-bold text-white/70 group-hover/item:text-white">{session}</span>
                  <ExternalLink size={14} className="text-white/20 group-hover/item:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="p-8 bg-primary/5 border border-dashed border-primary/20 rounded-3xl flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <HelpCircle size={24} />
          </div>
          <p className="text-xs text-white/40 font-medium">
            Missing a paper? Join the student community and help us expand the archive!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
