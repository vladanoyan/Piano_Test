import Do from '../resource/images/do.wav';
import Re from '../resource/images/re.wav';
import Mi from '../resource/images/mi.wav';
import Fa from '../resource/images/fa.wav';
import Sol from '../resource/images/sol.wav';
import La from '../resource/images/la.wav';
import Si from '../resource/images/si.wav';

const pi = [
  {
    name: 'Do',
    id: 1,
    source: Do,
  },
  {
    name: 'Re',
    id: 2,
    source: Re,
  },
  {
    name: 'Mi',
    id: 3,
    source: Mi,
  },
  {
    name: 'Fa',
    id: 4,
    source: Fa,
  },
  {
    name: 'Sol',
    id: 5,
    source: Sol,
  },
  {
    name: 'La',
    id: 6,
    source: La,
  },
  {
    name: 'Si',
    id: 7,
    source: Si,
  },
  {
    name: 'Do',
    id: 8,
    source: Do,
  },
  {
    name: 'RE',
    id: 9,
    source: Re,
  },
  {
    name: 'MI',
    id: 10,
    source: Mi,
  },
];

const piano = (state = pi, action) => {
  switch (action.type) {
    case 'PLAY':
      console.log('dispatch Worked !!!', state);
      return [
        ...state,
      ];
    default:
      return state;
  }
};
export default piano;
