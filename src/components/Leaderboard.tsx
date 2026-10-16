import { useAuth } from '../contexts/AuthContext';

export default function Leaderboard() {
  const { users, user } = useAuth();

  // Sort users by total score
  const sortedUsers = [...users].sort((a, b) => b.totalScore - a.totalScore);

  // Get current user rank
  const currentUserRank = sortedUsers.findIndex(u => u.id === user?.id) + 1;

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="glass-card-strong rounded-3xl p-6 mb-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <div className="text-6xl mb-3 animate-bounce">🏆</div>
          <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Leaderboard
          </h2>
          <p className="text-gray-400 text-sm">
            Peringkat siswa berdasarkan total skor
          </p>
          
          {/* Current User Rank */}
          {user && (
            <div className="mt-4 inline-block">
              <div className="glass-card rounded-xl px-6 py-3 border border-purple-400/30">
                <p className="text-xs text-gray-400 mb-1">Peringkat Kamu</p>
                <p className="text-2xl font-bold text-gradient-primary" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  #{currentUserRank}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top 3 Podium */}
      {sortedUsers.length >= 3 && (
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* 2nd Place */}
          <div className="glass-card rounded-2xl p-4 text-center card-hover">
            <div className="text-4xl mb-2">🥈</div>
            <div className="text-3xl mb-2">{sortedUsers[1].avatar}</div>
            <p className="text-sm text-white font-bold truncate mb-1">{sortedUsers[1].displayName}</p>
            <p className="text-xs text-gray-400 mb-2">{sortedUsers[1].school}</p>
            <div className="text-lg font-bold text-gradient-ocean" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {sortedUsers[1].totalScore}
            </div>
            <p className="text-xs text-gray-400">poin</p>
          </div>

          {/* 1st Place */}
          <div className="glass-card-strong rounded-2xl p-4 text-center card-hover border border-yellow-400/30 relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              👑 JUARA 1
            </div>
            <div className="text-5xl mb-2 mt-2">🥇</div>
            <div className="text-4xl mb-2">{sortedUsers[0].avatar}</div>
            <p className="text-sm text-white font-bold truncate mb-1">{sortedUsers[0].displayName}</p>
            <p className="text-xs text-gray-400 mb-2">{sortedUsers[0].school}</p>
            <div className="text-xl font-bold text-gradient-fire" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {sortedUsers[0].totalScore}
            </div>
            <p className="text-xs text-gray-400">poin</p>
          </div>

          {/* 3rd Place */}
          <div className="glass-card rounded-2xl p-4 text-center card-hover">
            <div className="text-4xl mb-2">🥉</div>
            <div className="text-3xl mb-2">{sortedUsers[2].avatar}</div>
            <p className="text-sm text-white font-bold truncate mb-1">{sortedUsers[2].displayName}</p>
            <p className="text-xs text-gray-400 mb-2">{sortedUsers[2].school}</p>
            <div className="text-lg font-bold text-gradient-sunset" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {sortedUsers[2].totalScore}
            </div>
            <p className="text-xs text-gray-400">poin</p>
          </div>
        </div>
      )}

      {/* Full Leaderboard */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          <span>📋</span> Peringkat Lengkap
        </h3>
        <div className="space-y-2">
          {sortedUsers.map((u, index) => {
            const rank = index + 1;
            const isCurrentUser = u.id === user?.id;
            
            let rankIcon = '';
            let rankColor = 'text-gray-400';
            
            if (rank === 1) {
              rankIcon = '🥇';
              rankColor = 'text-yellow-400';
            } else if (rank === 2) {
              rankIcon = '🥈';
              rankColor = 'text-gray-300';
            } else if (rank === 3) {
              rankIcon = '🥉';
              rankColor = 'text-orange-400';
            }

            return (
              <div
                key={u.id}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  isCurrentUser
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30'
                    : 'bg-white/3 hover:bg-white/5 border border-transparent'
                }`}
              >
                {/* Rank */}
                <div className="w-12 text-center">
                  {rankIcon ? (
                    <span className="text-2xl">{rankIcon}</span>
                  ) : (
                    <span className={`text-lg font-bold ${rankColor}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      #{rank}
                    </span>
                  )}
                </div>

                {/* Avatar */}
                <div className="text-3xl">{u.avatar}</div>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-bold truncate">
                    {u.displayName}
                    {isCurrentUser && (
                      <span className="ml-2 text-xs text-purple-300">(Kamu)</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-400 truncate">@{u.username} • {u.school}</p>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className="text-lg font-bold text-gradient-ocean" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {u.totalScore}
                  </div>
                  <p className="text-xs text-gray-400">{u.gamesPlayed} game</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info */}
      <div className="glass-card rounded-xl p-4 mt-6 text-center">
        <p className="text-xs text-gray-400">
          💡 <span className="text-gray-300">Tips:</span> Mainkan semua topik dan raih skor sempurna untuk naik peringkat!
        </p>
      </div>
    </div>
  );
}
