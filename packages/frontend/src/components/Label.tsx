import { memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

type ILabel = {
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

const Label: React.FC<ILabel> = ({ children, ...props }) => (
  <LabelStyle {...props}>{children}</LabelStyle>
);

export default memo(Label);
