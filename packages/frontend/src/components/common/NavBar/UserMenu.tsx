// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { EUserType, IUser } from '@student_life/common';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Triangle } from '@/icons';

import Anchor from '../Anchor';
import UserButton from './UserButton';

interface IUserMenu {
  user: IUser;
  onLogoutClick: () => void;
}

const MenuContent = styled.div`
  ${xw`
    font-montserrat
    text-secondary-1
  `}
`;

const MenuList = styled.ul`
  ${xw`
    p-4
    mt-4
    mr-4
    border
    right-0
    bg-white
    absolute
    shadow-lg
    rounded-sm
    border-gray-100
  `}
`;

const MenuItem = styled.li`
  ${xw`
    my-2
    cursor-pointer
    hover:underline
  `}
`;

const ImgLink = styled.a`
  ${xw`
    my-2
    flex
    flex-col
    text-center
    items-center
    justify-center
  `}
`;

const ExitButton = styled.button`
  ${xw`
    focus:ring-2
    hover:text-primary
    focus:outline-none
    focus:ring-offset-1
    focus:border-blue-300
  `}
`;

const UserMenu: FC<IUserMenu> = ({ user, onLogoutClick }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const onClickUserButton = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <MenuContent>
      <UserButton onClick={onClickUserButton} height="2.5rem" />
      {displayMenu && (
        <MenuList>
          <Triangle
            css={xw`block fill-current text-white w-4 h-4 absolute right-0 top-0 mr-5 -mt-3 z-0`}
          />
          <MenuItem>
            <Link href="/profile">
              <ImgLink>
                <UserButton height="2rem" />
                {user.email}
              </ImgLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/profile/messages">
              <Anchor css={xw`text-secondary-1`}>Mensajes</Anchor>
            </Link>
          </MenuItem>
          {user.type === EUserType.OWNER && (
            <MenuItem>
              <Link href="/profile/publications">
                <Anchor css={xw`text-secondary-1`}>Publicaciones</Anchor>
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            <ExitButton type="button" onClick={onLogoutClick}>
              Cerrar Sesión
            </ExitButton>
          </MenuItem>
        </MenuList>
      )}
    </MenuContent>
  );
};

export default UserMenu;
