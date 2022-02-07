// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import SpanError from './SpanError';

type TTextarea = {
  counter?: number;
  maxLength?: number;
  register?: any;
  error?: boolean;
  disabled?: boolean;
  messageError?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaStyle = styled.textarea<TTextarea>`
  ${xw`
    p-2
    h-28
    w-full 
    border
    rounded
    text-sm
    relative
    resize-none
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
  counter,
  maxLength,
  register,
  error,
  messageError,
  ...props
}) => (
  <>
    <TextareaStyle
      {...props}
      {...register}
      error={error}
      maxLength={maxLength}
    />

    <div css={xw`flex justify-between`}>
      <SpanError>{messageError}</SpanError>

      <span css={xw`mt-1 text-xs`}>
        {counter} / {maxLength}
      </span>
    </div>
  </>
);

export default Textarea;
