/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Triangle } from '@/icons';
import { INavBar } from '@/types';

const MenuItem = styled.li`
  ${xw`
    cursor-pointer
    hover:underline
  `}
`;

const MobileMenu: FC<INavBar> = ({
  allowLogin,
  allowPublish,
  allowRegister,
  allowRequest,
}) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const onClick = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div css={xw`flex justify-center text-gray-900 font-montserrat md:hidden`}>
      <button type="button" css={xw`focus:outline-none`} onClick={onClick}>
        <FontAwesomeIcon icon={faBars} height="2.5rem" />
      </button>

      {displayMenu && (
        <ul
          css={xw`absolute mt-14 mr-2 right-0 p-4 bg-white border border-gray-100 shadow-lg`}
        >
          <Triangle
            css={xw`block fill-current text-white w-4 h-4 absolute right-0 top-0 mr-2 -mt-3 z-0`}
          />
          {allowPublish && (
            <MenuItem>
              <Link href="/rental-place/create">
                <a>Crear publicación</a>
              </Link>
            </MenuItem>
          )}
          {allowRequest && (
            <a href="mailto:erick@gmail.com?Subject=Necesito%20asistencia%20con%20una%20situación">
              Enviar una solicitud
            </a>
          )}
          {allowLogin && (
            <MenuItem css={xw`my-2`}>
              <Link href="/login">
                <a>Iniciar Sesión</a>
              </Link>
            </MenuItem>
          )}
          {allowRegister && (
            <MenuItem>
              <Link href="/register">
                <a>Registrarse</a>
              </Link>
            </MenuItem>
          )}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
