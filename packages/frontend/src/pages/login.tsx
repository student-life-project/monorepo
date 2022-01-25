/* eslint-disable simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage, NextPageContext } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Anchor from '@/components/common/Anchor';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { ErrorMessageInput, NameInput } from '@/constants';
import { login } from '@/store/actions/user';
import { redirectLoggedToHome } from '@/utils/redirectLoggedtoHome';
import { rgxEmail, rgxPassword } from '@/utils/validations';

interface ILoginValues {
  email: string;
  password: string;
  rememberme: boolean;
}

const Content = styled.section`
  ${xw`
    flex
    mx-auto
    flex-col
    h-screen
    container
    break-words
    items-center
    justify-center
    font-montserrat
    text-secondary-1
  `}
`;

const Title = styled.h1`
  ${xw`
    mb-4
    w-full
    text-4xl
    text-center
    font-medium
    sm:text-5xl
  `}
`;

const Text = styled.p`
  ${xw`
    mb-5
    text-lg
    lg:mb-10
    font-bold
    text-center
  `}
`;

const Form = styled.form`
  ${xw`
    px-4
    w-full
    lg:w-6/12
  `}
`;

const InputSection = styled.div`
  ${xw`
    mb-4
  `}
`;

const TextButton = styled.span`
  ${xw`
    mr-2
  `}
`;

const Login: NextPage = () => {
  const [rememberUser, setRememberUser] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

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
    <Content>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Ya te extrañamos</Title>
        <Text>
          Iniciar sesión o bien{' '}
          <NextLink href="/register">
            <Anchor>registrarse</Anchor>
          </NextLink>
        </Text>

        <InputSection>
          <Label id="label-email" htmlFor="email">
            {NameInput.email}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register('email', {
              setValueAs: (e: string) => e?.toLowerCase(),
              required: ErrorMessageInput.inputRequire(NameInput.email),
              pattern: {
                value: rgxEmail,
                message: ErrorMessageInput.inputValid(NameInput.email),
              },
            })}
            error={errors.email}
            messageError={errors.email?.message}
          />
        </InputSection>

        <InputSection>
          <Label id="label-password" htmlFor="password">
            {NameInput.password}
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Ingresa contraseña"
            {...register('password', {
              required: ErrorMessageInput.inputRequire(NameInput.password),
              pattern: {
                value: rgxPassword,
                message: ErrorMessageInput.inputValid(NameInput.password),
              },
            })}
            error={errors.password}
            messageError={errors.password?.message}
          />
        </InputSection>

        <InputSection
          css={xw`flex flex-col justify-center sm:flex-row sm:justify-between`}
        >
          <div>
            <Checkbox
              name="rememberme"
              label="Recordarme"
              checked={rememberUser}
              onClick={handleRememberMe}
              css={xw`text-xs sm:text-sm`}
            />
          </div>

          <NextLink href="/recover-password">
            <Anchor css={xw`mt-3 text-sm text-left`}>
              ¿Olvidaste tu contraseña?
            </Anchor>
          </NextLink>
        </InputSection>

        <InputSection>
          <Button type="submit" FPrimary css={xw`w-full`}>
            <TextButton>Iniciar Sesión</TextButton>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </InputSection>
      </Form>
    </Content>
  );
};

Login.getInitialProps = async ({ req, res }: NextPageContext) => {
  redirectLoggedToHome(req, res);
  return {};
};

export default Login;
