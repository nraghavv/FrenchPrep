import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { LayoutDashboard, Trophy, FileText, Globe, ShieldCheck, History } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import TopicPage from './pages/TopicPage';
import Materials from './pages/Materials';
import Culture from './pages/Culture';
import ExamPattern from './pages/ExamPattern';
import PYQs from './pages/PYQs';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Sidebar / Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex items-center gap-6 md:gap-8 shadow-2xl overflow-x-auto max-w-[95vw]">
        <button 
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 transition-colors shrink-0 ${location.pathname === '/' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
        >
          <LayoutDashboard size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Dash</span>
        </button>
        <div className="h-4 w-px bg-white/10 shrink-0" />
        <button 
          onClick={() => navigate('/materials')}
          className={`flex flex-col items-center gap-1 transition-colors shrink-0 ${location.pathname === '/materials' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
        >
          <FileText size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Materials</span>
        </button>
        <div className="h-4 w-px bg-white/10 shrink-0" />
        <button 
          onClick={() => navigate('/pyqs')}
          className={`flex flex-col items-center gap-1 transition-colors shrink-0 ${location.pathname === '/pyqs' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
        >
          <History size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">PYQs</span>
        </button>
        <div className="h-4 w-px bg-white/10 shrink-0" />
        <button 
          onClick={() => navigate('/culture')}
          className={`flex flex-col items-center gap-1 transition-colors shrink-0 ${location.pathname === '/culture' ? 'text-secondary' : 'text-white/40 hover:text-white'}`}
        >
          <Globe size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Culture</span>
        </button>
        <div className="h-4 w-px bg-white/10 shrink-0" />
        <button 
          onClick={() => navigate('/pattern')}
          className={`flex flex-col items-center gap-1 transition-colors shrink-0 ${location.pathname === '/pattern' ? 'text-primary' : 'text-white/40 hover:text-white'}`}
        >
          <ShieldCheck size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Pattern</span>
        </button>
        <div className="h-4 w-px bg-white/10 shrink-0" />
        <button 
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white transition-colors shrink-0"
        >
          <Trophy size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Stats</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-32">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/pyqs" element={<PYQs />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/pattern" element={<ExamPattern />} />
        </Routes>
      </main>
      <Analytics />
    </div>
  );
}
