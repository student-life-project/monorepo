import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

interface IPriceSection {
  price: number;
  currency: string;
}

const PriceSection: FC<IPriceSection> = ({ price, currency }) => {
  const formatter = new Intl.NumberFormat(undefined, {
    currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'currency',
  });
  return (
    <div css={xw`w-full flex items-center justify-end mt-4 text-sm`}>
      <FontAwesomeIcon
        icon={faHome}
        css={xw`text-gray-400 mr-1`}
        height="1.2rem"
      />{' '}
      ${formatter.format(price)} / mes
    </div>
  );
};

export default PriceSection;
