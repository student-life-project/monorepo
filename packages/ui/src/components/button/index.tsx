import React from 'react';

import styled from '@emotion/styled';

export type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonStyled = styled.button<Props>`
    color: ${({ color, theme }) => color || theme.color.primary};
    backgroundColor: white;
    border-width: 1:
    border-xolor: ${({ color, theme }) => color || theme.color.primary};
    padding: 15px 32px;
    transition: all 250ms;
    
    &:not([disabled])&:hover {
      color: white;
      background-color: ${({ color, theme }) => color || theme.color.primary};
    }

    &:focus {
      outline: none;
    };

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
    <ButtonStyled {...rootProps}>
      <span>{children}</span>
    </ButtonStyled>
  );
};

export default Button;
