/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EUserType } from '@student_life/common';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Triangle } from '@/icons';
import { INavBar } from '@/types';

import Anchor from '../Anchor';
import UserButton from './UserButton';

const MenuContent = styled.div`
  ${xw`
    flex
    md:hidden
    rounded-sm
    justify-center
    font-montserrat
    text-secondary-1
  `}
`;

const MenuButton = styled.button`
  ${xw`
    focus:outline-none
  `}
`;

const MenuIconBar = styled(FontAwesomeIcon)`
  ${xw`
    text-secondary-1
  `}
`;

const MenuList = styled.ul`
  ${xw`
    p-4
    mr-2
    mt-14
    right-0
    absolute
    bg-white
    shadow-lg
  `}
`;

const MenuItem = styled.li`
  ${xw`
    my-2
    cursor-pointer
    hover:underline
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

const MobileMenu: FC<INavBar> = ({
  user,
  isLogedIn,
  allowLoginRegister,
  allowRental,
  allowRequest,
  onLogoutClick,
}) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const onClick = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <MenuContent>
      <MenuButton type="button" onClick={onClick}>
        <MenuIconBar icon={faBars as IconProp} height="2.5rem" />
      </MenuButton>

      {displayMenu && (
        <MenuList>
          <Triangle
            css={xw`block fill-current text-white w-4 h-4 absolute right-0 top-0 mr-2 -mt-3 z-0`}
          />

          {isLogedIn && (
            <>
              <MenuItem>
                <Link href="/profile">
                  <UserButton>{user?.email}</UserButton>
                </Link>
              </MenuItem>

              {user?.type === EUserType.ADMIN && (
                <MenuItem>
                  <Link href="/profile/admin">
                    <Anchor css={xw`text-secondary-1`}>
                      Gestionar Student Life
                    </Anchor>
                  </Link>
                </MenuItem>
              )}
            </>
          )}

          {allowRental && (
            <MenuItem>
              <Link href="/rentals">
                <Anchor css={xw`text-secondary-1`}>Ver alojamientos</Anchor>
              </Link>
            </MenuItem>
          )}

          {allowRequest && (
            <Anchor
              css={xw`text-secondary-1`}
              href="mailto:info@studentlife.com.mx?Subject=Necesito asistencia con una situación"
            >
              Enviar una solicitud
            </Anchor>
          )}

          {isLogedIn && user?.type === EUserType.OWNER && (
            <MenuItem>
              <Link href="/profile/publications">
                <Anchor css={xw`text-secondary-1`}>Publicaciones</Anchor>
              </Link>
            </MenuItem>
          )}

          {!isLogedIn && allowLoginRegister && (
            <MenuItem>
              <Anchor href="/api/auth/login" css={xw`text-secondary-1`}>
                Iniciar Sesión | Registrarse
              </Anchor>
            </MenuItem>
          )}

          {isLogedIn && (
            <MenuItem>
              <ExitButton type="button" onClick={onLogoutClick}>
                Cerrar Sesión
              </ExitButton>
            </MenuItem>
          )}

          <MenuItem>
            <Link href="/help">
              <Anchor css={xw`text-secondary-1`}>Ayuda</Anchor>
            </Link>
          </MenuItem>
        </MenuList>
      )}
    </MenuContent>
  );
};

export default MobileMenu;
