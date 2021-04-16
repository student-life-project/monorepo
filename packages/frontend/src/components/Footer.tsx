/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import Link from 'next/link';
import { memo } from 'react';

import { Lg03 } from '@/icons';

const FooterStyle = styled.footer`
  ${xw`
  container w-screen
  text-gray-400 bg-gray-900 
  `}
`;

const Content = styled.div`
  ${xw`
  container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col
  `}
`;

const Info1 = styled.div`
  ${xw`
  w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left
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
            <Lg03 css={xw``} />
          </a>
        </Link>
      </Info1>

      <div
        css={xw`flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center`}
      >
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <h2 css={xw`font-medium text-white tracking-widest text-sm mb-3`}>
            Student Life
          </h2>
          <nav css={xw`list-none mb-10`}>
            <li>
              <Link href="/register">
                <a css={xw`text-gray-400 hover:text-white`}>Registrarse</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a css={xw`text-gray-400 hover:text-white`}>Iniciar Sesión</a>
              </Link>
            </li>
            <li>
              <Link href="/rentals">
                <a css={xw`text-gray-400 hover:text-white`}>Alojamientos</a>
              </Link>
            </li>
          </nav>
        </div>
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <h2 css={xw` font-medium text-white tracking-widest text-sm mb-3`}>
            Ayuda
          </h2>
          <nav css={xw`list-none mb-10`}>
            <li>
              <Link href="/terms-and-conditions">
                <a css={xw`text-gray-400 hover:text-white`}>
                  Terminos y Condiciones
                </a>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <a css={xw`text-gray-400 hover:text-white`}>
                  Preguntas Frecuentes
                </a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a css={xw`text-gray-400 hover:text-white`}>
                  Aviso de Privacidad
                </a>
              </Link>
            </li>
          </nav>
        </div>
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <h2 css={xw` font-medium text-white tracking-widest text-sm mb-3`}>
            Share your best!
          </h2>
          <nav css={xw`list-none mb-10`}>
            <li>
              <Link href="/comunity">
                <a css={xw`text-gray-400 hover:text-white`}>Comunidad :D</a>
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </Content>

    <div css={xw`bg-gray-800 bg-opacity-75`}>
      <div
        css={xw`container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row`}
      >
        <p css={xw`text-gray-400 text-sm text-center sm:text-left`}>
          © Student Life. {new Date().getFullYear()}. Share your best!
        </p>
      </div>
    </div>
  </FooterStyle>
);

export default memo(Footer);
