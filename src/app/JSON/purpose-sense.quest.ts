import { InventaryDTO } from '../DTO/inventary.dto';

// Generalmente me encuentro: 1 (completamente aburrido) a 7 (exhuberante, entusiasmado)
// La vida me parece: 1 (completamente rutinaria) a 7 (siempre emocionante)
// En la vida tengo: 1 (ninguna meta o anhelo) a 7 (muchas metas y anhelos definidos)
// Mi existencia personal es: 1 (sin sentido ni propósito) a 7 (llena de sentidos y propósitos)
// Cada día es: 1 (exactamente igual) a 7 (siempre nuevo y diferente)
// Si pudiera elegir: 1 (nunca habría nacido) a 7 (tendría otras nueve vidas iguales a esta)
// Después de retirarme: 1 (holgazanearía el resto de mi vida) a 7 (haría las cosas emocionantes que siempre deseé realizar)
// En el logro de mis metas vitales: 1 (no he conseguido ningún progreso) a 7 (he llegado a mi realización completa)
// Mi vida es: 1 (vacía y llena de desesperación) a 7 (un conjunto de cosas buenas y emocionantes)
// Si muriera hoy, me parecería que mi vida ha sido: 1 (una completa basura) a 7 (muy valiosa)
// Al pensar en mi propia vida: 1 (me pregunto a menudo la razón por la que existo) a 7 (siempre encuentro razones para vivir)
// Tal y como yo lo veo en relación con mi vida, el mundo: 1 (me confunde por completo) a 7 (se adapta significativamente a mi vida)
// Me considero: 1 (una persona irresponsable) a 7 (una persona muy responsable)
// En cuanto a la libertad de que dispone para hacer sus propias elecciones, creo que el hombre es: 1 (completamente esclavo de las limitaciones de la herencia y del ambiente) a 7 (absolutamente libre de hacer todas sus elecciones vitales)
// Con respecto a la muerte, estoy: 1 (falto de preparación y atemorizado) a 7 (preparado y sin temor)
// Con respecto al suicidio: 1 (lo he considerado seriamente como una salida a mi situación) a 7 (nunca le he dedicado un segundo pensamiento)
// Considero que mi capacidad para encontrar un significado, un propósito en la vida es: 1 (prácticamente nula) a 7 (muy grande)
// Mi vida está: 1 (fuera de mis manos y controlada por factores externos) a 7 (en mis manos y bajo mi control)
// Enfrentarme a mis tareas cotidianas supone: 1 (una experiencia dolorosa y aburrida) a 7 (una fuente de placer y satisfacción)
// He descubierto: 1 (ninguna misión o propósito en mi vida) a 7 (metas claras y un propósito satisfactorio para mi vida)

export const PURPOSE_SENSE_QUEST: InventaryDTO = {
  numberOfValues: 7,
  startValue: 1,
  items: [
    {
      question: 'Generalmente me encuentro:',
      left: 'ABURRIDO',
      right: 'ENTUSIASMADO',
    },
    {
      question: 'La vida me parece:',
      left: 'RUTINARIA',
      right: 'EMOCIONANTE',
    },
    {
      question: 'En la vida tengo:',
      left: 'NINGUNA META O ANHELO',
      right: 'MUCHAS METAS Y ANHELOS DEFINIDOS',
    },
    {
      question: 'Mi existencia personal es:',
      left: 'SIN SENTIDO NI PROPÓSITO',
      right: 'LLENA DE SENTIDOS Y PROPÓSITOS',
    },
    {
      question: 'Cada día es:',
      left: 'EXACTAMENTE IGUAL',
      right: 'SIEMPRE NUEVO Y DIFERENTE',
    },
    {
      question: 'Si pudiera elegir:',
      left: 'NUNCA HABRÍA NACIDO',
      right: 'TENDRÍA OTRAS NUEVE VIDAS IGUALES A ESTA',
    },
    {
      question: 'Después de retirarme:',
      left: 'HOLGAZANEARÍA EL RESTO DE MI VIDA',
      right: 'HARÍA LAS COSAS EMOCIONANTES QUE SIEMPRE DESEÉ REALIZAR',
    },
    {
      question: 'En el logro de mis metas vitales:',
      left: 'NO HE CONSEGUIDO NINGÚN PROGRESO',
      right: 'HE LLEGADO A MI REALIZACIÓN COMPLETA',
    },
    {
      question: 'Mi vida es:',
      left: 'VACÍA Y LLENA DE DESESPERACIÓN',
      right: 'UN CONJUNTO DE COSAS BUENAS Y EMOCIONANTES',
    },
    {
      question: 'Si muriera hoy, me parecería que mi vida ha sido:',
      left: 'UNA COMPLETA BASURA',
      right: 'MUY VALIOSA',
    },
    {
      question: 'Al pensar en mi propia vida:',
      left: 'ME PREGUNTO A MENUDO LA RAZÓN POR LA QUE EXISTO',
      right: 'SIEMPRE ENCUENTRO RAZONES PARA VIVIR',
    },
    {
      question: 'Tal y como yo lo veo en relación con mi vida, el mundo:',
      left: 'ME CONFUNDE POR COMPLETO',
      right: 'SE ADAPTA SIGNIFICATIVAMENTE A MI VIDA',
    },
    {
      question: 'Me considero:',
      left: 'UNA PERSONA IRRESPONSABLE',
      right: 'UNA PERSONA MUY RESPONSABLE',
    },
    {
      question:
        'En cuanto a la libertad de que dispone para hacer sus propias elecciones, creo que el hombre es:',
      left: 'COMPLETAMENTE ESCLAVO DE LAS LIMITACIONES DE LA HERENCIA Y DEL AMBIENTE',
      right: 'ABSOLUTAMENTE LIBRE DE HACER TODAS SUS ELECCIONES VITALES',
    },
    {
      question: 'Con respecto a la muerte, estoy:',
      left: 'FALTO DE PREPARACIÓN Y ATEMORIZADO',
      right: 'PREPARADO Y SIN TEMOR',
    },
    {
      question: 'Con respecto al suicidio:',
      left: 'LO HE CONSIDERADO SERIAMENTE COMO UNA SALIDA A MI SITUACIÓN',
      right: 'NUNCA LE HE DEDICADO UN SEGUNDO PENSAMIENTO',
    },
    {
      question:
        'Considero que mi capacidad para encontrar un significado, un propósito en la vida es:',
      left: 'PRÁCTICAMENTE NULA',
      right: 'MUY GRANDE',
    },
    {
      question: 'Mi vida está:',
      left: 'FUERA DE MIS MANOS Y CONTROLADA POR FACTORES EXTERNOS',
      right: 'EN MIS MANOS Y BAJO MI CONTROL',
    },
    {
      question: 'Enfrentarme a mis tareas cotidianas supone:',
      left: 'UNA EXPERIENCIA DOLOROSA Y ABURRIDA',
      right: 'UNA FUENTE DE PLACER Y SATISFACCIÓN',
    },
    {
      question: 'He descubierto:',
      left: 'NINGUNA MISIÓN O PROPÓSITO EN MI VIDA',
      right: 'METAS CLARAS Y UN PROPÓSITO SATISFACTORIO PARA MI VIDA',
    },
  ],
};
