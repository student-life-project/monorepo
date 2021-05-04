import { FC } from 'react';
import xw from 'xwind';

import PriceSection from './PriceSection';
import RateSection from './RateSection';

interface IVerticalCard {
  imageUrl: string;
  placeId?: string;
  rate?: number;
  rateNumber?: number;
  title: string;
  pricePerMonth: number;
}

const Verticalcard: FC<IVerticalCard> = ({
  imageUrl,
  // placeId,
  pricePerMonth,
  title,
  rate,
  rateNumber,
}) => {
  return (
    <div css={xw`bg-white shadow-md h-72 w-64 font-montserrat rounded-sm`}>
      <img
        src={imageUrl}
        alt={title}
        css={xw`w-full object-cover h-1/2 bg-gray-400 border-b border-gray-900 box-border rounded-t-sm`}
      />
      <section css={xw`w-full h-1/2 flex flex-col justify-end px-4 py-4`}>
        {rate && rateNumber && (
          <RateSection score={String(rate)} scoreCount={rateNumber} />
        )}
        <p css={xw`text-sm break-words`}>{title}</p>
        <PriceSection currency="MXN" price={pricePerMonth} />
      </section>
    </div>
  );
};

export default Verticalcard;
