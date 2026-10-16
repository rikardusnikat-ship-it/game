import { useAuth } from '../contexts/AuthContext';
import { topics } from '../data/questions';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  const accuracy = user.totalQuestions > 0 
    ? Math.round((user.correctAnswers / user.totalQuestions) * 100) 
    : 0;

  const topicsCompleted = Object.values(user.topicProgress).filter(p => p.completed).length;
  const totalTopics = topics.length;

  const badges: Record<string, { icon: string; label: string; desc: string; color: string }> = {
    welcome: { icon: '👋', label: 'Selamat Datang', desc: 'Bergabung di PhysicsQuest', color: 'from-blue-500/20 to-blue-600/20 border-blue-400/30' },
    first_game: { icon: '🎮', label: 'Game Pertama', desc: 'Menyelesaikan game pertama', color: 'from-green-500/20 to-green-600/20 border-green-400/30' },
    perfect_score: { icon: '💯', label: 'Skor Sempurna', desc: 'Mendapat nilai 100%', color: 'from-yellow-500/20 to-amber-500/20 border-yellow-400/30' },
    streak_5: { icon: '🔥', label: '5x Streak', desc: '5 game sempurna berturut-turut', color: 'from-orange-500/20 to-red-500/20 border-orange-400/30' },
    streak_10: { icon: '⚡', label: '10x Streak', desc: '10 game sempurna berturut-turut', color: 'from-purple-500/20 to-pink-500/20 border-purple-400/30' },
    all_topics: { icon: '🌟', label: 'Semua Topik', desc: 'Menyelesaikan semua topik', color: 'from-pink-500/20 to-rose-500/20 border-pink-400/30' },
  };

  const allBadges = Object.keys(badges);

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      {/* Profile Card */}
      <div className="glass-card-strong rounded-3xl p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-7xl animate-float">{user.avatar}</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {user.displayName}
              </h2>
              <p className="text-gray-400 text-sm">@{user.username}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs bg-purple-500/20 border border-purple-400/30 text-purple-300 px-3 py-1 rounded-full font-medium">
                  🏫 {user.school}
                </span>
                <span className="text-xs bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full font-medium">
                  📚 {user.grade}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="glass-card rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-gradient-ocean" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {user.totalScore}
              </div>
              <div className="text-xs text-gray-400 mt-1">⭐ Total Skor</div>
            </div>
            <div className="glass-card rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-green-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {user.gamesPlayed}
              </div>
              <div className="text-xs text-gray-400 mt-1">🎮 Game</div>
            </div>
            <div className="glass-card rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-purple-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {accuracy}%
              </div>
              <div className="text-xs text-gray-400 mt-1">🎯 Akurasi</div>
            </div>
            <div className="glass-card rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-orange-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {user.bestStreak}
              </div>
              <div className="text-xs text-gray-400 mt-1">🔥 Best Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Topic Progress */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            <span>📊</span> Progress Topik
          </h3>
          <div className="space-y-3">
            {topics.map((topic) => {
              const progress = user.topicProgress[topic.id];
              const percentage = progress 
                ? Math.round((progress.totalCorrect / progress.totalQuestions) * 100)
                : 0;
              
              return (
                <div key={topic.id} className="flex items-center gap-3">
                  <span className="text-2xl">{topic.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-white font-medium">{topic.name}</span>
                      <span className="text-xs text-gray-400">
                        {progress ? `${percentage}%` : 'Belum dimainkan'}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${topic.color} rounded-full transition-all`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-sm text-gray-400 text-center">
              <span className="text-white font-bold">{topicsCompleted}</span> dari <span className="text-white font-bold">{totalTopics}</span> topik diselesaikan
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            <span>🏆</span> Pencapaian
          </h3>
          <div className="space-y-3">
            {allBadges.map((badgeId) => {
              const badge = badges[badgeId];
              const unlocked = user.achievements.includes(badgeId);
              
              return (
                <div
                  key={badgeId}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                    unlocked
                      ? `bg-gradient-to-r ${badge.color} border-opacity-50`
                      : 'bg-white/3 border-white/5 opacity-40'
                  }`}
                >
                  <span className="text-3xl">{badge.icon}</span>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${unlocked ? 'text-white' : 'text-gray-500'}`}>
                      {badge.label}
                    </p>
                    <p className={`text-xs ${unlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                      {badge.desc}
                    </p>
                  </div>
                  {unlocked && (
                    <span className="text-green-400 text-xl">✓</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          <span>ℹ️</span> Informasi Akun
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-sm text-gray-400">Email</span>
            <span className="text-sm text-white font-medium">{user.email}</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-sm text-gray-400">Bergabung Sejak</span>
            <span className="text-sm text-white font-medium">
              {new Date(user.joinDate).toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/5">
            <span className="text-sm text-gray-400">Total Soal Dijawab</span>
            <span className="text-sm text-white font-medium">{user.totalQuestions} soal</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-400">Jawaban Benar</span>
            <span className="text-sm text-green-300 font-medium">{user.correctAnswers} benar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
