interface GameResult {
  topicName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
}

interface ResultScreenProps {
  result: GameResult;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

export default function ResultScreen({ result, onPlayAgain, onBackToHome }: ResultScreenProps) {
  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  
  let grade = '';
  let gradeColor = '';
  let message = '';
  let emoji = '';
  let learningTip = '';
  let bgGradient = '';

  if (percentage === 100) {
    grade = 'SEMPURNA!';
    gradeColor = 'from-yellow-300 via-amber-400 to-orange-500';
    message = 'Luar biasa! Kamu menguasai materi ini dengan sangat baik!';
    emoji = '🏆';
    learningTip = 'Pertahankan! Coba topik lain untuk memperluas pengetahuanmu.';
    bgGradient = 'from-yellow-500/10 via-amber-500/10 to-orange-500/10';
  } else if (percentage >= 80) {
    grade = 'HEBAT!';
    gradeColor = 'from-green-300 via-emerald-400 to-teal-500';
    message = 'Pemahaman kamu sangat bagus! Terus pertahankan!';
    emoji = '🌟';
    learningTip = 'Hampir sempurna! Review soal yang salah untuk penguasaan penuh.';
    bgGradient = 'from-green-500/10 via-emerald-500/10 to-teal-500/10';
  } else if (percentage >= 60) {
    grade = 'BAGUS!';
    gradeColor = 'from-blue-300 via-cyan-400 to-sky-500';
    message = 'Kamu sudah cukup memahami materi ini. Coba ulangi!';
    emoji = '👍';
    learningTip = 'Gunakan scaffolding Level 1-2 sebelum menjawab untuk memperkuat pemahaman.';
    bgGradient = 'from-blue-500/10 via-cyan-500/10 to-sky-500/10';
  } else if (percentage >= 40) {
    grade = 'LUMAYAN!';
    gradeColor = 'from-orange-300 via-amber-400 to-yellow-500';
    message = 'Terus belajar ya! Baca penjelasan di setiap soal.';
    emoji = '📚';
    learningTip = 'Coba gunakan Problem Solving Strategy: Identifikasi → Rencanakan → Laksanakan → Evaluasi.';
    bgGradient = 'from-orange-500/10 via-amber-500/10 to-yellow-500/10';
  } else {
    grade = 'SEMANGAT!';
    gradeColor = 'from-pink-300 via-rose-400 to-red-500';
    message = 'Jangan menyerah! Pelajari kembali dan coba lagi.';
    emoji = '💪';
    learningTip = 'Mulai dari scaffolding Level 1, naik bertahap. Gunakan Problem Solving steps!';
    bgGradient = 'from-pink-500/10 via-rose-500/10 to-red-500/10';
  }

  return (
    <div className="max-w-lg mx-auto text-center animate-fadeIn">
      {/* Result Card */}
      <div className={`glass-card-strong rounded-[2rem] p-8 md:p-10 relative overflow-hidden bg-gradient-to-br ${bgGradient}`}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10">
          {/* Emoji */}
          <div className="text-7xl mb-5 animate-bounce">{emoji}</div>
          
          {/* Grade */}
          <h2 className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradeColor} mb-3`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
            {grade}
          </h2>
          
          {/* Message */}
          <p className="text-gray-300 mb-8 text-lg">{message}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="glass-card rounded-2xl p-4">
              <div className="text-3xl font-bold text-green-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>{result.correctAnswers}</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">✓ Benar</div>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>{result.totalQuestions}</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">📝 Total</div>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradeColor}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>{percentage}%</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">📊 Skor</div>
            </div>
          </div>

          {/* Score Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span className="font-medium">Progress</span>
              <span className="font-bold text-white">{percentage}%</span>
            </div>
            <div className="w-full h-5 bg-white/5 rounded-full overflow-hidden glass-card">
              <div
                className={`h-full bg-gradient-to-r ${gradeColor} rounded-full transition-all duration-1000 ease-out relative`}
                style={{ width: `${percentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
              </div>
            </div>
          </div>

          {/* Topic Info */}
          <div className="glass-card rounded-2xl p-4 mb-6">
            <p className="text-xs text-gray-400 mb-1">Topik yang dimainkan:</p>
            <p className="text-white font-bold text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>{result.topicName}</p>
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-3xl transition-all duration-500 ${
                  star <= Math.ceil(percentage / 20)
                    ? 'text-yellow-400 scale-110 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                    : 'text-gray-700'
                }`}
                style={{ animationDelay: `${star * 200}ms` }}
              >
                ★
              </span>
            ))}
          </div>

          {/* Learning Strategy Tip */}
          <div className="glass-card rounded-2xl p-5 mb-5 text-left bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-400/20">
            <h4 className="text-indigo-300 font-bold text-sm mb-2 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              <span className="text-lg">🎓</span> Tips Strategi Belajar:
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">{learningTip}</p>
          </div>

          {/* Scaffolding Guide */}
          <div className="glass-card rounded-2xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              <span className="text-lg">📊</span> Panduan Scaffolding:
            </h4>
            <div className="space-y-2">
              {[
                { level: 1, icon: '💡', desc: 'Petunjuk Ringan → Arahkan pemikiran', color: 'text-blue-300 bg-blue-500/20' },
                { level: 2, icon: '🤔', desc: 'Pertanyaan Penuntun → Identifikasi variabel', color: 'text-indigo-300 bg-indigo-500/20' },
                { level: 3, icon: '🔑', desc: 'Konsep/Rumus Kunci → Langkah penyelesaian', color: 'text-purple-300 bg-purple-500/20' },
                { level: 4, icon: '📖', desc: 'Penjelasan Lengkap → Pemahaman penuh', color: 'text-pink-300 bg-pink-500/20' },
              ].map((item) => (
                <div key={item.level} className="flex items-center gap-3">
                  <span className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold ${item.color}`}>
                    {item.level}
                  </span>
                  <span className="text-gray-300 text-xs">{item.icon} {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Problem Solving Strategy */}
          <div className="glass-card rounded-2xl p-5 mb-6 text-left">
            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              <span className="text-lg">🧩</span> Problem Solving (4 Langkah):
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '🔍', title: 'Identifikasi', desc: 'Diketahui & ditanya', color: 'from-blue-500/20 to-blue-600/20 border-blue-400/30' },
                { icon: '📐', title: 'Rencanakan', desc: 'Rumus yang dipakai', color: 'from-green-500/20 to-green-600/20 border-green-400/30' },
                { icon: '✏️', title: 'Laksanakan', desc: 'Hitung & selesaikan', color: 'from-purple-500/20 to-purple-600/20 border-purple-400/30' },
                { icon: '✅', title: 'Evaluasi', desc: 'Cek & verifikasi', color: 'from-orange-500/20 to-orange-600/20 border-orange-400/30' },
              ].map((item) => (
                <div key={item.title} className={`bg-gradient-to-br ${item.color} border rounded-xl p-3 text-center`}>
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-white text-xs font-bold mt-1">{item.title}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={onPlayAgain}
              className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] text-lg"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              🔄 Main Lagi
            </button>
            <button
              onClick={onBackToHome}
              className="w-full py-4 rounded-2xl font-bold text-gray-300 glass-card hover:bg-white/10 transition-all duration-300 text-lg"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              🏠 Pilih Topik Lain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
