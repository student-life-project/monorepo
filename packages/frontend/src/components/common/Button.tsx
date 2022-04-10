// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

type TButton = {
  FPrimary?: boolean;
  FSecondary?: boolean;
  FSuccess?: boolean;
  FDanger?: boolean;
  FWarning?: boolean;
  BPrimary?: boolean;
  BSecondary?: boolean;
  BSuccess?: boolean;
  BDanger?: boolean;
  BWarning?: boolean;
  disabled?: boolean;
  round?: boolean;
  large?: boolean;
  small?: boolean;
  like?: boolean;
  dislike?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Btn = styled.button<TButton>`
  ${xw`
    flex
    px-5
    py-2.5
    text-sm
    font-bold
    text-white
    rounded-md
    focus:ring
    items-center
    duration-500
    items-center
    justify-center
    transition ease-in
    focus:outline-none
    focus:ring-offset-1
    focus:border-blue-300
  `}

  ${({ FPrimary }) => FPrimary && xw`bg-primary hover:opacity-75`}

  ${({ FSecondary }) => FSecondary && xw`bg-secondary-1 hover:bg-gray-600`}

  ${({ FSuccess }) => FSuccess && xw`bg-green-500 hover:bg-green-600`}

  ${({ FDanger }) => FDanger && xw`bg-red-500 hover:bg-red-600`}

  ${({ FWarning }) => FWarning && xw`bg-yellow-500 hover:bg-yellow-600`}

  ${({ BPrimary }) =>
    BPrimary && xw`text-primary border border-primary hover:bg-blue-100`}

  ${({ BSecondary }) =>
    BSecondary &&
    xw`text-secondary-1 border border-secondary-1 hover:bg-gray-100`}

  ${({ BSuccess }) =>
    BSuccess && xw`text-green-600 border border-green-600 hover:bg-green-100`}

  ${({ BDanger }) =>
    BDanger && xw`text-red-600 border border-red-600 hover:bg-red-100`}
    
  ${({ BWarning }) =>
    BWarning &&
    xw`text-yellow-600 border border-yellow-600 hover:bg-yellow-100`}

  ${({ disabled }) =>
    disabled &&
    xw`text-gray-600 border border-gray-300 bg-gray-300 hover:bg-gray-300 cursor-not-allowed`}

  ${({ round }) => round && xw`rounded-full`}

  ${({ large }) => large && xw`text-lg py-3 px-6`}

  ${({ small }) => small && xw`text-xs py-2 px-4`}

  ${({ like }) => like && xw`bg-blue-100`}
`;

const Button: FC<TButton> = ({ children, ...props }) => (
  <Btn {...props}>{children}</Btn>
);

export default Button;
