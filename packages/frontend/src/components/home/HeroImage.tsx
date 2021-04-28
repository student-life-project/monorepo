import { FC } from 'react';
import xw from 'xwind';

interface IHeroImage {
  url: string;
  name: string;
}

const HeroImage: FC<IHeroImage> = ({ url, name }) => {
  return (
    <div css={xw`w-full h-64`}>
      <img
        src={url}
        alt={name}
        css={xw`w-full h-full bg-gray-400 object-cover`}
      />
    </div>
  );
};

export default HeroImage;
