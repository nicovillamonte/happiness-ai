import { AnswerDTO, QuestionaryDTO } from '../DTO/questionary.dto';

const OPTIONS: AnswerDTO[] = [
  {
    answer: 'Muy en desacuerdo',
  },
  {
    answer: 'En desacuerdo',
  },
  {
    answer: 'Ligeramente en desacuerdo',
  },
  {
    answer: 'Neutro',
  },
  {
    answer: 'Ligeramente de acuerdo',
  },
  {
    answer: 'De acuerdo',
  },
  {
    answer: 'Muy de acuerdo',
  },
];

export const EMOTIONAL_HEALTH_QUEST: QuestionaryDTO = {
  questions: [
    {
      question:
        'En la mayoría de los aspectos mi vida es como yo quiero que sea.',
      options: OPTIONS,
    },
    {
      question: 'Las circunstancias de mi vida son muy buenas.',
      options: OPTIONS,
    },
    {
      question: 'Estoy satisfecho con mi vida.',
      options: OPTIONS,
    },
    {
      question:
        'Hasta ahora he conseguido de la vida las cosas que considero importantes.',
      options: OPTIONS,
    },
    {
      question: 'Si pudiera vivir mi vida otra vez no cambiaría casi nada.',
      options: OPTIONS,
    },
  ],
};
