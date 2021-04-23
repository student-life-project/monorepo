/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isServer } from '@student_life/common';
import { NextPage, NextPageContext } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Label from '@/components/Label';
import type { TStore } from '@/store';
import { login } from '@/store/actions/user';
import { parseCookies } from '@/utils/cookie';

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

interface ILoginValues {
  email: string;
  password: string;
  rememberme: boolean;
}

const Login: NextPage = () => {
  const [rememberUser, setRememberUser] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();

  const handleRememberMe = () => {
    setRememberUser((prevRememberUser) => !prevRememberUser);
  };

  const onSubmit: SubmitHandler<ILoginValues> = async (data) => {
    if (!errors.email && !errors.password) {
      await dispatch(
        login({
          email: data.email,
          password: data.password,
          rememberUser,
        }),
      );

      router.push('/');
    }
  };

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
      <form
        css={xw`w-full px-4 my-10 lg:w-1/2`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputSection>
          <Label>Correo</Label>
          <Input
            type="email"
            placeholder="Correo"
            {...register('email', { required: true })}
          />
        </InputSection>
        <InputSection>
          <Label>Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            {...register('password', { required: true })}
          />
        </InputSection>
        <InputSection
          css={xw`flex flex-col justify-center sm:flex-row sm:justify-between`}
        >
          <div>
            <Checkbox
              checked={rememberUser}
              onClick={handleRememberMe}
              label="Recordarme"
              css={xw`text-xs sm:text-sm`}
              name="remembermo"
            />
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

Login.getInitialProps = async ({
  store,
  req,
  res,
}: NextPageContext & { store: TStore }) => {
  if (store) {
    store.getState();
  }

  const cookieData = parseCookies(req);
  // console.log({ cookieData });

  if (cookieData.token) {
    if (!isServer()) {
      window.location.href = '/';
      return {};
    }

    res?.writeHead(301, {
      Location: '/',
    });

    res?.end();

    return {};
  }

  return {};
};

export default Login;
