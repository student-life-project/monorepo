/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import NextLink, { LinkProps } from 'next/link';
import { memo } from 'react';

import { Lg01 } from '@/icons';

const FooterStyle = styled.footer`
  ${xw`
    container w-screen
    border-t border-gray-900
    font-montserrat
  `}
`;

const Content = styled.div`
  ${xw`
    container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col
    border-b border-gray-900
  `}
`;

const Info1 = styled.div`
  ${xw`
    w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left
  `}
`;

const Link: React.FC<LinkProps> = ({ href, children, ...linkSettings }) => {
  return (
    <NextLink href={href} {...linkSettings}>
      <a css={xw`text-gray-400 hover:text-gray-300 hover:cursor-pointer`}>
        {children}
      </a>
    </NextLink>
  );
};

const TitleSection = styled.h2`
  ${xw`
    font-medium text-gray-400 tracking-widest text-sm mb-3
  `}
`;

const Nav = styled.nav`
  ${xw`
    list-none mb-10
  `}
`;

const Footer = () => (
  <FooterStyle>
    <Content>
      <Info1>
        <Link href="/">
          <a
            css={xw`flex font-medium items-center md:justify-start justify-center text-white`}
          >
            <Lg01 />
          </a>
        </Link>
      </Info1>

      <div
        css={xw`flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center`}
      >
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <TitleSection>Student Life</TitleSection>
          <Nav>
            <li>
              <Link href="/register">Registrarse</Link>
            </li>
            <li>
              <Link href="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link href="/rentals">Alojamientos</Link>
            </li>
          </Nav>
        </div>
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <TitleSection>Ayuda</TitleSection>
          <Nav>
            <li>
              <Link href="/terms-and-conditions">Terminos y Condiciones</Link>
            </li>
            <li>
              <Link href="/faqs">Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link href="/privacy">Aviso de Privacidad</Link>
            </li>
          </Nav>
        </div>
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <TitleSection>Share your best!</TitleSection>
          <Nav>
            <li>
              <Link href="/comunity">Comunidad :D</Link>
            </li>
          </Nav>
        </div>
      </div>
    </Content>

    <div
      css={xw`container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row`}
    >
      <p css={xw`text-gray-400 text-sm text-center sm:text-left`}>
        &#169; Student Life. {new Date().getFullYear()}. Share your best!
      </p>
    </div>
  </FooterStyle>
);

export default memo(Footer);
