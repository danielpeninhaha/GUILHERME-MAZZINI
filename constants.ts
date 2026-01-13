
import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "O que mais te incomoda no Carnaval? 🎭",
    microcopy: "Muita gente sente isso. Pouca gente fala.",
    type: 'photo',
    options: [
      { id: '1a', text: "Roupa apertando", imageUrl: "https://i.postimg.cc/yNPjQH8m/istockphoto-898898936-612x612.jpg" },
      { id: '1b', text: "Corpo pesado", imageUrl: "https://i.postimg.cc/VND99WKp/Captura-de-Tela-2026-01-13-a-s-19-22-40.png" },
      { id: '1c', text: "Me comparar", imageUrl: "https://i.postimg.cc/FzJj45hX/mulher-magra-e-gorda-medindo-a-cintura-com-fita-79405-5411.avif" },
      { id: '1d', text: "Evitar fotos", imageUrl: "https://i.postimg.cc/zDLMByBY/mulher-mantendo-a-mao-nos-olhos-e-evitando-assistir-a-algo-vergonhoso-mostrando-gesto-de-proibicao-d.avif" }
    ]
  },
  {
    id: 2,
    question: "O que acontece com seu corpo no dia a dia? 🕒",
    microcopy: "Isso não é falta de esforço.",
    type: 'photo',
    options: [
      { id: '2a', text: "Começa normal e termina inchado", imageUrl: "https://i.postimg.cc/CKQ7T4k9/modelo-plus-size-de-tiro-medio-posando-em-estudio-23-2150738630.avif" },
      { id: '2b', text: "A roupa aperta cada vez mais", imageUrl: "https://i.postimg.cc/ZnrxNt2W/istockphoto-1056196252-612x612.jpg" },
      { id: '2c', text: "O desconforto só aumenta", imageUrl: "https://i.postimg.cc/QCrphYtf/mulher-gordinha-desconfortada-com-roupa-apertada-Pesquisa-Google.jpg" },
      { id: '2d', text: "Quase nunca me sinto leve", imageUrl: "https://i.postimg.cc/Yqzxq71t/Captura-de-Tela-2026-01-13-a-s-19-30-07.png" }
    ]
  },
  {
    id: 3,
    question: "Como você se sentiria se o Carnaval fosse hoje? ✨",
    microcopy: "Ainda dá tempo de ajustar isso.",
    type: 'text',
    options: [
      { id: '3a', text: "Tentando disfarçar" },
      { id: '3b', text: "Curtindo, mas insegura(o)" },
      { id: '3c', text: "Evitando certas roupas" },
      { id: '3d', text: "Pensando que dava pra ter feito algo antes" }
    ]
  },
  {
    id: 4,
    question: "O que você costuma fazer para resolver? 🤔",
    microcopy: "O problema não é você. É a estratégia.",
    type: 'photo',
    options: [
      { id: '4a', text: "Comer menos", imageUrl: "https://i.postimg.cc/y8JWpX6r/comer-menos-emagrece.jpg" },
      { id: '4b', text: "Treinar pesado", imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600" },
      { id: '4c', text: "Dietas rápidas", imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600" },
      { id: '4d', text: "Sentir culpa", imageUrl: "https://i.postimg.cc/g2fjCXnp/se-culpando.webp" }
    ]
  },
  {
    id: 5,
    question: "Quanto tempo falta para o Carnaval? 🗓️",
    microcopy: "O relógio corre, mas a calma é sua aliada.",
    type: 'text',
    options: [
      { id: '5a', text: "Falta pouco" },
      { id: '5b', text: "Poucos dias" },
      { id: '5c', text: "Semanas" },
      { id: '5d', text: "Ansiedade total" }
    ]
  },
  {
    id: 6,
    question: "O que você mais queria sentir? 💃",
    microcopy: "Sua liberdade começa na sua mente.",
    type: 'text',
    options: [
      { id: '6a', text: "Corpo leve" },
      { id: '6b', text: "Roupa perfeita" },
      { id: '6c', text: "Confiança total" },
      { id: '6d', text: "Zero preocupação" }
    ]
  },
  {
    id: 7,
    question: "Aceita um ajuste simples de 7 dias? 🚀",
    microcopy: "O próximo passo é decisivo.",
    type: 'text',
    options: [
      { id: '7a', text: "Sim, agora! 🚀" },
      { id: '7b', text: "Sim, sem radicalismo 🍃" },
      { id: '7c', text: "Sim, se for rápido ⚡" },
      { id: '7d', text: "Preciso disso! 🔥" }
    ]
  }
];
