// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  faBullhorn,
  faComment,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';
import { FC } from 'react';

import Button from '@/components/common/Button';
import { CalculateAge } from '@/constants';

type TCardUser = {
  user: any;
  openUserReport: () => void;
};

const ButtonLink = styled.button`
  ${xw`
    flex
    text-left
    text-primary
    cursor-pointer
    hover:underline
  `}
`;

const CardUser: FC<TCardUser> = ({ user, openUserReport }) => (
  <div css={xw`w-full mt-10 sm:mt-0 sm:w-4/12`}>
    <div
      css={xw`flex flex-col p-5 items-center mx-0 sm:mx-10 border border-secondary-2 rounded-md static sm:sticky top-20`}
    >
      <img
        alt={user.firstName}
        src={user.userImage}
        css={xw`w-32 h-32 rounded-full bg-gray-400`}
      />

      <h2 css={xw`py-3 text-xl text-center font-bold`}>
        {user.firstName} {user.lastName}
      </h2>
      <p css={xw`text-center font-semibold`}>
        {CalculateAge(user.birthDate)} años
      </p>

      <h2 css={xw`py-3 text-lg text-center font-bold`}>
        Acerca de {user.firstName}
      </h2>
      <p css={xw`text-center mb-5`}>{user.aboutMe}</p>

      <div css={xw`flex`}>
        <FontAwesomeIcon icon={faPhoneAlt} height="1.2rem" />
        <p css={xw`ml-2 mb-5`}>{user.phoneNumber}</p>
      </div>

      <NextLink href="/profile/messages">
        <Button type="button" FPrimary>
          <FontAwesomeIcon icon={faComment} height="1.2rem" />
          <span css={xw`ml-2`}>Enviar mensaje</span>
        </Button>
      </NextLink>

      <ButtonLink type="button" css={xw`mt-5`} onClick={openUserReport}>
        <FontAwesomeIcon icon={faBullhorn} height="1.2rem" />
        <p css={xw`ml-2`}>Reportar usuario</p>
      </ButtonLink>
    </div>
  </div>
);

export default CardUser;
