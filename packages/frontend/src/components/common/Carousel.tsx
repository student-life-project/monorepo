import 'react-image-lightbox/style.css';

import { FC, useState } from 'react';
import Lightbox from 'react-image-lightbox';

type TCarousel = {
  images: any;
  close: () => void;
};

const Carousel: FC<TCarousel> = ({ images, close }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const imgPrev = () => {
    setImgIndex((imgIndex + images.length - 1) % images.length);
  };

  const imgNext = () => {
    setImgIndex((imgIndex + 1) % images.length);
  };

  return (
    <Lightbox
      mainSrc={images[imgIndex]}
      nextSrc={images[(imgIndex + 1) % images.length]}
      prevSrc={images[(imgIndex + images.length - 1) % images.length]}
      onCloseRequest={close}
      onMovePrevRequest={imgPrev}
      onMoveNextRequest={imgNext}
    />
  );
};

export default Carousel;
