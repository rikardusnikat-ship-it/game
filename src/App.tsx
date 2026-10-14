import { useState } from 'react';
import { topics, Topic } from './data/questions';
import TopicCard from './components/TopicCard';
import QuizGame from './components/QuizGame';
import ResultScreen from './components/ResultScreen';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⚛️</div>
            <div>
              <h1 className="text-xl font-bold text-white">PhysicsQuest</h1>
              <p className="text-xs text-purple-300">Game Fisika SMP • Scaffolding Berjenjang</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {streak > 0 && (
              <div className="flex items-center gap-1 bg-orange-500/20 border border-orange-500/50 rounded-full px-3 py-1">
                <span className="text-orange-400 text-sm">🔥</span>
                <span className="text-orange-300 text-sm font-bold">{streak}</span>
              </div>
            )}
            <div className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-3 py-1">
              <span className="text-yellow-400 text-sm">⭐</span>
              <span className="text-yellow-300 text-sm font-bold">{totalScore}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {gameState === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Jelajahi Dunia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Fisika</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Game pembelajaran fisika dengan <span className="text-amber-300 font-semibold">scaffolding berjenjang</span> dan <span className="text-blue-300 font-semibold">strategi problem solving</span>. Dapatkan bantuan bertahap sesuai kebutuhanmu!
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>5 Topik</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>30 Soal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Scaffolding 4 Level</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>

            {/* Topic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onSelect={handleSelectTopic}
                />
              ))}
            </div>

            {/* Scaffolding Explanation */}
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                🏗️ Scaffolding Berjenjang - Bantuan Bertahap
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Sistem scaffolding memberikan bantuan secara bertahap dari yang paling ringan hingga penjelasan lengkap. 
                Gunakan sesuai kebutuhan untuk membangun pemahaman secara mandiri!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span>💡</span>
                    <span className="text-blue-300 text-xs font-bold">Level 1</span>
                  </div>
                  <p className="text-gray-300 text-xs">Petunjuk Ringan - Mengarahkan pemikiran tanpa memberi jawaban</p>
                </div>
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span>🤔</span>
                    <span className="text-indigo-300 text-xs font-bold">Level 2</span>
                  </div>
                  <p className="text-gray-300 text-xs">Pertanyaan Penuntun - Membantu identifikasi konsep & variabel</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span>🔑</span>
                    <span className="text-purple-300 text-xs font-bold">Level 3</span>
                  </div>
                  <p className="text-gray-300 text-xs">Konsep/Rumus Kunci - Memberikan langkah penyelesaian</p>
                </div>
                <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span>📖</span>
                    <span className="text-pink-300 text-xs font-bold">Level 4</span>
                  </div>
                  <p className="text-gray-300 text-xs">Penjelasan Lengkap - Jawaban detail dengan pemahaman penuh</p>
                </div>
              </div>
            </div>

            {/* Problem Solving Strategy */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                🧩 Problem Solving Strategy (4 Langkah)
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Untuk soal hitungan, gunakan strategi problem solving terstruktur ini. 
                Setiap langkah dirancang untuk membangun kemampuan berpikir sistematis!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center">
                  <span className="text-2xl">🔍</span>
                  <h4 className="text-blue-300 font-bold text-sm mt-2">1. Identifikasi</h4>
                  <p className="text-gray-400 text-xs mt-1">Apa yang diketahui? Apa yang ditanya?</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                  <span className="text-2xl">📐</span>
                  <h4 className="text-green-300 font-bold text-sm mt-2">2. Rencanakan</h4>
                  <p className="text-gray-400 text-xs mt-1">Rumus/konsep apa yang digunakan?</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center">
                  <span className="text-2xl">✏️</span>
                  <h4 className="text-purple-300 font-bold text-sm mt-2">3. Laksanakan</h4>
                  <p className="text-gray-400 text-xs mt-1">Hitung dan selesaikan langkah demi langkah</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-center">
                  <span className="text-2xl">✓</span>
                  <h4 className="text-orange-300 font-bold text-sm mt-2">4. Evaluasi</h4>
                  <p className="text-gray-400 text-xs mt-1">Cek jawaban, verifikasi satuan & hasil</p>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                💡 Tips Belajar Efektif
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏗️</span>
                  <div>
                    <p className="text-white font-medium text-sm">Gunakan Scaffolding Bertahap</p>
                    <p className="text-gray-400 text-xs">Mulai dari Level 1, naik bertahap hanya jika diperlukan. Jangan langsung lihat Level 4!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧩</span>
                  <div>
                    <p className="text-white font-medium text-sm">Terapkan Problem Solving</p>
                    <p className="text-gray-400 text-xs">Untuk soal hitungan, ikuti 4 langkah: Identifikasi → Rencanakan → Laksanakan → Evaluasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <p className="text-white font-medium text-sm">Ulangi Secara Berkala</p>
                    <p className="text-gray-400 text-xs">Mainkan berulang untuk mengingat konsep. Soal diacak setiap kali bermain!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📖</span>
                  <div>
                    <p className="text-white font-medium text-sm">Baca Penjelasan</p>
                    <p className="text-gray-400 text-xs">Setiap jawaban memiliki penjelasan mendalam yang membantu pemahaman konsep</p>
                  </div>
                </div>
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
      <footer className="mt-12 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-sm">
            ⚛️ PhysicsQuest - Game Fisika SMP dengan Scaffolding Berjenjang & Problem Solving Strategy
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Dirancang untuk membantu siswa memahami konsep fisika secara mandiri melalui bantuan bertahap
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
