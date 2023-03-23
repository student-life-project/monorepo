import {
  faBullhorn,
  faEnvelope,
  faInfo,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

import { TElementId } from '@/types';
import { calculateAge } from '@/utils/managerDate';

import Anchor from '../common/Anchor';
import Button from '../common/Button';
import ButtonLink from '../common/ButtonLink';
import Avatar from './Avatar';

type TCardUser = {
  user: any;
  userId: TElementId;
  isLogedIn: boolean;
  titlePublication: string;
  openUserReport: () => void;
};

const CardUser: FC<TCardUser> = ({
  user,
  userId,
  isLogedIn,
  titlePublication,
  openUserReport,
}) => (
  <div css={xw`w-full mt-10 sm:mt-0 lg:w-4/12`}>
    <div
      css={xw`flex flex-col p-5 items-center mx-0 sm:mx-10 border border-secondary-2 rounded-md static sm:sticky top-20`}
    >
      {isLogedIn ? (
        <>
          <Avatar alt={user.firstName} url={user.userImage} medium />

          <h2 css={xw`py-3 text-xl text-center font-bold`}>
            {user.firstName} {user.lastName}
          </h2>

          <p css={xw`text-center font-semibold`}>
            {calculateAge(user.birthDate)} años
          </p>

          {user.aboutMe && (
            <>
              <h2 css={xw`py-3 text-lg text-center font-bold`}>
                Acerca de {user.firstName}
              </h2>
              <p css={xw`text-center`}>{user.aboutMe}</p>
            </>
          )}

          {user.phoneNumber && (
            <div css={xw`flex mt-5`}>
              <FontAwesomeIcon icon={faPhoneAlt} height="1.2rem" />
              <p css={xw`ml-2`}>{user.phoneNumber}</p>
            </div>
          )}

          {user.id !== userId && (
            <>
              <a
                css={xw`mt-5`}
                href={`mailto:${user.email}?subject=Hola ${user.firstName}, me gustaría información sobre el anuncio: ${titlePublication}`}
              >
                <Button type="button" BPrimary>
                  <FontAwesomeIcon icon={faEnvelope} height="1.2rem" />
                  <span css={xw`ml-2`}>Enviar mensaje</span>
                </Button>
              </a>

              <ButtonLink
                type="button"
                onClick={openUserReport}
                css={xw`mt-5 text-red-500`}
              >
                <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
                <p css={xw`ml-2`}>Reportar usuario</p>
              </ButtonLink>
            </>
          )}
        </>
      ) : (
        <h2 css={xw`w-full text-lg font-bold text-center`}>
          <div css={xw`flex justify-center my-2`}>
            <FontAwesomeIcon icon={faInfo} height="3rem" />
          </div>
          <Anchor href="/api/auth/login">Iniciar Sesión</Anchor> para ver
          información del usuario
        </h2>
      )}
    </div>
  </div>
);

export default CardUser;
