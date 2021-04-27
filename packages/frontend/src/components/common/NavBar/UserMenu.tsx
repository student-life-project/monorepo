/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { EUserType, IUser } from '@student_life/common';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Triangle } from '@/icons';

import UserButton from './UserButton';

interface IUserMenu {
  user: IUser;
  onLogoutClick: () => void;
}

const Li = styled.li`
  ${xw`
    my-2
  `}
`;

const UserMenu: FC<IUserMenu> = ({ user, onLogoutClick }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const onClickUserButton = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div css={xw`font-montserrat`}>
      <UserButton onClick={onClickUserButton} height="2rem" />
      {displayMenu && (
        <ul
          css={xw`absolute mt-5 mr-2 right-0 p-4 bg-white border border-gray-100 shadow-lg`}
        >
          <Triangle
            css={xw`block fill-current text-white w-4 h-4 absolute right-0 top-0 mr-4 -mt-3 z-0`}
          />
          <Li>
            <Link href="/profile">
              <a
                css={xw`flex flex-col justify-center items-center text-center my-2`}
              >
                <UserButton height="2rem" />
                {user.email}
              </a>
            </Link>
          </Li>
          <Li>
            <Link href="/profile/messages">
              <a>Mensajes</a>
            </Link>
          </Li>
          {user.type === EUserType.OWNER && (
            <Li>
              <Link href="/profile/publications">
                <a>Publicaciones</a>
              </Link>
            </Li>
          )}
          <Li>
            <button type="button" onClick={onLogoutClick}>
              Cerrar Sesión
            </button>
          </Li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
