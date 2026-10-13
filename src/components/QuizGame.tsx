import { useState, useEffect } from 'react';
import { Topic, Question } from '../data/questions';

interface QuizGameProps {
  topic: Topic;
  onComplete: (correct: number, total: number) => void;
  onBack: () => void;
}

export default function QuizGame({ topic, onComplete, onBack }: QuizGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [animateIn, setAnimateIn] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    // Shuffle questions
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
        setTimeLeft(30);
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

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back Button & Progress */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Kembali</span>
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            {currentQuestion + 1} / {shuffledQuestions.length}
          </span>
          <span className="text-sm font-bold text-green-400">
            ✓ {correctCount}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/10 rounded-full mb-8 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${topic.color} rounded-full transition-all duration-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Timer */}
      <div className="flex justify-center mb-6">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
          timeLeft <= 10 ? 'border-red-500/50 bg-red-500/10' : 'border-white/20 bg-white/5'
        }`}>
          <svg className={`w-5 h-5 ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className={`font-mono font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className={`transition-all duration-300 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{topic.icon}</span>
            <span className="text-sm text-gray-400">{topic.name}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            let optionStyle = 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20';
            
            if (showFeedback) {
              if (index === question.correctAnswer) {
                optionStyle = 'bg-green-500/20 border-green-500/50 ring-2 ring-green-500/30';
              } else if (index === selectedAnswer && !isCorrect) {
                optionStyle = 'bg-red-500/20 border-red-500/50 ring-2 ring-red-500/30';
              } else {
                optionStyle = 'bg-white/5 border-white/5 opacity-50';
              }
            } else if (index === selectedAnswer) {
              optionStyle = 'bg-purple-500/20 border-purple-500/50';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${optionStyle} ${!showFeedback ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border ${
                    showFeedback && index === question.correctAnswer
                      ? 'bg-green-500 border-green-400 text-white'
                      : showFeedback && index === selectedAnswer && !isCorrect
                      ? 'bg-red-500 border-red-400 text-white'
                      : 'border-white/20 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className={`text-sm md:text-base ${
                    showFeedback && index === question.correctAnswer
                      ? 'text-green-300 font-medium'
                      : showFeedback && index === selectedAnswer && !isCorrect
                      ? 'text-red-300'
                      : 'text-gray-200'
                  }`}>
                    {option}
                  </span>
                  {showFeedback && index === question.correctAnswer && (
                    <span className="ml-auto text-green-400">✓</span>
                  )}
                  {showFeedback && index === selectedAnswer && !isCorrect && (
                    <span className="ml-auto text-red-400">✗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {showFeedback && (
          <div className={`animate-slideUp rounded-2xl p-6 border ${
            isCorrect
              ? 'bg-green-500/10 border-green-500/30'
              : 'bg-orange-500/10 border-orange-500/30'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-3xl">{isCorrect ? '🎉' : '💡'}</span>
              <div>
                <h3 className={`font-bold text-lg mb-2 ${isCorrect ? 'text-green-300' : 'text-orange-300'}`}>
                  {isCorrect ? question.feedback : 'Belum tepat, tapi jangan menyerah!'}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleNext}
              className={`mt-4 w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                isCorrect
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                  : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
              }`}
            >
              {currentQuestion + 1 < shuffledQuestions.length ? 'Soal Berikutnya →' : 'Lihat Hasil 🏆'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
