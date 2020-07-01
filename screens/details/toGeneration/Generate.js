import Head1 from './Head1';
import Head2 from './Head2';
import ImageAdd from './image';
import Anchor from './A';
import P from './P';
import Head3 from './Head3';
import Br from './Br';

const Generate = {
  Head1: Head1,
  Head2: Head2,
  Head3: Head3,
  Paragraph: P,
  Img: ImageAdd,
  Anchor: Anchor,
  Br: Br,
};

export const GenConstants = {
  Head1: 'Head1',
  Head2: 'Head2',
  Paragraph: 'Paragraph',
  Img: 'Img',
  Anchor: 'Anchor',
};

export default Generate;
