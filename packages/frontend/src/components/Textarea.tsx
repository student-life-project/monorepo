// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import SpanError from './SpanError';

type TTextarea = {
  register?: any;
  error?: boolean;
  disabled?: boolean;
  messageError?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaStyle = styled.textarea<TTextarea>`
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

const Textarea: FC<TTextarea> = ({
  register,
  error,
  messageError,
  ...props
}) => (
  <>
    <TextareaStyle {...register} error={error} {...props} />
    {error && <SpanError>{messageError}</SpanError>}
  </>
);

export default Textarea;
