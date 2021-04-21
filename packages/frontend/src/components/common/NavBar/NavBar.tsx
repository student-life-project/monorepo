/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FC } from 'react';

import Button from '@/components/Button';
import SearchBar from '@/components/common/SearchBar/SearchBarContainer';
import { Im06, Is01 } from '@/icons';

import { INavBar } from '@/types';

import MobileMenu from './MobileMenu';

const Anchor = styled.a`
  ${xw`
    text-blue-600
    hover:text-blue-800
    cursor-pointer
    text-center
  `}
`;

const NavBar: FC<INavBar> = ({
  allowPublish,
  allowLogin,
  allowRegister,
  allowRequest,
  isLogedIn,
}) => {
  return (
    <nav
      css={xw`z-20 shadow-md fixed bg-white grid grid-cols-5 w-full h-16 border-b border-gray-900 font-montserrat md:gap-8 lg:gap-4 xl:gap-0`}
    >
      <Link href="/">
        <a
          css={xw`flex w-full col-span-1 justify-center items-center xl:justify-start xl:ml-4`}
        >
          <Im06 css={xw`hidden h-12 md:h-14 md:block`} />
          <Is01 css={xw`h-12 md:hidden`} />
        </a>
      </Link>
      <div css={xw`w-full flex items-center col-span-3 md:col-span-2`}>
        <SearchBar />
      </div>
      <div
        css={xw`hidden justify-end items-center w-full col-span-1 md:col-span-2 md:flex`}
      >
        {allowPublish && (
          <Link href="/rental-place/create">
            <Button BPrimary css={xw`h-12`}>
              Crear publicación
            </Button>
          </Link>
        )}
        {allowRequest && (
          <Anchor href="mailto:erick@gmail.com?Subject=Necesito%20asistencia%20con%20una%20situación">
            Enviar una solicitud
          </Anchor>
        )}
        {allowLogin && (
          <Link href="/login">
            <Anchor css={xw`md:mx-4 lg:mx-2 xl:mx-4`}>Iniciar Sesión</Anchor>
          </Link>
        )}
        {allowRegister && (
          <Link href="/register">
            <Anchor css={xw`mr-4`}>Registrarse</Anchor>
          </Link>
        )}
      </div>
      <div
        css={xw`flex justify-end items-center w-full col-span-1 pr-3 md:hidden`}
      >
        <MobileMenu
          allowLogin={allowLogin}
          allowPublish={allowPublish}
          allowRegister={allowRegister}
          allowRequest={allowRequest}
          isLogedIn={isLogedIn}
        />
      </div>
    </nav>
  );
};

export default NavBar;
