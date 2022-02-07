// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

type TLabel = {
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const LabelStyle = styled.label`
  ${xw`
    mt-2
    mb-1
    w-full
    text-xs
    text-left
    sm:text-sm 
    tracking-wide 
    text-gray-600
  `}
`;

const Label: FC<TLabel> = ({ children, ...props }) => (
  <LabelStyle {...props}>{children}</LabelStyle>
);

export default Label;
