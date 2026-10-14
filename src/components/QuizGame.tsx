import { useState, useEffect } from 'react';
import { Topic, Question } from '../data/questions';
import ScaffoldingHelper from './ScaffoldingHelper';

interface QuizGameProps {
  topic: Topic;
  onComplete: (correct: number, total: number) => void;
  onBack: () => void;
}

const topicColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  gaya: { bg: 'from-violet-500 to-indigo-600', border: 'border-violet-400/50', text: 'text-violet-300', glow: 'shadow-violet-500/30' },
  energi: { bg: 'from-amber-500 to-orange-600', border: 'border-amber-400/50', text: 'text-amber-300', glow: 'shadow-amber-500/30' },
  cahaya: { bg: 'from-fuchsia-500 to-pink-600', border: 'border-fuchsia-400/50', text: 'text-fuchsia-300', glow: 'shadow-fuchsia-500/30' },
  suhu: { bg: 'from-red-500 to-rose-600', border: 'border-red-400/50', text: 'text-red-300', glow: 'shadow-red-500/30' },
  getaran: { bg: 'from-emerald-500 to-teal-600', border: 'border-emerald-400/50', text: 'text-emerald-300', glow: 'shadow-emerald-500/30' },
};

export default function QuizGame({ topic, onComplete, onBack }: QuizGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [animateIn, setAnimateIn] = useState(true);
  const [timeLeft, setTimeLeft] = useState(45);
  const [timerActive, setTimerActive] = useState(true);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [scaffoldUsed, setScaffoldUsed] = useState(0);

  const colors = topicColors[topic.id] || topicColors.gaya;

  useEffect(() => {
    const shuffled = [...topic.questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [topic]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timerActive && timeLeft > 0 && !showFeedback) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showFeedback) {
      handleTimeUp();
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, showFeedback]);

  const handleTimeUp = () => {
    setShowFeedback(true);
    setIsCorrect(false);
    setTimerActive(false);
    setWrongStreak(prev => prev + 1);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    setTimerActive(false);
    
    const correct = answerIndex === shuffledQuestions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setCorrectCount(prev => prev + 1);
      setWrongStreak(0);
    } else {
      setWrongStreak(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setAnimateIn(false);
    setTimeout(() => {
      if (currentQuestion + 1 < shuffledQuestions.length) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setIsCorrect(false);
        setTimeLeft(45);
        setTimerActive(true);
        setAnimateIn(true);
      } else {
        const finalCorrect = correctCount;
        onComplete(finalCorrect, shuffledQuestions.length);
      }
    }, 300);
  };

  if (shuffledQuestions.length === 0) return null;

  const question = shuffledQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  const timerPercentage = (timeLeft / 45) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back Button & Progress */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group"
        >
          <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center group-hover:bg-white/20 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-sm font-medium hidden sm:inline">Kembali</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <span className="text-xs text-gray-400">Soal</span>
            <span className="text-sm font-bold text-white">{currentQuestion + 1}/{shuffledQuestions.length}</span>
          </div>
          <div className="glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <span className="text-green-400">✓</span>
            <span className="text-sm font-bold text-green-300">{correctCount}</span>
          </div>
          {scaffoldUsed > 0 && (
            <div className="glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5 border-amber-400/30">
              <span className="text-xs">🆘</span>
              <span className="text-sm font-bold text-amber-300">{scaffoldUsed}</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-white/5 rounded-full mb-5 overflow-hidden glass-card">
        <div
          className={`h-full bg-gradient-to-r ${colors.bg} rounded-full transition-all duration-500 relative`}
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
        </div>
      </div>

      {/* Wrong Streak Warning */}
      {wrongStreak >= 2 && !showFeedback && (
        <div className="mb-4 glass-card border border-amber-400/30 rounded-2xl p-4 animate-slideUp bg-gradient-to-r from-amber-500/10 to-orange-500/10">
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-wiggle">⚠️</span>
            <div>
              <p className="text-amber-200 font-bold text-sm">Hmm, sepertinya kamu butuh bantuan!</p>
              <p className="text-amber-300/70 text-xs mt-0.5">Coba gunakan scaffolding di bawah untuk bantuan bertahap 🏗️</p>
            </div>
          </div>
        </div>
      )}

      {/* Timer */}
      <div className="flex justify-center mb-5">
        <div className={`relative glass-card rounded-full px-5 py-2.5 flex items-center gap-3 border ${
          timeLeft <= 10 ? 'border-red-400/50 bg-red-500/10' : 'border-white/10'
        }`}>
          {/* Circular progress */}
          <div className="relative w-10 h-10">
            <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className={timeLeft <= 10 ? 'text-red-400' : timeLeft <= 20 ? 'text-amber-400' : 'text-green-400'}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${timerPercentage}, 100`}
                style={{ transition: 'stroke-dasharray 1s linear' }}
              />
            </svg>
            <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${
              timeLeft <= 10 ? 'text-red-400' : 'text-white'
            }`}>
              {timeLeft}
            </span>
          </div>
          <span className={`text-sm font-medium ${
            timeLeft <= 10 ? 'text-red-300' : 'text-gray-300'
          }`}>
            {timeLeft <= 10 ? 'Cepat!' : 'detik tersisa'}
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className={`transition-all duration-300 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className={`glass-card-strong rounded-3xl p-6 md:p-8 mb-5 relative overflow-hidden shadow-2xl ${colors.glow}`}>
          {/* Decorative gradient */}
          <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${colors.bg} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl animate-float">{topic.icon}</span>
              <span className={`text-sm font-medium ${colors.text}`}>{topic.name}</span>
              <span className={`ml-auto text-xs px-3 py-1.5 rounded-full font-bold ${
                question.type === 'calculation' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                question.type === 'application' ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
                'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              }`}>
                {question.type === 'calculation' ? '🧮 Hitungan' :
                 question.type === 'application' ? '🔧 Penerapan' : '📚 Konsep'}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              {question.question}
            </h2>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-5">
          {question.options.map((option, index) => {
            let optionStyle = 'glass-card hover:bg-white/10 hover:border-white/20 hover:scale-[1.01]';
            
            if (showFeedback) {
              if (index === question.correctAnswer) {
                optionStyle = 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/50 ring-2 ring-green-400/30 scale-[1.02]';
              } else if (index === selectedAnswer && !isCorrect) {
                optionStyle = 'bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-400/50 ring-2 ring-red-400/30';
              } else {
                optionStyle = 'glass-card opacity-40';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${optionStyle} ${!showFeedback ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold border-2 transition-all ${
                    showFeedback && index === question.correctAnswer
                      ? 'bg-green-500 border-green-400 text-white shadow-lg shadow-green-500/30'
                      : showFeedback && index === selectedAnswer && !isCorrect
                      ? 'bg-red-500 border-red-400 text-white shadow-lg shadow-red-500/30'
                      : 'border-white/20 text-gray-400 bg-white/5'
                  }`}>
                    {showFeedback && index === question.correctAnswer ? '✓' :
                     showFeedback && index === selectedAnswer && !isCorrect ? '✗' :
                     String.fromCharCode(65 + index)}
                  </span>
                  <span className={`text-sm md:text-base font-medium ${
                    showFeedback && index === question.correctAnswer
                      ? 'text-green-200'
                      : showFeedback && index === selectedAnswer && !isCorrect
                      ? 'text-red-200'
                      : 'text-gray-200'
                  }`}>
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scaffolding Helper */}
        <div className="mb-5">
          <ScaffoldingHelper
            scaffolding={question.scaffolding}
            problemSolving={question.problemSolving}
            questionType={question.type}
            topicId={topic.id}
          />
        </div>

        {/* Feedback Section */}
        {showFeedback && (
          <div className={`animate-slideUp rounded-3xl p-6 border ${
            isCorrect
              ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-400/30'
              : 'bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-400/30'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${
                isCorrect ? 'bg-green-500/20' : 'bg-orange-500/20'
              }`}>
                {isCorrect ? '🎉' : '💡'}
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-300' : 'text-orange-300'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {isCorrect ? question.feedback : 'Belum tepat, tapi jangan menyerah! 💪'}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>

            {/* Problem Solving Summary */}
            {!isCorrect && question.problemSolving && question.problemSolving.length > 0 && (
              <div className="mt-5 bg-blue-500/10 border border-blue-400/20 rounded-2xl p-4">
                <h4 className="text-blue-300 font-bold text-sm mb-3 flex items-center gap-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  <span className="text-lg">🧩</span> Strategi Problem Solving:
                </h4>
                <div className="space-y-2.5">
                  {question.problemSolving.map((step) => (
                    <div key={step.step} className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-sm flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-300 text-xs font-bold">{step.title}: </span>
                        <span className="text-gray-300 text-xs">{step.content}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <button
              onClick={handleNext}
              className={`mt-5 w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 text-lg shadow-lg ${
                isCorrect
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02]'
                  : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]'
              }`}
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              {currentQuestion + 1 < shuffledQuestions.length ? 'Soal Berikutnya →' : 'Lihat Hasil 🏆'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
