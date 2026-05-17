import { motion } from 'motion/react';
import { Play, Globe, Landmark, Sparkles } from 'lucide-react';

export default function Culture() {
  // Converting drive view link to preview link for embedding
  const videoId = '1N7IfBYB43IvJMmfF21sS_0gn5M1W0cmw';
  const embedLink = `https://drive.google.com/file/d/${videoId}/preview`;

  const highlights = [
    { icon: <Landmark size={20} />, title: "French Landmarks", text: "Master key monuments like Tour Eiffel, Louvre, and Sacré-Cœur." },
    { icon: <Globe size={20} />, title: "Geography", text: "Understand the Hexagon shape and France's neighbors." },
    { icon: <Sparkles size={20} />, title: "National Symbols", text: "Marianne, the Rooster, and the significance of the Tricolore." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-32"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-secondary font-bold text-xs uppercase tracking-widest">
          <Play size={14} />
          Teacher's Session
        </div>
        <h1 className="text-5xl font-display font-extrabold tracking-tight">Culture <span className="france-gradient">& Expressions</span></h1>
        <p className="text-white/40 text-lg max-w-2xl">
          Visual learning session covering essential French cultural facts and expressions for the board exams.
        </p>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video w-full glass rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
        <iframe
          src={embedLink}
          className="w-full h-full"
          allow="autoplay"
          title="French Culture Video"
        />
      </div>

      {/* Key Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + (idx * 0.1) }}
            className="p-8 bg-card-dark border border-border-dark rounded-3xl hover:border-secondary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed font-medium">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="p-8 bg-white/5 rounded-[2rem] border border-dashed border-white/10 text-center">
        <p className="text-white/30 text-sm font-mono italic">
          Tip: Watch the full video to catch the subtle daily-life expressions that frequently appear in Section A.
        </p>
      </div>
    </motion.div>
  );
}
