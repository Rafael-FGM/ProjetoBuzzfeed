import { Component } from '@angular/core';

@Component({
  selector: 'app-cosmos-quiz',
  templateUrl: './cosmos-quiz.component.html',
  styleUrls: ['./cosmos-quiz.component.css']
})
export class CosmosQuizComponent {
  // Defina suas perguntas e respostas aqui
  questions = [
    {
      question: 'Estrelas ou Planetas? - Qual é a diferença entre uma estrela e um planeta?',
      options: [
        'As estrelas têm luz própria; os planetas refletem a luz de uma estrela.',
        'As estrelas são frias; os planetas são quentes.',
        'Não há diferença.'
      ],
      correctAnswer: 0
    },
    // Adicione outras perguntas aqui
    {
      question: 'Via Láctea ou Andrômeda? - Qual dessas galáxias é maior?',
      options: [
        'Via Láctea.',
        'Andrômeda.',
        'Ambas têm o mesmo tamanho.'
      ],
      correctAnswer: 1
    },
    {
      question: 'Buracos Negros Misteriosos - O que acontece quando algo entra em um buraco negro?',
      options: [
        'Desaparece para sempre.',
        'Se transforma em uma estrela.',
        'Vira um buraco branco.'
      ],
      correctAnswer: 0
    },
    {
      question: 'Luar ou Aurora Boreal? - O que causa a aurora boreal?',
      options: [
        'Reflexão da luz lunar.',
        'Colisão de partículas solares com a atmosfera.',
        'Efeito da gravidade terrestre.'
      ],
      correctAnswer: 1
    },
    {
      question: 'Planetas Gasosos - Qual é o maior planeta do nosso sistema solar?',
      options: [
        'Terra.',
        'Vênus.',
        'Júpter.'
      ],
      correctAnswer: 2
    },
    {
      question: 'Estrelas - Qual é a composição principal das estrelas?',
      options: [
        'Ferre e Níquel.',
        'Hidrogênio e Hélio.',
        'Oxigênio e Carbono.'
      ],
      correctAnswer: 1
    },
    {
      question: 'O que é uma supernova??',
      options: [
        'Chuva de meteoros intensa.',
        'Uma galáxia recém-descoberta.',
        'A explosão de uma estrela.'
      ],
      correctAnswer: 2
    },
    {
      question: 'Mistério - Qual é a teoria aceita para a origem do universo?',
      options: [
        'Expansão cósmica.',
        'Criacionismo.',
        'Teoria do Big Bang.'
      ],
      correctAnswer: 2
    },
    {
      question: 'O que são as estrelas cadentes?',
      options: [
        'Estrelas que caem do céu.',
        'Meteoros que queimam na atmosfera.',
        'Satélites artificiais em órbita.'
      ],
      correctAnswer: 1
    },
    {
      question: 'Quanto tempo a luz do Sol leva para chegar no planeta Terra?',
      options: [
        '8 minutos.',
        '300 minutos.',
        '140 minutos.'
      ],
      correctAnswer: 0
    },
  ];

  title:string ="Universo Deslumbrante: Quanto Você Sabe sobre o Cosmos?"
  description:string ="Prepare-se para uma jornada intergaláctica! Este quiz vai testar seus conhecimentos sobre o vasto universo e além. De planetas distantes a fenômenos cósmicos, você está pronto para explorar os mistérios do cosmos?"

  userAnswers: number[] = [];
  result: string = '';

  checkAnswers() {
    let correctAnswers = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].correctAnswer) {
        correctAnswers++;
      }
    }

    if (correctAnswers <= 2) {
      this.result = 'Explorador Novato';
    } else if (correctAnswers <= 4) {
      this.result = 'Astrônomo Amador';
    } else {
      this.result = 'Mestre do Cosmos';
    }
  }
}


