// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';
import SpanError from './SpanError';

type ISelect = {
  error?: boolean;
  disabled?: boolean;
  messageError?: string;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const SelectStyle = styled.select<ISelect>`
  ${xw`
    p-2
    w-full 
    border
    rounded
    text-sm
    relative
    sm:text-base
    focus:ring-1
    focus:outline-none
    placeholder-gray-500
    focus:border-blue-300
  `}

  ${({ error }) => error && xw`border border-red-500`}

  ${({ disabled }) => disabled && xw`bg-gray-200 cursor-not-allowed`}
`;

const Select: FC<ISelect> = ({ error, children, messageError, ...props }) => (
  <>
    <SelectStyle error={error} {...props}>
      {children}
    </SelectStyle>
    {error && <SpanError>{messageError}</SpanError>}
  </>
);

export default Select;
