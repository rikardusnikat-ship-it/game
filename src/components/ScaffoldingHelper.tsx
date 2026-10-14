import { useState } from 'react';
import { ScaffoldingLevel, ProblemSolvingStep } from '../data/questions';

interface ScaffoldingHelperProps {
  scaffolding: ScaffoldingLevel[];
  problemSolving?: ProblemSolvingStep[];
  questionType: 'concept' | 'calculation' | 'application';
}

export default function ScaffoldingHelper({ scaffolding, problemSolving, questionType }: ScaffoldingHelperProps) {
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
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span className="text-lg">🆘</span>
          <span className="font-medium">Butuh Bantuan? Klik di sini untuk scaffolding</span>
        </button>
      )}

      {/* Scaffolding Panel */}
      {isOpen && (
        <div className="animate-slideUp space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">{getTypeIcon()}</span>
              <span className="text-sm font-medium text-gray-300">{getTypeLabel()}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
            >
              <span>Tutup</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scaffolding Progress Bar */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-400 font-medium">Level Bantuan</span>
              <span className="text-xs text-gray-400">{currentLevel} / {scaffolding.length}</span>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center gap-1 mb-4">
              {scaffolding.map((_, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full h-2 rounded-full transition-all duration-300 ${
                      index < currentLevel
                        ? `bg-gradient-to-r ${scaffolding[index].color}`
                        : 'bg-white/10'
                    }`}
                  ></div>
                  <span className={`text-[10px] mt-1 ${
                    index < currentLevel ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    L{index + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Current Scaffold Content */}
            {currentScaffold && (
              <div className={`rounded-lg p-4 bg-gradient-to-br ${currentScaffold.color} bg-opacity-10 border border-white/10`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{currentScaffold.icon}</span>
                  <span className="font-bold text-white text-sm">{currentScaffold.label}</span>
                  <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full text-white">
                    Level {currentScaffold.level}
                  </span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                  {currentScaffold.content}
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={handlePrevLevel}
                disabled={currentLevel <= 1}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentLevel <= 1
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              >
                ← Sebelumnya
              </button>
              <button
                onClick={handleNextLevel}
                disabled={currentLevel >= scaffolding.length}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentLevel >= scaffolding.length
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-amber-300 hover:text-amber-200 bg-amber-500/20 hover:bg-amber-500/30'
                }`}
              >
                Bantuan Selanjutnya →
              </button>
            </div>
          </div>

          {/* Problem Solving Steps (for calculation questions) */}
          {problemSolving && problemSolving.length > 0 && (
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <button
                onClick={() => setShowProblemSolving(!showProblemSolving)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🧩</span>
                  <span className="font-medium text-white text-sm">Strategi Problem Solving</span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${showProblemSolving ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showProblemSolving && (
                <div className="mt-4 animate-slideUp">
                  {/* PS Progress */}
                  <div className="flex items-center gap-2 mb-4">
                    {problemSolving.map((ps, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPSStep(index)}
                        className={`flex-1 flex flex-col items-center p-2 rounded-lg transition-all ${
                          index === currentPSStep
                            ? 'bg-blue-500/20 border border-blue-500/50'
                            : index < currentPSStep
                            ? 'bg-green-500/10 border border-green-500/30'
                            : 'bg-white/5 border border-white/10'
                        }`}
                      >
                        <span className="text-lg">{ps.icon}</span>
                        <span className={`text-[10px] mt-1 ${
                          index === currentPSStep ? 'text-blue-300' : 'text-gray-500'
                        }`}>
                          {ps.title}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Current Step Content */}
                  {currentStep && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{currentStep.icon}</span>
                        <span className="font-bold text-blue-300 text-sm">
                          Langkah {currentStep.step}: {currentStep.title}
                        </span>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {currentStep.content}
                      </p>
                    </div>
                  )}

                  {/* PS Navigation */}
                  <div className="flex items-center justify-between mt-3">
                    <button
                      onClick={handlePrevPSStep}
                      disabled={currentPSStep === 0}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentPSStep === 0
                          ? 'text-gray-600 cursor-not-allowed'
                          : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      ← Langkah Sebelumnya
                    </button>
                    <button
                      onClick={handleNextPSStep}
                      disabled={currentPSStep >= (problemSolving?.length || 0) - 1}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentPSStep >= (problemSolving?.length || 0) - 1
                          ? 'text-gray-600 cursor-not-allowed'
                          : 'text-blue-300 hover:text-blue-200 bg-blue-500/20 hover:bg-blue-500/30'
                      }`}
                    >
                      Langkah Selanjutnya →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scaffolding Info */}
          <div className="bg-white/5 rounded-lg p-3 border border-white/5">
            <p className="text-xs text-gray-400 text-center">
              💡 <span className="text-gray-300">Scaffolding Berjenjang:</span> Mulai dari petunjuk ringan, lalu naik bertahap hingga penjelasan lengkap. Gunakan sesuai kebutuhanmu!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
