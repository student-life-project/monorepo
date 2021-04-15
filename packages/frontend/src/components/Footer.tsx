import { memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

import { Lg01 } from '@/icons';

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
        <a
          css={xw`flex font-medium items-center md:justify-start justify-center text-white`}
        >
          <Lg01 css={xw``} />
        </a>
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
              <a css={xw`text-gray-400 hover:text-white`}>Registrarse</a>
            </li>
            <li>
              <a css={xw`text-gray-400 hover:text-white`}>Iniciar Sesión</a>
            </li>
            <li>
              <a css={xw`text-gray-400 hover:text-white`}>Alojamientos</a>
            </li>
          </nav>
        </div>
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <h2 css={xw` font-medium text-white tracking-widest text-sm mb-3`}>
            Ayuda
          </h2>
          <nav css={xw`list-none mb-10`}>
            <li>
              <a css={xw`text-gray-400 hover:text-white`}>
                Terminos y Condiciones
              </a>
            </li>
            <li>
              <a css={xw`text-gray-400 hover:text-white`}>
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a css={xw`text-gray-400 hover:text-white`}>
                Aviso de Privacidad
              </a>
            </li>
          </nav>
        </div>
        <div css={xw`lg:w-1/4 md:w-1/2 w-full px-4`}>
          <h2 css={xw` font-medium text-white tracking-widest text-sm mb-3`}>
            Share your best!
          </h2>
          <nav css={xw`list-none mb-10`}>
            <li>
              <a css={xw`text-gray-400 hover:text-white`}>Comunidad :D</a>
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
          © Student Life. 2021. Share your best!
        </p>
      </div>
    </div>
  </FooterStyle>
);

export default memo(Footer);
