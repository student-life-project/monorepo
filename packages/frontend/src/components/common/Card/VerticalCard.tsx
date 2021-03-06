// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

import PriceSection from './PriceSection';
import RateSection from './RateSection';

interface IVerticalCard {
  rate?: number;
  title: string;
  imageUrl: string;
  placeId?: string;
  rateNumber?: number;
  pricePerMonth: number;
}

const Content = styled.div`
  ${xw`
    w-64
    h-72
    border
    rounded
    bg-white
    font-montserrat
    border-secondary-2
  `}
`;

const Img = styled.img`
  ${xw`
    h-1/2
    w-full
    border-b
    rounded-t
    box-border
    bg-gray-400
    object-cover
    border-secondary-2
  `}
`;

const Info = styled.section`
  ${xw`
    p-4
    flex
    h-1/2
    w-full
    flex-col
    justify-end
  `}
`;

const NotRate = styled.p`
  ${xw`
    flex
    my-3
    w-full
    text-sm
    text-secondary-1
  `}
`;

const Description = styled.p`
  ${xw`
    text-sm
    break-words
    text-secondary-1
  `}
`;

const Verticalcard: FC<IVerticalCard> = ({
  rate,
  title,
  imageUrl,
  // placeId,
  rateNumber,
  pricePerMonth,
}) => (
  <Content>
    <Img src={imageUrl} alt={title} />
    <Info>
      {rate && rateNumber ? (
        <RateSection score={String(rate)} scoreCount={rateNumber} />
      ) : (
        <NotRate>No hay evaluaciones</NotRate>
      )}
      <Description>{title}</Description>
      <PriceSection currency="MXN" price={pricePerMonth} />
    </Info>
  </Content>
);

export default Verticalcard;
