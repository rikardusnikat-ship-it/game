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
              <p className="text-xs text-purple-300">Game Fisika SMP Interaktif</p>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Jelajahi Dunia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Fisika</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Pilih topik fisika yang ingin kamu pelajari. Jawab pertanyaan dan dapatkan feedback langsung untuk meningkatkan pemahamanmu!
              </p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>5 Topik</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>30 Soal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Feedback Langsung</span>
                </div>
              </div>
            </div>

            {/* Topic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  onSelect={handleSelectTopic}
                />
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                💡 Tips Belajar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📖</span>
                  <div>
                    <p className="text-white font-medium text-sm">Baca Penjelasan</p>
                    <p className="text-gray-400 text-xs">Setiap jawaban memiliki penjelasan yang membantu pemahaman</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <p className="text-white font-medium text-sm">Ulangi Soal</p>
                    <p className="text-gray-400 text-xs">Mainkan berulang untuk mengingat konsep dengan baik</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-white font-medium text-sm">Raih Sempurna</p>
                    <p className="text-gray-400 text-xs">Usahakan menjawab semua soal dengan benar</p>
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
            ⚛️ PhysicsQuest - Game Pembelajaran Fisika SMP berbasis Feedback
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Dirancang untuk membantu siswa memahami konsep fisika dengan cara yang menyenangkan
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
