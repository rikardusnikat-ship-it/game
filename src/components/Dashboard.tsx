import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { topics, Topic } from '../data/questions';
import TopicCard from './TopicCard';
import QuizGame, { ScaffoldData } from './QuizGame';
import ResultScreen from './ResultScreen';
import ProfilePage from './ProfilePage';
import Leaderboard from './Leaderboard';
import ParticleBackground from './ParticleBackground';

type PageState = 'dashboard' | 'playing' | 'result' | 'profile' | 'leaderboard';

interface GameResult {
  topicName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  scaffoldData?: ScaffoldData;
}

export default function Dashboard() {
  const { user, logout, updateTopicProgress } = useAuth();
  const [pageState, setPageState] = useState<PageState>('dashboard');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  if (!user) return null;

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setPageState('playing');
  };

  const handleGameComplete = (correct: number, total: number, scaffoldData?: ScaffoldData) => {
    if (!selectedTopic) return;

    const result: GameResult = {
      topicName: selectedTopic.name,
      score: correct * 100,
      totalQuestions: total,
      correctAnswers: correct,
      scaffoldData,
    };
    setGameResult(result);
    
    // Update progress
    updateTopicProgress(selectedTopic.id, selectedTopic.name, correct, total);
    
    setPageState('result');
  };

  const handleBackToDashboard = () => {
    setPageState('dashboard');
    setSelectedTopic(null);
    setGameResult(null);
  };

  const handlePlayAgain = () => {
    setPageState('playing');
    setGameResult(null);
  };

  const accuracy = user.totalQuestions > 0 
    ? Math.round((user.correctAnswers / user.totalQuestions) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
      <div className="fixed inset-0 bg-mesh opacity-60"></div>
      <ParticleBackground />

      {/* Header */}
      <header className="relative z-10 glass-card border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="text-4xl animate-float">{user.avatar}</div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Physics<span className="text-gradient-ocean">Quest</span>
              </h1>
              <p className="text-xs text-gray-400">
                Halo, <span className="text-purple-300 font-bold">{user.displayName}</span>! 👋
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {user.streak > 0 && (
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/40 rounded-full px-3 py-1.5 animate-glow">
                <span className="text-lg animate-wiggle">🔥</span>
                <span className="text-orange-200 text-sm font-bold">{user.streak}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/40 rounded-full px-3 py-1.5">
              <span className="text-lg">⭐</span>
              <span className="text-yellow-200 text-sm font-bold">{user.totalScore}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 glass-card border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
              { id: 'leaderboard', icon: '🏆', label: 'Leaderboard' },
              { id: 'profile', icon: '👤', label: 'Profil' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setPageState(item.id as PageState)}
                className={`flex items-center gap-2 px-4 py-3 font-bold text-sm whitespace-nowrap transition-all border-b-2 ${
                  pageState === item.id
                    ? 'text-purple-300 border-purple-400'
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={logout}
              className="ml-auto flex items-center gap-2 px-4 py-3 font-bold text-sm text-red-400 hover:text-red-300 transition-all"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              <span>🚪</span>
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {pageState === 'dashboard' && (
          <div className="animate-fadeIn">
            {/* Welcome Banner */}
            <div className="glass-card-strong rounded-3xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="text-5xl animate-float">{user.avatar}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    Selamat Datang, {user.displayName}! 🎉
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {user.school} • {user.grade}
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    {user.gamesPlayed === 0 
                      ? 'Mulai petualangan fisika kamu sekarang! 🚀'
                      : `Kamu sudah memainkan ${user.gamesPlayed} game. Terus belajar! 💪`
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="glass-card rounded-2xl p-4 text-center card-hover">
                <div className="text-3xl font-bold text-gradient-ocean" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {user.totalScore}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">⭐ Total Skor</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center card-hover">
                <div className="text-3xl font-bold text-green-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {user.gamesPlayed}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">🎮 Game Dimainkan</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center card-hover">
                <div className="text-3xl font-bold text-purple-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {accuracy}%
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">🎯 Akurasi</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center card-hover">
                <div className="text-3xl font-bold text-orange-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {user.bestStreak}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">🔥 Best Streak</div>
              </div>
            </div>

            {/* Topic Progress */}
            {Object.keys(user.topicProgress).length > 0 && (
              <div className="glass-card rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <span>📊</span> Progress Belajar
                </h3>
                <div className="space-y-3">
                  {Object.values(user.topicProgress).map((progress) => (
                    <div key={progress.topicId} className="flex items-center gap-3">
                      <span className="text-2xl">
                        {topics.find(t => t.id === progress.topicId)?.icon || '📚'}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-white font-medium">{progress.topicName}</span>
                          <span className="text-xs text-gray-400">
                            Best: {progress.bestScore} pts • {progress.attempts}x main
                          </span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                            style={{ width: `${(progress.totalCorrect / progress.totalQuestions) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Topics Grid */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                <span>🎮</span> Pilih Topik untuk Dimainkan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onSelect={handleSelectTopic}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Achievements */}
            {user.achievements.length > 0 && (
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <span>🏆</span> Pencapaian Kamu
                </h3>
                <div className="flex flex-wrap gap-3">
                  {user.achievements.map((achievement) => {
                    const badges: Record<string, { icon: string; label: string; color: string }> = {
                      welcome: { icon: '👋', label: 'Selamat Datang', color: 'from-blue-500/20 to-blue-600/20 border-blue-400/30' },
                      first_game: { icon: '🎮', label: 'Game Pertama', color: 'from-green-500/20 to-green-600/20 border-green-400/30' },
                      perfect_score: { icon: '💯', label: 'Skor Sempurna', color: 'from-yellow-500/20 to-amber-500/20 border-yellow-400/30' },
                      streak_5: { icon: '🔥', label: '5x Streak', color: 'from-orange-500/20 to-red-500/20 border-orange-400/30' },
                      streak_10: { icon: '⚡', label: '10x Streak', color: 'from-purple-500/20 to-pink-500/20 border-purple-400/30' },
                      all_topics: { icon: '🌟', label: 'Semua Topik', color: 'from-pink-500/20 to-rose-500/20 border-pink-400/30' },
                    };
                    const badge = badges[achievement] || { icon: '🏅', label: achievement, color: 'from-gray-500/20 to-gray-600/20 border-gray-400/30' };
                    
                    return (
                      <div
                        key={achievement}
                        className={`bg-gradient-to-br ${badge.color} border rounded-xl px-4 py-3 flex items-center gap-2 card-hover`}
                      >
                        <span className="text-2xl">{badge.icon}</span>
                        <span className="text-sm text-white font-medium">{badge.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {pageState === 'playing' && selectedTopic && (
          <QuizGame
            topic={selectedTopic}
            onComplete={handleGameComplete}
            onBack={handleBackToDashboard}
          />
        )}

        {pageState === 'result' && gameResult && (
          <ResultScreen
            result={gameResult}
            onPlayAgain={handlePlayAgain}
            onBackToHome={handleBackToDashboard}
          />
        )}

        {pageState === 'profile' && (
          <ProfilePage />
        )}

        {pageState === 'leaderboard' && (
          <Leaderboard />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-12 border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-sm">
            ⚛️ <span className="font-bold text-white">PhysicsQuest</span> — Platform Belajar Fisika Online
          </p>
          <p className="text-gray-500 text-xs mt-1">
            🎓 Dimainkan oleh siswa dari seluruh Indonesia
          </p>
        </div>
      </footer>
    </div>
  );
}
