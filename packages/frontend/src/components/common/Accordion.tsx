// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

type TAccordion = {
  title: string;
  children: React.ReactNode;
};

const Details = styled.details`
  ${xw`
    block
    w-full
    cursor-pointer
  `}
`;

const Summary = styled.summary`
  ${xw`
    p-3
    my-2
    rounded
    font-medium
    bg-gray-300
    focus:ring-2
    focus:outline-none
    focus:border-blue-100
  `}
`;

const Accordion: FC<TAccordion> = ({ title, children }) => (
  <Details>
    <Summary>{title}</Summary>
    {children}
  </Details>
);

export default Accordion;
