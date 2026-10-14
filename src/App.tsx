import { useState } from 'react';
import { topics, Topic } from './data/questions';
import TopicCard from './components/TopicCard';
import QuizGame from './components/QuizGame';
import ResultScreen from './components/ResultScreen';
import ParticleBackground from './components/ParticleBackground';

type GameState = 'home' | 'playing' | 'result';

interface GameResult {
  topicName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
}

function App() {
  const [gameState, setGameState] = useState<GameState>('home');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setGameState('playing');
  };

  const handleGameComplete = (correct: number, total: number) => {
    const result: GameResult = {
      topicName: selectedTopic?.name || '',
      score: correct * 100,
      totalQuestions: total,
      correctAnswers: correct,
    };
    setGameResult(result);
    setTotalScore(prev => prev + result.score);
    if (correct === total) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
    setGameState('result');
  };

  const handleBackToHome = () => {
    setGameState('home');
    setSelectedTopic(null);
    setGameResult(null);
  };

  const handlePlayAgain = () => {
    setGameState('playing');
    setGameResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
      {/* Background Mesh */}
      <div className="fixed inset-0 bg-mesh opacity-60"></div>
      
      {/* Particles */}
      <ParticleBackground />

      {/* Header */}
      <header className="relative z-10 glass-card border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="text-4xl animate-float">⚛️</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Physics<span className="text-gradient-ocean">Quest</span>
              </h1>
              <p className="text-[10px] text-purple-300 font-medium tracking-wider uppercase">
                🎮 Game Fisika SMP Interaktif
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {streak > 0 && (
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/40 rounded-full px-3 py-1.5 animate-glow">
                <span className="text-lg animate-wiggle">🔥</span>
                <span className="text-orange-200 text-sm font-bold">{streak}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/40 rounded-full px-3 py-1.5">
              <span className="text-lg">⭐</span>
              <span className="text-yellow-200 text-sm font-bold">{totalScore}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {gameState === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <div className="text-center mb-12 relative">
              {/* Floating decorations */}
              <div className="absolute -top-4 left-1/4 text-4xl animate-float opacity-50" style={{ animationDelay: '0s' }}>🚀</div>
              <div className="absolute -top-2 right-1/4 text-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}>⚡</div>
              <div className="absolute top-8 left-10 text-2xl animate-float opacity-40" style={{ animationDelay: '2s' }}>🔬</div>
              <div className="absolute top-8 right-10 text-2xl animate-float opacity-40" style={{ animationDelay: '1.5s' }}>🌟</div>

              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold px-4 py-2 rounded-full">
                  ✨ Belajar Fisika Jadi Seru! ✨
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Jelajahi Dunia
                <br />
                <span className="text-gradient-primary">Fisika</span>{' '}
                <span className="text-gradient-sunset">SMP</span>
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Game pembelajaran dengan <span className="text-amber-300 font-bold">scaffolding berjenjang</span> dan{' '}
                <span className="text-cyan-300 font-bold">strategi problem solving</span>. 
                Dapatkan bantuan bertahap sesuai kebutuhanmu! 🎯
              </p>

              {/* Stats badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-200 font-medium">5 Topik</span>
                </div>
                <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-200 font-medium">30 Soal</span>
                </div>
                <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-200 font-medium">Scaffolding 4 Level</span>
                </div>
                <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-200 font-medium">Problem Solving</span>
                </div>
              </div>
            </div>

            {/* Topic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {topics.map((topic, index) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onSelect={handleSelectTopic}
                  index={index}
                />
              ))}
            </div>

            {/* Scaffolding Explanation */}
            <div className="glass-card-strong rounded-3xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-amber-500/30">
                    🏗️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      Scaffolding Berjenjang
                    </h3>
                    <p className="text-amber-300/80 text-sm">Bantuan bertahap sesuai kebutuhanmu</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Sistem scaffolding memberikan bantuan secara bertahap dari yang paling ringan hingga penjelasan lengkap. 
                  Gunakan sesuai kebutuhan untuk membangun pemahaman secara mandiri! 🧠
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { level: 1, icon: '💡', label: 'Petunjuk Ringan', desc: 'Arahkan pemikiran', color: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-400/30' },
                    { level: 2, icon: '🤔', label: 'Pertanyaan Penuntun', desc: 'Identifikasi konsep', color: 'from-indigo-500/20 to-indigo-600/20', border: 'border-indigo-400/30' },
                    { level: 3, icon: '🔑', label: 'Konsep/Rumus Kunci', desc: 'Langkah penyelesaian', color: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-400/30' },
                    { level: 4, icon: '📖', label: 'Penjelasan Lengkap', desc: 'Pemahaman penuh', color: 'from-pink-500/20 to-pink-600/20', border: 'border-pink-400/30' },
                  ].map((item) => (
                    <div key={item.level} className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-4 card-hover`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-xs font-bold text-white/80 bg-white/10 px-2 py-0.5 rounded-full">
                          L{item.level}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.label}</h4>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem Solving Strategy */}
            <div className="glass-card-strong rounded-3xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/30">
                    🧩
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      Problem Solving Strategy
                    </h3>
                    <p className="text-cyan-300/80 text-sm">4 Langkah menyelesaikan soal</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { step: 1, icon: '🔍', title: 'Identifikasi', desc: 'Apa yang diketahui & ditanya?', color: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-400/30' },
                    { step: 2, icon: '📐', title: 'Rencanakan', desc: 'Rumus/konsep yang dipakai', color: 'from-green-500/20 to-green-600/20', border: 'border-green-400/30' },
                    { step: 3, icon: '✏️', title: 'Laksanakan', desc: 'Hitung langkah demi langkah', color: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-400/30' },
                    { step: 4, icon: '✅', title: 'Evaluasi', desc: 'Cek jawaban & verifikasi', color: 'from-orange-500/20 to-orange-600/20', border: 'border-orange-400/30' },
                  ].map((item) => (
                    <div key={item.step} className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-4 card-hover text-center`}>
                      <div className="w-14 h-14 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-3">
                        {item.icon}
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-xs font-bold text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
                          Step {item.step}
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-sm">{item.title}</h4>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="glass-card rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-green-500/30">
                  💡
                </div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Tips Belajar Efektif
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: '🏗️', title: 'Gunakan Scaffolding Bertahap', desc: 'Mulai dari Level 1, naik bertahap hanya jika diperlukan' },
                  { icon: '🧩', title: 'Terapkan Problem Solving', desc: 'Ikuti 4 langkah: Identifikasi → Rencanakan → Laksanakan → Evaluasi' },
                  { icon: '🔄', title: 'Ulangi Secara Berkala', desc: 'Soal diacak setiap bermain untuk melatih ingatan' },
                  { icon: '📖', title: 'Baca Penjelasan', desc: 'Pahami konsep di balik setiap jawaban' },
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 glass-card rounded-xl p-3">
                    <span className="text-2xl flex-shrink-0">{tip.icon}</span>
                    <div>
                      <p className="text-white font-bold text-sm">{tip.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {gameState === 'playing' && selectedTopic && (
          <QuizGame
            topic={selectedTopic}
            onComplete={handleGameComplete}
            onBack={handleBackToHome}
          />
        )}

        {gameState === 'result' && gameResult && (
          <ResultScreen
            result={gameResult}
            onPlayAgain={handlePlayAgain}
            onBackToHome={handleBackToHome}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-12 border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-sm">
            ⚛️ <span className="font-bold text-white">PhysicsQuest</span> — Game Fisika SMP dengan Scaffolding Berjenjang
          </p>
          <p className="text-gray-500 text-xs mt-1">
            🎓 Dirancang untuk membantu siswa memahami fisika secara mandiri dan menyenangkan
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
