// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import SpanError from './SpanError';

type IInput = {
  register?: any;
  error?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  messageError?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputStyle = styled.input<IInput>`
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

  ${({ disabled, readOnly }) =>
    (disabled || readOnly) && xw`bg-gray-200 cursor-not-allowed`}
`;

const Input: FC<IInput> = ({ register, error, messageError, ...props }) => (
  <>
    <InputStyle {...register} error={error} {...props} />
    {error && <SpanError>{messageError}</SpanError>}
  </>
);

export default Input;
