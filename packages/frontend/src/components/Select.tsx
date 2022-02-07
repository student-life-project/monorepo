// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import { IOption } from '@/types';

import SpanError from './SpanError';

type TSelect = {
  register?: any;
  label?: string;
  error?: boolean;
  options: IOption[];
  optionName?: string;
  disabled?: boolean;
  messageError?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const SelectStyle = styled.select<TSelect>`
  ${xw`
    p-2
    pr-7
    w-full 
    border
    rounded
    text-sm
    relative
    bg-white
    sm:text-base
    focus:ring-1
    appearance-none
    focus:outline-none
    placeholder-gray-500
    focus:border-blue-300
  `}

  ${({ error }) => error && xw`border border-red-500`}

  ${({ disabled }) => disabled && xw`bg-gray-200 cursor-not-allowed`}

  background-repeat: no-repeat;
  background-size: 5px 5px, 5px 5px;
  background-position: right 15px top 1em, right 10px top 1em;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
`;

const Select: FC<TSelect> = ({
  register,
  label,
  error,
  options,
  optionName,
  messageError,
  ...props
}) => (
  <>
    <SelectStyle {...register} error={error} {...props} defaultValue="">
      <option value="" disabled>
        {optionName || `Selecciona un ${label?.toLocaleLowerCase()}`}
      </option>

      {options &&
        options.map((item) => {
          const values = Object.values(item);

          return (
            <option value={values[0]} key={values[0]}>
              {values[0]}
            </option>
          );
        })}
    </SelectStyle>
    {error && <SpanError>{messageError}</SpanError>}
  </>
);

export default Select;
