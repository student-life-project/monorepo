// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface IUserButton {
  height?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = styled.button`
  ${xw`
    flex
    items-center
    focus:outline-none
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    mr-1
    sm:my-2
    stroke-1
    font-thin
    text-secondary-1
  `}
`;

const UserButton: FC<IUserButton> = ({ onClick, children, height }) => (
  <Button type="button" onClick={onClick}>
    <Icon icon={faUserCircle} height={height || '1.2rem'} /> {children}
  </Button>
);

export default UserButton;
