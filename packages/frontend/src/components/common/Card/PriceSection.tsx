// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { formatter } from '@/utils/numberFormat';

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
  currency?: string;
}

const PriceSection: FC<IPriceSection> = ({ price, currency = 'MXN' }) => (
  <Content>
    <Icon icon={faHome as IconProp} height="1.2rem" />
    <Text>{formatter(currency).format(price)} / mes</Text>
  </Content>
);

export default PriceSection;
