/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import NextLink from 'next/link';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Label from '@/components/Label';

const InputSection = styled.div`
  ${xw`
    mb-4
  `}
`;

const Link = styled.a`
  ${xw`
    text-blue-600 cursor-pointer hover:underline hover:text-blue-700
  `}
`;

const Login: NextPage = () => {
  return (
    <section
      css={xw`container h-screen flex flex-col items-center justify-center mx-auto font-montserrat break-words`}
    >
      <h1 css={xw`w-full text-center font-medium text-5xl mb-4 sm:text-6xl`}>
        Ya te extrañamos
      </h1>
      <p css={xw`font-bold text-lg`}>
        Iniciar sesión o bien{' '}
        <NextLink href="/register">
          <Link
            css={xw`text-blue-600 cursor-pointer hover:underline hover:text-blue-700`}
          >
            registrarse
          </Link>
        </NextLink>
      </p>
      <form css={xw`w-full px-4 my-10 lg:w-1/2`} action="">
        <InputSection>
          <Label>Correo</Label>
          <Input type="email" placeholder="Correo" />
        </InputSection>
        <InputSection>
          <Label>Contraseña</Label>
          <Input type="password" placeholder="Contraseña" />
        </InputSection>
        <InputSection
          css={xw`flex flex-col justify-center sm:flex-row sm:justify-between`}
        >
          <div>
            <Checkbox label="Recordarme" css={xw`text-xs sm:text-sm`} checked />
          </div>
          <NextLink href="/password/recover">
            <Link css={xw`mt-3 text-sm`}>¿Olvidaste tu contraseña?</Link>
          </NextLink>
        </InputSection>
        <InputSection>
          <Button type="submit" FPrimary css={xw`w-full`}>
            <span css={xw`mr-2`}>Iniciar Sesión</span>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </InputSection>
      </form>
    </section>
  );
};

export default Login;
