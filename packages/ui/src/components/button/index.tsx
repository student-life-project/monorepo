import React from 'react';

import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

export type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const themeDefault = {
  colors: {
    primary: 'hotpink',
    positive: 'green',
    negative: 'red',
  },
};

const ButtonStyled = styled.button<Props>`
  color: ${({ color, theme }) => {
    console.log({ theme });
    return color || theme.colors?.primary;
  }};
  background-color: white;
  border-width: 1;
  border-color: ${({ color, theme }) => color || theme.colors?.primary};
  padding: 15px 32px;
  transition: all 250ms;

  &:not([disabled])&:hover {
    color: white;
    background-color: ${({ color, theme }) => color || theme.colors?.primary};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.3;
    cursor: unset;
  }

  & label {
    font-weight: bold;
  }
`;

const Button: React.FC<Props> = ({
  children,
  onClick = () => 'empty',
  disabled = false,
  type = 'submit',
  color = '',
  dataTestId = 'button',
}) => {
  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const rootProps = {
    color,
    type,
    onClick: handleClick,

    disabled,
    'data-testid': dataTestId,
  };

  return (
    <ThemeProvider theme={themeDefault}>
      <ButtonStyled {...rootProps}>
        <span>{children}</span>
      </ButtonStyled>
    </ThemeProvider>
  );
};

export default Button;
