import { Topic } from '../data/questions';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topic: Topic) => void;
  index: number;
}

const topicGradients: Record<string, string> = {
  gaya: 'from-violet-500 via-purple-500 to-indigo-600',
  energi: 'from-amber-400 via-orange-500 to-red-500',
  cahaya: 'from-fuchsia-500 via-pink-500 to-rose-500',
  suhu: 'from-red-500 via-rose-500 to-orange-500',
  getaran: 'from-emerald-400 via-teal-500 to-cyan-500',
};

const topicEmojis: Record<string, string[]> = {
  gaya: ['🚀', '💫', '⚡'],
  energi: ['⚡', '🔋', '💡'],
  cahaya: ['🔦', '🌈', '✨'],
  suhu: ['🌡️', '🔥', '❄️'],
  getaran: ['🌊', '🎵', '📡'],
};

export default function TopicCard({ topic, onSelect, index }: TopicCardProps) {
  const gradient = topicGradients[topic.id] || 'from-purple-500 to-pink-500';
  const emojis = topicEmojis[topic.id] || ['📚', '🔬', '✨'];

  return (
    <button
      onClick={() => onSelect(topic)}
      className="group relative overflow-hidden rounded-3xl card-hover text-left"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}></div>
      
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>
      
      {/* Floating Emojis */}
      <div className="absolute top-4 right-4 flex gap-1">
        {emojis.map((emoji, i) => (
          <span
            key={i}
            className="text-2xl animate-float opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>

      {/* Content */}
      <div className="relative z-10 p-6 pt-8 pb-6">
        <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          {topic.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          {topic.name}
        </h3>
        <p className="text-white/80 text-sm mb-5 leading-relaxed">
          {topic.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white font-semibold flex items-center gap-1.5">
              <span>📝</span> {topic.questions.length} Soal
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 group-hover:bg-white/30 transition-all">
            <span className="text-sm font-bold text-white">Mainkan</span>
            <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </button>
  );
}
