// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { IUser } from '@student_life/common';
import Link from 'next/link';
import { FC } from 'react';

import Button from '@/components/common/Button';
// import SearchBar from '@/components/common/SearchBar/SearchBarContainer';
import { Im06, Is01 } from '@/icons';
import { INavBar } from '@/types';

import Anchor from '../Anchor';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';

const Nav = styled.a`
  ${xw`
    grid
    z-20
    h-16
    fixed
    w-full
    bg-white
    md:gap-8
    lg:gap-4
    xl:gap-0
    border-b
    grid-cols-5
    font-montserrat
    border-secondary-2
  `}
`;

const ImgContent = styled.div`
  ${xw`
    flex
    w-full
    xl:ml-4
    col-span-1
    items-center
    cursor-pointer
    justify-center
    xl:justify-start
  `}
`;

const SearchContent = styled.div`
  ${xw`
    flex
    w-full
    col-span-3
    items-center
    md:col-span-2
  `}
`;

const LinkContent = styled.div`
  ${xw`
    hidden 
    w-full 
    md:flex
    col-span-1 
    justify-end 
    items-center 
    md:col-span-2
  `}
`;

const ExitContent = styled.div`
  ${xw`
    mx-4
    hidden
    md:block
  `}
`;

const MenuContent = styled.div`
  ${xw`
    flex
    pr-3
    w-full
    md:hidden
    col-span-1
    justify-end
    items-center
  `}
`;

const NavBar: FC<INavBar> = ({
  user,
  isLogedIn,
  allowLoginRegister,
  allowRental,
  allowRequest,
  onLogoutClick,
}) => (
  <Nav>
    <Link href="/">
      <ImgContent>
        <Is01 css={xw`h-12 md:hidden`} />
        <Im06 css={xw`hidden h-12 md:h-14 md:block`} />
      </ImgContent>
    </Link>

    {/* ! SEARCH WILL NOT BE DEVELOPED */}
    <SearchContent>{/* <SearchBar /> */}</SearchContent>

    <LinkContent>
      {allowRental && (
        <Link href="/rentals">
          <Button BPrimary css={xw`h-11`}>
            Ver alojamientos
          </Button>
        </Link>
      )}

      {allowRequest && (
        <Anchor
          css={xw`mx-4`}
          href="mailto:info@studentlife.com.mx?Subject=Necesito asistencia con una situación"
        >
          Enviar una solicitud
        </Anchor>
      )}

      {!isLogedIn ? (
        <>
          {allowLoginRegister && (
            <Anchor href="/api/auth/login" css={xw`md:mx-2 lg:mx-2 xl:mx-4`}>
              Iniciar Sesión | Registrarse
            </Anchor>
          )}
        </>
      ) : (
        <ExitContent>
          <UserMenu
            user={user || ({} as IUser)}
            onLogoutClick={onLogoutClick}
          />
        </ExitContent>
      )}
    </LinkContent>

    <MenuContent>
      <MobileMenu
        user={user}
        isLogedIn={isLogedIn}
        allowLoginRegister={allowLoginRegister}
        allowRental={allowRental}
        allowRequest={allowRequest}
        onLogoutClick={onLogoutClick}
      />
    </MenuContent>
  </Nav>
);

export default NavBar;
