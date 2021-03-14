import { memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

interface IBtn {
  FPrimary?: boolean;
  FSecondary?: boolean;
  FSuccess?: boolean;
  FDanger?: boolean;
  FWarning?: boolean;
  FInfo?: boolean;
  FDark?: boolean;
  BPrimary?: boolean;
  BSecondary?: boolean;
  BSuccess?: boolean;
  BDanger?: boolean;
  BWarning?: boolean;
  disabled?: boolean;
  round?: boolean;
  large?: boolean;
  small?: boolean;
}

const Btn = styled.button<IBtn>`
  ${xw`
    flex
    px-5 
    py-2.5
    text-sm 
    font-bold
    text-white 
    rounded-md
    items-center
    duration-500
    transition ease-in
    focus:outline-black
  `}

  ${({ FPrimary }) => FPrimary && xw`bg-blue-500 hover:bg-blue-600`}

  ${({ FSecondary }) => FSecondary && xw`bg-gray-500 hover:bg-gray-600`}

  ${({ FSuccess }) => FSuccess && xw`bg-green-500 hover:bg-green-600`}

  ${({ FDanger }) => FDanger && xw`bg-red-500 hover:bg-red-600`}

  ${({ FWarning }) => FWarning && xw`bg-yellow-500 hover:bg-yellow-600`}

  ${({ BPrimary }) =>
    BPrimary && xw`text-blue-600 border border-blue-600 hover:bg-blue-100`}

  ${({ BSecondary }) =>
    BSecondary && xw`text-gray-600 border border-gray-600 hover:bg-gray-100`}

  ${({ BSuccess }) =>
    BSuccess && xw`text-green-600 border border-green-600 hover:bg-green-100`}

  ${({ BDanger }) =>
    BDanger && xw`text-red-600 border border-red-600 hover:bg-red-100`}
    
  ${({ BWarning }) =>
    BWarning &&
    xw`text-yellow-600 border border-yellow-600 hover:bg-yellow-100`}

  ${({ disabled }) =>
    disabled && xw`bg-gray-300 hover:bg-gray-300 cursor-not-allowed`}

  ${({ round }) => round && xw`rounded-full`}

  ${({ large }) => large && xw`text-lg py-3 px-6`}

  ${({ small }) => small && xw`text-xs py-2 px-4`}
`;

const Button = ({ children, ...props }) => <Btn {...props}>{children}</Btn>;

export default memo(Button);
