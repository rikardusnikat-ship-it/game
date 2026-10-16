import { SkenarioLevel, PerformanceMetrics } from '../utils/SkenarioEngine';

interface SkenarioIndicatorProps {
  currentSkenario: SkenarioLevel;
  metrics: PerformanceMetrics;
  isVisible: boolean;
}

export default function SkenarioIndicator({
  currentSkenario,
  metrics,
  isVisible,
}: SkenarioIndicatorProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-4 z-40 animate-slideIn">
      <div className={`glass-card-strong rounded-2xl p-4 max-w-xs border ${
        currentSkenario.id === 0 ? 'border-green-400/30' :
        currentSkenario.id === 1 ? 'border-blue-400/30' :
        currentSkenario.id === 2 ? 'border-indigo-400/30' :
        currentSkenario.id === 3 ? 'border-purple-400/30' :
        'border-pink-400/30'
      }`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="text-3xl">{currentSkenario.icon}</div>
          <div className="flex-1">
            <h3 className={`text-sm font-bold ${currentSkenario.color}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {currentSkenario.name}
            </h3>
            <p className="text-xs text-gray-400">{currentSkenario.description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="glass-card rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {metrics.totalQuestions}
            </div>
            <div className="text-[10px] text-gray-400">Soal</div>
          </div>
          <div className="glass-card rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-green-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {metrics.correctAnswers}
            </div>
            <div className="text-[10px] text-gray-400">Benar</div>
          </div>
          <div className="glass-card rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-red-300" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {metrics.wrongAnswers}
            </div>
            <div className="text-[10px] text-gray-400">Salah</div>
          </div>
        </div>

        {/* Error Percentage Bar */}
        <div className="mb-2">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Tingkat Kesalahan</span>
            <span className={`font-bold ${currentSkenario.color}`}>
              {metrics.errorPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentSkenario.gradient} transition-all duration-500`}
              style={{ width: `${metrics.errorPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Skenario Progress */}
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                level <= currentSkenario.id
                  ? `bg-gradient-to-r ${
                      level === 0 ? 'from-green-400 to-green-500' :
                      level === 1 ? 'from-blue-400 to-blue-500' :
                      level === 2 ? 'from-indigo-400 to-indigo-500' :
                      level === 3 ? 'from-purple-400 to-purple-500' :
                      'from-pink-400 to-pink-500'
                    }`
                  : 'bg-white/10'
              }`}
            ></div>
          ))}
        </div>

        {/* Interventions */}
        {currentSkenario.interventions.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-xs text-gray-400 mb-2">Intervensi Aktif:</p>
            <div className="space-y-1">
              {currentSkenario.interventions.map((intervention, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <span className="text-amber-400">
                    {intervention.type === 'hint' ? '💡' :
                     intervention.type === 'explanation' ? '📖' :
                     intervention.type === 'step-by-step' ? '📝' :
                     intervention.type === 'example' ? '📋' : '🎨'}
                  </span>
                  <span className="text-gray-300">{intervention.content}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
