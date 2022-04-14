// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

type TRadio = {
  name?: string;
  label?: string;
  register?: any;
  checked?: boolean;
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

const Radio: FC<TRadio> = ({ name, label, checked, register, ...props }) => (
  <Label id={`label-${name}`} htmlFor={name}>
    <div css={xw`flex items-center h-full`}>
      <Input
        id={name}
        type="radio"
        checked={checked}
        {...register}
        {...props}
      />
    </div>
    <Span>{label}</Span>
  </Label>
);

export default Radio;
