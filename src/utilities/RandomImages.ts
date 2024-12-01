import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';
import image9 from '../assets/images/9.png';
import image10 from '../assets/images/10.png';
import image11 from '../assets/images/11.png';
import image12 from '../assets/images/12.png';

export const assetSerialImages: Record<number, any> = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
  6: image6,
  7: image7,
  8: image8,
  9: image9,
  10: image10,
  11: image11,
  12: image12,
};

const returnRandomImages = (): any => {
  const min = 1;
  const max = 12;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return assetSerialImages[random];
};

export default returnRandomImages;
