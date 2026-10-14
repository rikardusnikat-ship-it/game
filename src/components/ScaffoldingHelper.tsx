import { useState } from 'react';
import { ScaffoldingLevel, ProblemSolvingStep } from '../data/questions';

interface ScaffoldingHelperProps {
  scaffolding: ScaffoldingLevel[];
  problemSolving?: ProblemSolvingStep[];
  questionType: 'concept' | 'calculation' | 'application';
  topicId?: string;
}

const scaffoldColors = [
  { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-400/40', text: 'text-blue-300', badge: 'bg-blue-500/30' },
  { bg: 'from-indigo-500/20 to-indigo-600/20', border: 'border-indigo-400/40', text: 'text-indigo-300', badge: 'bg-indigo-500/30' },
  { bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-400/40', text: 'text-purple-300', badge: 'bg-purple-500/30' },
  { bg: 'from-pink-500/20 to-pink-600/20', border: 'border-pink-400/40', text: 'text-pink-300', badge: 'bg-pink-500/30' },
];

export default function ScaffoldingHelper({ scaffolding, problemSolving, questionType, topicId }: ScaffoldingHelperProps) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showProblemSolving, setShowProblemSolving] = useState(false);
  const [currentPSStep, setCurrentPSStep] = useState(0);

  const handleOpenScaffold = () => {
    setIsOpen(true);
    if (currentLevel === 0) {
      setCurrentLevel(1);
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < scaffolding.length) {
      setCurrentLevel(prev => prev + 1);
    }
  };

  const handlePrevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(prev => prev - 1);
    }
  };

  const handleNextPSStep = () => {
    if (problemSolving && currentPSStep < problemSolving.length - 1) {
      setCurrentPSStep(prev => prev + 1);
    }
  };

  const handlePrevPSStep = () => {
    if (currentPSStep > 0) {
      setCurrentPSStep(prev => prev - 1);
    }
  };

  const currentScaffold = scaffolding.find(s => s.level === currentLevel);
  const currentStep = problemSolving?.find(ps => ps.step === currentPSStep + 1);
  const colorScheme = scaffoldColors[(currentLevel - 1)] || scaffoldColors[0];

  const getTypeLabel = () => {
    switch (questionType) {
      case 'calculation': return 'Soal Hitungan';
      case 'application': return 'Soal Penerapan';
      case 'concept': return 'Soal Konsep';
      default: return '';
    }
  };

  const getTypeIcon = () => {
    switch (questionType) {
      case 'calculation': return '🧮';
      case 'application': return '🔧';
      case 'concept': return '📚';
      default: return '📝';
    }
  };

  return (
    <div className="mt-4">
      {/* Scaffolding Trigger Button */}
      {!isOpen && (
        <button
          onClick={handleOpenScaffold}
          className="w-full py-4 px-5 rounded-2xl glass-card border border-amber-400/30 text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/50 transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-[1.01]"
        >
          <span className="text-2xl group-hover:animate-wiggle">🆘</span>
          <div className="text-left">
            <span className="font-bold text-sm block">Butuh Bantuan?</span>
            <span className="text-xs text-amber-300/60">Klik untuk scaffolding berjenjang</span>
          </div>
          <svg className="w-5 h-5 text-amber-400 ml-auto transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Scaffolding Panel */}
      {isOpen && (
        <div className="animate-slideUp space-y-4">
          {/* Header */}
          <div className="glass-card-strong rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-amber-500/30">
                🏗️
              </div>
              <div>
                <span className="text-white font-bold text-sm block" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Scaffolding Berjenjang
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  {getTypeIcon()} {getTypeLabel()}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scaffolding Progress */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Level Bantuan</span>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${colorScheme.badge} ${colorScheme.text}`}>
                {currentLevel} / {scaffolding.length}
              </span>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-2 mb-5">
              {scaffolding.map((s, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-full h-3 rounded-full transition-all duration-500 relative overflow-hidden ${
                      index < currentLevel
                        ? `bg-gradient-to-r ${scaffoldColors[index].bg} border ${scaffoldColors[index].border}`
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    {index < currentLevel && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">{s.icon}</span>
                    <span className={`text-[9px] font-bold ${
                      index < currentLevel ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      L{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Scaffold Content */}
            {currentScaffold && (
              <div className={`rounded-2xl p-5 bg-gradient-to-br ${colorScheme.bg} border ${colorScheme.border} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{currentScaffold.icon}</span>
                    <span className={`font-bold text-sm ${colorScheme.text}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {currentScaffold.label}
                    </span>
                    <span className={`ml-auto text-[10px] font-bold px-2 py-1 rounded-full ${colorScheme.badge} ${colorScheme.text}`}>
                      Level {currentScaffold.level}
                    </span>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                    {currentScaffold.content}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-4 gap-3">
              <button
                onClick={handlePrevLevel}
                disabled={currentLevel <= 1}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                  currentLevel <= 1
                    ? 'text-gray-600 cursor-not-allowed bg-white/3'
                    : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                ← Sebelumnya
              </button>
              <button
                onClick={handleNextLevel}
                disabled={currentLevel >= scaffolding.length}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                  currentLevel >= scaffolding.length
                    ? 'text-gray-600 cursor-not-allowed bg-white/3'
                    : `${colorScheme.text} bg-gradient-to-r ${colorScheme.bg} border ${colorScheme.border} hover:scale-[1.02]`
                }`}
              >
                Bantuan Berikutnya →
              </button>
            </div>
          </div>

          {/* Problem Solving Steps */}
          {problemSolving && problemSolving.length > 0 && (
            <div className="glass-card rounded-2xl p-5">
              <button
                onClick={() => setShowProblemSolving(!showProblemSolving)}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
                    🧩
                  </div>
                  <div className="text-left">
                    <span className="text-white font-bold text-sm block" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      Strategi Problem Solving
                    </span>
                    <span className="text-gray-400 text-xs">4 langkah menyelesaikan soal</span>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showProblemSolving ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showProblemSolving && (
                <div className="mt-5 animate-slideUp space-y-4">
                  {/* PS Steps Navigation */}
                  <div className="grid grid-cols-4 gap-2">
                    {problemSolving.map((ps, index) => {
                      const stepColors = [
                        'from-blue-500/20 to-blue-600/20 border-blue-400/40 text-blue-300',
                        'from-green-500/20 to-green-600/20 border-green-400/40 text-green-300',
                        'from-purple-500/20 to-purple-600/20 border-purple-400/40 text-purple-300',
                        'from-orange-500/20 to-orange-600/20 border-orange-400/40 text-orange-300',
                      ];
                      return (
                        <button
                          key={index}
                          onClick={() => setCurrentPSStep(index)}
                          className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-300 ${
                            index === currentPSStep
                              ? `bg-gradient-to-br ${stepColors[index]} scale-105 shadow-lg`
                              : index < currentPSStep
                              ? 'bg-green-500/10 border-green-400/20'
                              : 'bg-white/5 border-white/10 hover:bg-white/10'
                          }`}
                        >
                          <span className="text-xl mb-1">{ps.icon}</span>
                          <span className={`text-[9px] font-bold ${
                            index === currentPSStep ? stepColors[index].split(' ').pop() : 'text-gray-500'
                          }`}>
                            {ps.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Current Step Content */}
                  {currentStep && (
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-xl">
                          {currentStep.icon}
                        </div>
                        <div>
                          <span className="text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                            Langkah {currentStep.step}
                          </span>
                          <span className="text-white font-bold text-sm block" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                            {currentStep.title}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {currentStep.content}
                      </p>
                    </div>
                  )}

                  {/* PS Navigation */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrevPSStep}
                      disabled={currentPSStep === 0}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                        currentPSStep === 0
                          ? 'text-gray-600 cursor-not-allowed bg-white/3'
                          : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      ← Sebelumnya
                    </button>
                    <button
                      onClick={handleNextPSStep}
                      disabled={currentPSStep >= (problemSolving?.length || 0) - 1}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                        currentPSStep >= (problemSolving?.length || 0) - 1
                          ? 'text-gray-600 cursor-not-allowed bg-white/3'
                          : 'text-blue-300 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 hover:scale-[1.02]'
                      }`}
                    >
                      Selanjutnya →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Info */}
          <div className="glass-card rounded-xl p-3 text-center">
            <p className="text-xs text-gray-400">
              💡 <span className="text-gray-300">Tips:</span> Naik level scaffolding hanya jika kamu masih bingung. Berusaha mandiri dulu ya! 🌟
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
