// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import { TOption } from '@/types';

import SpanError from './SpanError';

type ISelect = {
  register?: any;
  error?: boolean;
  options: TOption[];
  disabled?: boolean;
  messageError?: string;
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

const Select: FC<ISelect> = ({
  register,
  error,
  options,
  messageError,
  ...props
}) => (
  <>
    <SelectStyle {...register} error={error} {...props} defaultValue="">
      <option value="" disabled>
        Selecciona un valor
      </option>

      {options &&
        options.map((item) => (
          <option value={item.value} key={item.name}>
            {item.name}
          </option>
        ))}
    </SelectStyle>
    {error && <SpanError>{messageError}</SpanError>}
  </>
);

export default Select;
