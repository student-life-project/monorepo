import * as React from 'react';

import styled from "@emotion/styled";
import {ThemeProvider} from "@emotion/react"

export type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface IButton {
    color?: string;
}

const theme = {
    color: {
      primary: 'hotpink',
      positive: "green",
      negative: "red"
    }
  }
  

const _Button = styled.button`
color: ${({color, theme}) => color || theme.color.primary};
backgroundColor: white;
    borderWidth: 1:
    borderColor: ${({ color }) => color || theme.color.primary};
    padding: 15px 32px;
    transition: all 250ms;
    
    &:not([disabled])&:hover {
      color: white;
      backgroundColor: ${({ color }) => color || theme.color.primary};
    }

    &:focus {
      outline: none;
    };

    &[disabled] {
      opacity: 0.3;
      cursor: unset;
    }

  & label {
    fontWeight: bold;
  }
`

const Button: React.FC<Props> = ({
  children,
  onClick = () => {},
  disabled = false,
  type = 'submit',
  color = '',
  dataTestId = 'button'
}) => {

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const rootProps = {
    color,
    type,
    onClick: handleClick,
    
    disabled,
    'data-testid': dataTestId
  };

  return (
      <ThemeProvider theme={theme}>
    <_Button {...rootProps}>
      <span>{children}</span>
    </_Button>
      </ThemeProvider>
  );
};

export default Button;