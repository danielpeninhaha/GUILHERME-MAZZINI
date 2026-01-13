
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizQuestion } from '../types';
import { ChevronRight, Check } from 'lucide-react';

interface QuizProps {
  onComplete: (answers: Record<number, string>) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isVisible, setIsVisible] = useState(true);

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];
  const progress = ((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(newAnswers);

    // Small delay for visual feedback
    setTimeout(() => {
      if (currentIdx < QUIZ_QUESTIONS.length - 1) {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIdx(prev => prev + 1);
          setIsVisible(true);
        }, 300);
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-8 md:py-16 transition-all duration-700">
      <div className="max-w-3xl w-full">
        
        {/* Header & Progress */}
        <div className="mb-12 space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
              Questão {currentIdx + 1}/{QUIZ_QUESTIONS.length}
            </span>
            <span className="text-pink-600 font-black text-2xl">{Math.round(progress)}%</span>
          </div>
          <div className="h-4 w-full bg-gray-200/50 rounded-full overflow-hidden p-1 backdrop-blur-sm">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(219,39,119,0.4)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Area */}
        <div className={`transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight tracking-tight px-2">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options Grid */}
          <div className={`grid gap-5 ${currentQuestion.type !== 'text' ? 'grid-cols-2 md:grid-cols-2' : 'grid-cols-1'}`}>
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`
                  group relative flex flex-col items-center text-left p-6 rounded-[2rem] border-3 transition-all duration-300
                  ${answers[currentQuestion.id] === option.id 
                    ? 'border-pink-500 bg-white shadow-[0_20px_40px_-10px_rgba(219,39,119,0.2)] scale-[1.03] z-10' 
                    : 'border-transparent bg-white/70 backdrop-blur-sm hover:bg-white hover:border-pink-200 hover:shadow-xl'}
                `}
              >
                {currentQuestion.type !== 'text' && option.imageUrl && (
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-gray-100">
                    <img src={option.imageUrl} alt={option.text} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                )}
                
                <div className="flex items-center justify-between w-full gap-4">
                  <span className={`text-xl font-black ${answers[currentQuestion.id] === option.id ? 'text-gray-900' : 'text-gray-700'}`}>
                    {option.text}
                  </span>
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-3 transition-all duration-300
                    ${answers[currentQuestion.id] === option.id ? 'bg-pink-500 border-pink-500 text-white rotate-0' : 'border-gray-200 text-transparent rotate-90'}
                  `}>
                    <Check className="w-5 h-5 stroke-[4]" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Quiz;
