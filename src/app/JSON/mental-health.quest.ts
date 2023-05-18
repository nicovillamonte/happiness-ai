// import { MentalHealthQuestionaryDTO } from '../DTO/mental-health.dto';
import { QuestionaryDTO } from '../DTO/questionary.dto';

export const MENTAL_HEALTH_QUEST: QuestionaryDTO = {
  questions: [
    {
      question: '1. Tristeza',
      options: [
        {
          answer: 'No me siento triste.',
        },
        {
          answer: 'Me siento triste gran parte del tiempo.',
        },
        {
          answer: 'Me siento trist todo el tiempo.',
        },
        {
          answer:
            'Me siento tan triste o soy tan infeliz que no puedo soportarlo.',
        },
      ],
    },

    {
      question: '2. Pesimismo',
      options: [
        {
          answer: 'No estoy desalentado respecto del mi futuro.',
        },
        {
          answer:
            'Me siento más desalentado respecto de mi futuro que lo que solía estarlo.',
        },
        {
          answer: 'No espero que las cosas funcionen para mi.',
        },
        {
          answer:
            'Siento que no hay esperanza para mi futuro y que sólo puede empeorar.',
        },
      ],
    },

    {
      question: '3. Fracaso',
      options: [
        {
          answer: 'No me siento como un fracasado.',
        },
        {
          answer: 'He fracasado más de lo que hubiera debido.',
        },
        {
          answer: 'Cuando miro hacia atrás, veo muchos fracasos.',
        },
        {
          answer: 'Siento que como persona soy un fracaso total.',
        },
      ],
    },

    {
      question: '4. Pérdida de Placer',
      options: [
        {
          answer:
            'Obtengo tanto placer como siempre por las cosas de las que disfruto.',
        },
        {
          answer: 'No disfruto tanto de las cosas como solía hacerlo.',
        },
        {
          answer: 'Obtengo muy poco placer de las cosas que solía disfrutar.',
        },
        {
          answer:
            'No puedo obtener ningún placer de las cosas de las que solía disfrutar.',
        },
      ],
    },

    {
      question: '5. Sentimientos de Culpa',
      options: [
        {
          answer: 'No me siento particularmente culpable.',
        },
        {
          answer:
            'Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.',
        },
        {
          answer: 'Me siento bastante culpable la mayor parte del tiempo.',
        },
        {
          answer: 'Me siento culpable todo el tiempo.',
        },
      ],
    },

    {
      question: '6. Sentimientos de Castigo',
      options: [
        {
          answer: 'No siento que este siendo castigado.',
        },
        {
          answer: 'Siento que tal vez pueda ser castigado.',
        },
        {
          answer: 'Espero ser castigado.',
        },
        {
          answer: 'Siento que estoy siendo castigado.',
        },
      ],
    },

    {
      question: '7. Disconformidad con uno mismo',
      options: [
        {
          answer: 'Siento acerca de mí lo mismo que siempre.',
        },
        {
          answer: 'He perdido la confianza en mí mismo.',
        },
        {
          answer: 'Estoy decepcionado conmigo mismo.',
        },
        {
          answer: 'No me gusto a mí mismo.',
        },
      ],
    },

    {
      question: '8. Autocrítica',
      options: [
        {
          answer: 'No me critico ni me culpo más de lo habitual.',
        },
        {
          answer: 'Estoy más crítico conmigo mismo de lo que solía estarlo.',
        },
        {
          answer: 'Me critico a mí mismo por todos mis errores.',
        },
        {
          answer: 'Me culpo a mí mismo por todo lo malo que sucede.',
        },
      ],
    },

    {
      question: '9. Pensamientos o Deseos Suicidas',
      options: [
        {
          answer: 'No tengo ningún pensamiento de matarme.',
        },
        {
          answer: 'He tenido pensamientos de matarme, pero no lo haría.',
        },
        {
          answer: 'Querría matarme.',
        },
        {
          answer: 'Me mataría si tuviera la oportunidad de hacerlo.',
        },
      ],
    },

    {
      question: '10. Llanto',
      options: [
        {
          answer: 'No lloro más de lo que solía hacerlo.',
        },
        {
          answer: 'Lloro más de lo que solía hacerlo.',
        },
        {
          answer: 'Lloro por cualquier pequeñez.',
        },
        {
          answer: 'Siento ganas de llorar pero no puedo.',
        },
      ],
    },

    {
      question: '11. Agitación',
      options: [
        {
          answer: 'No estoy más inquieto o tenso que lo habitual.',
        },
        {
          answer: 'Me siento más inquieto o tenso que lo habitual.',
        },
        {
          answer:
            'Estoy tan inquieto o agitado que me es difícil quedarme quieto.',
        },
        {
          answer:
            'Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.',
        },
      ],
    },

    {
      question: '12. Pérdida de Interés',
      options: [
        {
          answer: 'No he perdido el interés en otras actividades o personas.',
        },
        {
          answer: 'Estoy menos interesado que antes en otras personas o cosas.',
        },
        {
          answer: 'He perdido casi todo el interés en otras personas o cosas.',
        },
        {
          answer: 'Me es difícil interesarme por algo.',
        },
      ],
    },

    {
      question: '13. Indecisión',
      options: [
        {
          answer: 'Tomo mis propias decisiones tan bien como siempre.',
        },
        {
          answer: 'Me resulta más difícil que de costumbre tomar decisiones.',
        },
        {
          answer:
            'Encuentro mucha más dificultad que antes para tomar decisiones.',
        },
        {
          answer: 'Tengo problemas para tomar cualquier decisión.',
        },
      ],
    },

    {
      question: '14. Desvalorización',
      options: [
        {
          answer: 'No siento que yo no sea valioso.',
        },
        {
          answer:
            'No me considero a mí mismo tan valioso y útil como solía considerarme.',
        },
        {
          answer: 'Me siento menos valioso cuando me comparo con otros.',
        },
        {
          answer: 'Siento que no valgo nada.',
        },
      ],
    },

    {
      question: '15. Pérdida de Energía',
      options: [
        {
          answer: 'Tengo tanta energía como siempre.',
        },
        {
          answer: 'Tengo menos energía que la que solía tener.',
        },
        {
          answer: 'No tengo suficiente energía para hacer demasiado.',
        },
        {
          answer: 'No tengo energía suficiente para hacer nada.',
        },
      ],
    },

    {
      question: '16. Cambios en los Hábitos de Sueño',
      options: [
        {
          answer: 'No he experimentado ningún cambio en mis hábitos de sueño.',
          value: 0,
        },
        {
          answer: 'Duermo un poco más que lo habitual.',
          value: 1,
        },
        {
          answer: 'Duermo un poco menos que lo habitual.',
          value: 1,
        },
        {
          answer: 'Duermo mucho más que lo habitual.',
          value: 2,
        },
        {
          answer: 'Duermo mucho menos que lo habitual.',
          value: 2,
        },
        {
          answer: 'Duermo la mayor parte del día.',
          value: 3,
        },
        {
          answer:
            'Me despierto 1-2 horas más temprano y no puedo volver a dormirme.',
          value: 3,
        },
      ],
    },

    {
      question: '17. Irritabilidad',
      options: [
        {
          answer: 'No estoy tan irritable que lo habitual.',
        },
        {
          answer: 'Estoy más irritable que lo habitual.',
        },
        {
          answer: 'Estoy mucho más irritable que lo habitual.',
        },
        {
          answer: 'Estoy irritable todo el tiempo.',
        },
      ],
    },

    {
      question: '18. Cambios en el Apetito',
      options: [
        {
          answer: 'No he experimentado ningún cambio en mi apetito.',
          value: 0,
        },
        {
          answer: 'Mi apetito es un poco menor que lo habitual.',
          value: 1,
        },
        {
          answer: 'Mi apetito es un poco mayor que lo habitual.',
          value: 1,
        },
        {
          answer: 'Mi apetito es mucho menor que antes.',
          value: 2,
        },
        {
          answer: 'Mi apetito es mucho mayor que lo habitual.',
          value: 2,
        },
        {
          answer: 'No tengo apetito en absoluto.',
          value: 3,
        },
        {
          answer: 'Quiero comer todo el día.',
          value: 3,
        },
      ],
    },

    {
      question: '19. Dificultad de Concentración',
      options: [
        {
          answer: 'Puedo concentrarme tan bien como siempre.',
        },
        {
          answer: 'No puedo concentrarme tan bien como habitualmente.',
        },
        {
          answer: 'Me es difícil mantener la mente en algo por mucho tiempo.',
        },
        {
          answer: 'Encuentro que no puedo concentrarme en nada.',
        },
      ],
    },

    {
      question: '20. Cansancio o Fatiga',
      options: [
        {
          answer: 'No estoy más cansado o fatigado que lo habitual.',
        },
        {
          answer: 'Me fatigo o me canso más fácilmente que lo habitual.',
        },
        {
          answer:
            'Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.',
        },
      ],
    },

    {
      question: '21. Pérdida de Interés en el Sexo',
      options: [
        {
          answer:
            'No he notado ningún cambio reciente en mi interés por el sexo.',
        },
        {
          answer: 'Estoy menos interesado en el sexo de lo que solía estarlo.',
        },
        {
          answer: 'Estoy mucho menos interesado en el sexo.',
        },
        {
          answer: 'He perdido completamente el interés en el sexo.',
        },
      ],
    },
  ],
};
