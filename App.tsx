
import React, { useState, useEffect, useCallback } from 'react';
import { AppStep } from './types';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import ResultLoading from './components/ResultLoading';
import Revelation from './components/Revelation';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.HERO);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleStartQuiz = () => {
    setCurrentStep(AppStep.QUIZ);
  };

  const handleQuizComplete = (finalAnswers: Record<number, string>) => {
    setAnswers(finalAnswers);
    setCurrentStep(AppStep.LOADING);
  };

  const handleFinishLoading = useCallback(() => {
    setCurrentStep(AppStep.RESULT);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0055', '#ff8c00', '#eab308', '#22c55e']
    });
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#FFF8F0] selection:bg-pink-100 selection:text-pink-600">
      {/* Dynamic Enhanced Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-pink-200 rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[70%] h-[70%] bg-yellow-100 rounded-full blur-[140px] opacity-50"></div>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-orange-100 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {currentStep === AppStep.HERO && <Hero onStart={handleStartQuiz} />}
        
        {currentStep === AppStep.QUIZ && (
          <Quiz onComplete={handleQuizComplete} />
        )}

        {currentStep === AppStep.LOADING && (
          <ResultLoading onFinish={handleFinishLoading} />
        )}

        {currentStep === AppStep.RESULT && (
          <Revelation />
        )}
      </div>

      {/* Footer Branding */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Desincha Carnaval. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
