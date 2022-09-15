// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import NextLink, { LinkProps } from 'next/link';
import { FC } from 'react';

import { Lg01 } from '@/icons';

const FooterStyle = styled.footer`
  ${xw`
    mx-auto
    w-screen
    border-t
    container
    font-montserrat
    border-secondary-2
  `}
`;

const Content = styled.div`
  ${xw`
    flex 
    px-5 
    py-24 
    mx-auto 
    border-b
    flex-col
    container 
    flex-wrap 
    md:flex-row 
    lg:items-start 
    md:flex-nowrap 
    md:items-center 
    border-secondary-2
  `}
`;

const FooterBottom = styled.div`
  ${xw`
    flex
    px-5
    py-4
    mx-auto
    flex-col
    container
    flex-wrap
    sm:flex-row
  `}
`;

const Logo = styled.div`
  ${xw`
    w-64
    md:mx-0
    mx-auto
    flex-shrink-0
  `}
`;

const ImgLink = styled.a`
  ${xw`
    flex
    items-center
    cursor-pointer
    justify-center
    md:justify-start
  `}
`;

const Info = styled.div`
  ${xw`
    flex
    mt-10
    -mb-10
    md:mt-0
    md:pl-20
    flex-grow
    flex-wrap
    text-center
    md:text-left
  `}
`;

const Column = styled.div`
  ${xw`
    px-4
    w-full
    lg:w-1/4
    md:w-1/2
  `}
`;

const TitleSection = styled.h2`
  ${xw`
    mb-3
    font-bold
    text-secondary-1
  `}
`;

const Nav = styled.nav`
  ${xw`
    mb-10
    list-none 
  `}
`;

const TextLink = styled.a`
  ${xw`
    text-sm
    text-gray-400 
    cursor-pointer
    hover:font-bold
    hover:text-primary
  `}
`;

const Text = styled.p`
  ${xw`
    block
    text-sm
    text-center
    sm:text-left
    text-gray-400
  `}
`;

const Link: FC<LinkProps & { children: JSX.Element | string }> = ({
  href,
  children,
  ...linkSettings
}) => (
  <NextLink href={href} {...linkSettings}>
    <TextLink>{children}</TextLink>
  </NextLink>
);

const Footer: FC = () => (
  <FooterStyle>
    <Content>
      <Logo>
        <NextLink href="/">
          <ImgLink>
            <Lg01 />
          </ImgLink>
        </NextLink>
      </Logo>

      <Info>
        <Column>
          <TitleSection>Student Life</TitleSection>
          <Nav>
            <li>
              <Link href="/api/auth/login">Iniciar Sesión | Registrarse</Link>
            </li>
            <li>
              <Link href="/rentals">Alojamientos</Link>
            </li>
          </Nav>
        </Column>
        <Column>
          <TitleSection>Ayuda</TitleSection>
          <Nav>
            <li>
              <Link href="/help/terms-and-conditions">
                Terminos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/help/privacy">Aviso de Privacidad</Link>
            </li>
            <li>
              <Link href="/help">Centro de ayuda</Link>
            </li>
          </Nav>
        </Column>
        <Column>
          <TitleSection>Share your best!</TitleSection>
          <Nav>
            <li>
              <Link href="/community">Comunidad :D</Link>
            </li>
          </Nav>
        </Column>
        <Column>
          <Nav>
            <blockquote>
              <Text as="q">
                Crear una comunidad diseñada por estudiantes para estudiantes
              </Text>
              <Text as="cite">-Equipo de Student Life</Text>
            </blockquote>
          </Nav>
        </Column>
      </Info>
    </Content>

    <FooterBottom>
      <Text>
        &#169; Student Life. {new Date().getFullYear()}. Share your best!
      </Text>
    </FooterBottom>
  </FooterStyle>
);

export default Footer;
