import { InventaryDTO, InventaryOrder } from '../DTO/inventary.dto';

export const FAMILY_RELATION_QUEST: InventaryDTO = {
  numberOfValues: 6,
  columnNames: [
    'Totalmente',
    'Bastante',
    'Algo',
    'Algo',
    'Bastante',
    'Totalmente',
  ],
  startValue: 1,

  items: [
    {
      left: 'FELIZ',
      right: 'INFELIZ',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'AISLADO/A',
      right: 'ACOMPAÑADO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'JOVIAL',
      right: 'MALHUMORADO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'RECONFORTADO/A',
      right: 'DESCONSOLADO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'CRITICADO/A',
      right: 'APOYADO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'CON PAZ',
      right: 'SIN PAZ',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'DESCONTENTO/A',
      right: 'CONTENTO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'INSEGURO/A',
      right: 'SEGURO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'A GUSTO',
      right: 'A DISGUSTO',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'SATISFECHO/A',
      right: 'INSATISFECHO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'COHIBIDO/A',
      right: 'LIBRE',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'DESANIMADO/A',
      right: 'ANIMADO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'ENTENDIDO/A',
      right: 'MALINTERPRETADO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'INCOMODO/A',
      right: 'CÓMODO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'ATOSIGADO/A',
      right: 'ALIVIADO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'INVADIDO/A',
      right: 'RESPETADO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'RELAJADO/A',
      right: 'TENSO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'MARGINADO/A',
      right: 'INTEGRADO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'AGITADO/A',
      right: 'SERENO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'TRANQUILO/A',
      right: 'NERVIOSO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'ATACADO/A',
      right: 'DEFENDIDO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'DICHOSO/A',
      right: 'DESDICHADO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'DESAHOGADO/A',
      right: 'AGOBIADO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'COMPRENDIDO/A',
      right: 'INCOMPRENDIDO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'DISTANTE',
      right: 'CERCANO/A',
      order: InventaryOrder.NORMAL,
    },
    {
      left: 'ESTIMULADO/A',
      right: 'REPRIMIDO/A',
      order: InventaryOrder.INVERTED,
    },
    {
      left: 'MAL',
      right: 'BIEN',
      order: InventaryOrder.NORMAL,
    },
  ],
};
