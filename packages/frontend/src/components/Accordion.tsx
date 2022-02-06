// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

type IAccordion = {
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

const Accordion: FC<IAccordion> = ({ title, children }) => (
  <Details>
    <Summary>{title}</Summary>
    {children}
  </Details>
);

export default Accordion;
