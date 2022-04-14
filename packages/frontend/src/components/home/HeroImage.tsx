/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

interface IHeroImage {
  url: string;
  name: string;
}

const Content = styled.div`
  ${xw`
    h-60
    w-full
    sm:h-96
  `}
`;

const Img = styled.img`
  ${xw`
    w-full
    h-full
    bg-gray-400
    object-cover
  `}
`;

const HeroImage: FC<IHeroImage> = ({ url, name }) => (
  <Content>
    <Img src={url} alt={name} />
  </Content>
);

export default HeroImage;
