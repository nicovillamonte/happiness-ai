import { AnswerDTO, QuestionaryDTO } from '../DTO/questionary.dto';

export const SOCIAL_RELATION_QUEST: QuestionaryDTO = {
  questions: [
    {
      question:
        '¿Cuántas personas tienes cerca de ti en quienes puedes confiar si tienes grandes problemas personales?',
      options: [
        {
          answer: 'Ninguna',
        },
        {
          answer: '1-2',
        },
        {
          answer: '3-5',
        },
        {
          answer: '5 o más',
        },
      ],
    },
    {
      question:
        '¿Cuánto interés y preocupación muestran las personas en lo que haces?',
      options: [
        {
          answer: 'Ninguno',
        },
        {
          answer: 'Poco',
        },
        {
          answer: 'Incierto',
        },
        {
          answer: 'Alguno',
        },
        {
          answer: 'Mucho',
        },
      ],
    },
    {
      question:
        '¿Qué tan fácil es obtener ayuda práctica de tus vecinos si la necesitas?',
      options: [
        {
          answer: 'Muy difícil',
        },
        {
          answer: 'Difícil',
        },
        {
          answer: 'Posible',
        },
        {
          answer: 'Fácil',
        },
        {
          answer: 'Muy fácil',
        },
      ],
    },
  ],
};
