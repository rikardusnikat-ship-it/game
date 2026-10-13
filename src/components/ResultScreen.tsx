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

  if (percentage === 100) {
    grade = 'SEMPURNA!';
    gradeColor = 'from-yellow-400 to-amber-500';
    message = 'Luar biasa! Kamu menguasai materi ini dengan sangat baik!';
    emoji = '🏆';
  } else if (percentage >= 80) {
    grade = 'HEBAT!';
    gradeColor = 'from-green-400 to-emerald-500';
    message = 'Pemahaman kamu sangat bagus! Terus pertahankan!';
    emoji = '🌟';
  } else if (percentage >= 60) {
    grade = 'BAGUS!';
    gradeColor = 'from-blue-400 to-cyan-500';
    message = 'Kamu sudah cukup memahami materi ini. Coba ulangi untuk hasil lebih baik!';
    emoji = '👍';
  } else if (percentage >= 40) {
    grade = 'LUMAYAN';
    gradeColor = 'from-orange-400 to-amber-500';
    message = 'Terus belajar ya! Baca kembali penjelasan di setiap soal.';
    emoji = '📚';
  } else {
    grade = 'SEMANGAT!';
    gradeColor = 'from-pink-400 to-rose-500';
    message = 'Jangan menyerah! Pelajari kembali materinya dan coba lagi.';
    emoji = '💪';
  }

  return (
    <div className="max-w-lg mx-auto text-center animate-fadeIn">
      {/* Result Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
        {/* Emoji */}
        <div className="text-6xl mb-4 animate-bounce">{emoji}</div>
        
        {/* Grade */}
        <h2 className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradeColor} mb-2`}>
          {grade}
        </h2>
        
        {/* Message */}
        <p className="text-gray-300 mb-8">{message}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{result.correctAnswers}</div>
            <div className="text-xs text-gray-400 mt-1">Benar</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{result.totalQuestions}</div>
            <div className="text-xs text-gray-400 mt-1">Total Soal</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{percentage}%</div>
            <div className="text-xs text-gray-400 mt-1">Skor</div>
          </div>
        </div>

        {/* Score Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
          <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${gradeColor} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Topic Info */}
        <div className="bg-white/5 rounded-xl p-4 mb-8">
          <p className="text-sm text-gray-400">Topik:</p>
          <p className="text-white font-semibold">{result.topicName}</p>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`text-2xl transition-all duration-300 ${
                star <= Math.ceil(percentage / 20)
                  ? 'text-yellow-400 scale-110'
                  : 'text-gray-600'
              }`}
              style={{ animationDelay: `${star * 200}ms` }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onPlayAgain}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
          >
            🔄 Main Lagi
          </button>
          <button
            onClick={onBackToHome}
            className="w-full py-3 rounded-xl font-semibold text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
          >
            🏠 Pilih Topik Lain
          </button>
        </div>
      </div>

      {/* Encouragement */}
      <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
        <p className="text-gray-400 text-sm">
          💡 <span className="text-gray-300">Tips:</span> Baca penjelasan pada setiap soal untuk memperkuat pemahaman konsep fisika.
        </p>
      </div>
    </div>
  );
}
