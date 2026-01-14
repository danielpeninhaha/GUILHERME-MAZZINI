
import { QUIZ_QUESTIONS } from './constants.js';
import confetti from 'canvas-confetti';

// State Management
let currentStep = 'HERO'; 
let currentQuestionIndex = 0;
let answers = {};

const mainContent = document.getElementById('main-content');

// --- Renderers ---

function renderHero() {
  mainContent.innerHTML = `
    <div class="flex-1 flex flex-col items-center px-4 py-12 md:py-20 fade-in">
      <div class="max-w-3xl w-full flex flex-col items-center text-center space-y-8">
        <div class="space-y-4">
          <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Descubra por que você não consegue <span class="gradient-text">desinchar</span> para o Carnaval
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-medium">
            Um teste de 60 segundos baseado em bioimpedância comportamental.
          </p>
        </div>
        
        <div class="w-full relative group">
          <div class="rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" class="w-full aspect-[16/9] object-cover" />
          </div>
        </div>

        <button id="start-btn" class="btn-primary w-full max-w-md py-6 text-xl font-black text-white rounded-full shadow-xl flex items-center justify-center gap-3">
          INICIAR TESTE AGORA
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  `;

  document.getElementById('start-btn').addEventListener('click', () => {
    currentStep = 'QUIZ';
    render();
  });
}

function renderQuiz() {
  const q = QUIZ_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  mainContent.innerHTML = `
    <div class="flex-1 flex flex-col items-center px-4 py-8 md:py-16 slide-up">
      <div class="max-w-3xl w-full">
        <!-- Progress -->
        <div class="mb-10 space-y-3">
          <div class="flex justify-between items-end">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Passo ${currentQuestionIndex + 1} de ${QUIZ_QUESTIONS.length}</span>
            <span class="text-pink-600 font-black text-2xl">${Math.round(progress)}%</span>
          </div>
          <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-500" style="width: ${progress}%"></div>
          </div>
        </div>

        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-5xl font-black text-gray-900 leading-tight">${q.question}</h2>
          <p class="mt-3 text-gray-500 font-medium italic">${q.microcopy}</p>
        </div>

        <div class="grid gap-4 ${q.type === 'photo' ? 'grid-cols-2' : 'grid-cols-1'}">
          ${q.options.map(opt => `
            <button class="quiz-option group bg-white p-5 rounded-3xl border-2 border-transparent hover:border-pink-300 hover:shadow-xl transition-all flex flex-col items-center text-center gap-3" data-id="${opt.id}">
              ${q.type === 'photo' ? `<img src="${opt.imageUrl}" class="w-full aspect-square object-cover rounded-2xl mb-2" />` : ''}
              <span class="text-lg font-bold text-gray-800">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      handleAnswer(id);
    });
  });
}

function handleAnswer(optionId) {
  answers[currentQuestionIndex] = optionId;
  if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
    currentQuestionIndex++;
    render();
  } else {
    currentStep = 'LOADING';
    render();
  }
}

function renderLoading() {
  const messages = ["Analisando respostas...", "Cruzando com dados metabólicos...", "Gerando seu protocolo 7 dias..."];
  let msgIndex = 0;

  mainContent.innerHTML = `
    <div class="flex-1 flex flex-col items-center justify-center px-4 fade-in">
      <div class="text-center space-y-8">
        <div class="w-20 h-20 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <h2 id="loading-msg" class="text-2xl font-bold text-gray-800 animate-pulse">${messages[0]}</h2>
      </div>
    </div>
  `;

  const interval = setInterval(() => {
    msgIndex++;
    if (msgIndex < messages.length) {
      const msgEl = document.getElementById('loading-msg');
      if (msgEl) msgEl.innerText = messages[msgIndex];
    } else {
      clearInterval(interval);
      currentStep = 'RESULT';
      render();
    }
  }, 1500);
}

function renderResult() {
  mainContent.innerHTML = `
    <div class="flex-1 flex flex-col items-center px-4 py-12 md:py-20 fade-in">
      <div class="max-w-4xl w-full">
        <div class="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-pink-50">
          <div class="p-8 md:p-16 flex flex-col md:flex-row gap-10 items-center">
            <div class="flex-1 space-y-6">
               <span class="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-black uppercase">Diagnóstico Concluído</span>
               <h2 class="text-4xl font-black text-gray-900">Seu corpo está em modo de <span class="text-pink-500">Reserva Inflamatória.</span></h2>
               <p class="text-lg text-gray-600 leading-relaxed font-medium">
                 O motivo de você não ver resultados não é falta de treino, mas sim um excesso de retenção causado por cortisol pré-Carnaval. Você precisa de um "reset" sistêmico.
               </p>
               <div class="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl">
                 <p class="text-orange-900 font-bold italic">Você foi qualificada(o) para o Protocolo Expresso de 7 Dias.</p>
               </div>
            </div>
            <div class="w-full md:w-80 shrink-0">
               <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" class="rounded-[2rem] shadow-lg w-full aspect-square object-cover" />
            </div>
          </div>
        </div>

        <div class="mt-12 text-center space-y-8">
          <h3 class="text-3xl font-black text-gray-900">Pronta para o melhor Carnaval da sua vida?</h3>
          <a href="https://pay.kiwify.com.br/EXEMPLO" class="btn-primary inline-flex items-center gap-4 px-12 py-7 text-2xl font-black text-white rounded-full shadow-2xl hover:scale-105 transition-all">
            QUERO MEU ACESSO AGORA
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">Vagas limitadas para o lote promocional</p>
        </div>
      </div>
    </div>
  `;
  
  // Confetti effect on result
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// --- Main App Controller ---

function render() {
  if (currentStep === 'HERO') renderHero();
  else if (currentStep === 'QUIZ') renderQuiz();
  else if (currentStep === 'LOADING') renderLoading();
  else if (currentStep === 'RESULT') renderResult();
}

// Start
render();
