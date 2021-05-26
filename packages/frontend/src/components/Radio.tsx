// eslint-disable-next-line simple-import-sort/imports
import { FC, memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

type IRadio = {
  name?: string;
  label?: string;
  checked: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Label = styled.label`
  ${xw`
    mt-3
    inline-flex 
    items-center 
  `}
`;

const Input = styled.input`
  ${xw`
    w-5
    h-5
    focus:ring-2
    focus:outline-none
    focus:border-blue-300
  `}
`;

const Span = styled.span`
  ${xw`
    ml-2 
    text-gray-700
  `}
`;

const Radio: FC<IRadio> = ({ name, label, checked, ...props }) => (
  <Label id={`label-${name}`} htmlFor={name}>
    <Input id={name} type="radio" checked={checked} {...props} />
    <Span>{label}</Span>
  </Label>
);

export default memo(Radio);
