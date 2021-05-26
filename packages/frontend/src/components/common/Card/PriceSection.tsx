// eslint-disable-next-line simple-import-sort/imports
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

const Content = styled.div`
  ${xw`
    flex
    mt-4
    w-full
    justify-end
    items-center
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    mr-1
    text-gray-400 
  `}
`;

const Text = styled.p`
  ${xw`
    text-sm
    text-secondary-1
  `}
`;

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
    <Content>
      <Icon icon={faHome} height="1.2rem" />
      <Text>{formatter.format(price)} / mes</Text>
    </Content>
  );
};

export default memo(PriceSection);
