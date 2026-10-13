import { Topic } from '../data/questions';

interface TopicCardProps {
  topic: Topic;
  onSelect: (topic: Topic) => void;
}

export default function TopicCard({ topic, onSelect }: TopicCardProps) {
  return (
    <button
      onClick={() => onSelect(topic)}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl mb-4">{topic.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{topic.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{topic.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white/10 rounded-full px-3 py-1 text-xs text-gray-300">
              {topic.questions.length} Soal
            </span>
          </div>
          <div className="flex items-center gap-1 text-purple-400 group-hover:text-purple-300 transition-colors">
            <span className="text-sm font-medium">Mulai</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
    </button>
  );
}
