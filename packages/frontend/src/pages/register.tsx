/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EUserType, isServer } from '@student_life/common';
import Link from 'next/link';
import { ChangeEvent, useState, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Anchor from '@/components/common/Anchor';
import CenteredBody from '@/components/common/CenteredBody';
import Title from '@/components/common/Title';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/actions/user';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';
import { parseCookies } from '@/utils/cookie';

const DoubleFormSpace = styled.div`
  ${xw`
    grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 md:gap-8
  `}
`;

const RadioContainer = styled.div`
  ${xw`
    rounded
    border
    border-gray-200
    px-4
    h-12
  `}
`;

const ErrorMessage = styled.p`
  ${xw`
    text-xs
    text-red-300
    mt-2
  `}
`;

interface IRegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmedPassword: string;
}

const Register: NextPage = () => {
  const dispath = useDispatch();
  const router = useRouter();
  const [userType, setUserType] = useState(EUserType.STUDENT);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const passwordRef = useRef({});
  passwordRef.current = watch('password', '');

  const onSubmit: SubmitHandler<IRegisterData> = async (data) => {
    await dispath(
      registerUser({
        ...data,
        userType,
      }),
    );
    router.push('/');
  };

  const handleRadioChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const intValue = parseInt(ev.target.value, 10);

    setUserType(intValue);
  };

  return (
    <CenteredBody css={xw`px-4 sm:px-0`}>
      <Title css={xw`text-center mt-0 mb-4`}>Te damos la bienvenida</Title>
      <p>
        <b css={xw`font-black`}>¿Ya te habias registrado?</b>{' '}
        <Link href="/login">
          <Anchor css={xw`font-black`}>Iniciar sesión</Anchor>
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={xw`grid gap-4 my-8 md:gap-8 md:grid-rows-6`}
      >
        <DoubleFormSpace>
          <RadioContainer>
            <Radio
              onChange={handleRadioChange}
              name="student"
              label="Estudiante"
              value={EUserType.STUDENT}
              checked={userType === EUserType.STUDENT}
            />
          </RadioContainer>

          <RadioContainer>
            <Radio
              onChange={handleRadioChange}
              name="renter"
              label="Arrendatario"
              value={EUserType.OWNER}
              checked={userType === EUserType.OWNER}
            />
          </RadioContainer>
        </DoubleFormSpace>
        <DoubleFormSpace>
          <div>
            <Label id="label-first-name" htmlFor="first-name">
              Nombre
            </Label>
            <Input
              required
              id="first-name"
              type="text"
              placeholder="Nombre"
              {...register('firstName', { required: true })}
            />
          </div>
          <div>
            <Label id="label-last-name" htmlFor="last-name">
              Apellido
            </Label>
            <Input
              required
              id="last-name"
              type="text"
              placeholder="Apellido"
              {...register('lastName', { required: true })}
            />
          </div>
        </DoubleFormSpace>
        <div>
          <Label id="label-email" htmlFor="email">
            Correo
          </Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Correo"
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <Label id="label-password" htmlFor="password">
            Contraseña
          </Label>
          <Input
            required
            id="password"
            type="paasword"
            placeholder="Contraseña"
            {...register('password', {
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener almenos 8 caracteres',
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Label id="label-password-confirmed" htmlFor="password-confirmed">
            Confirmar contraseña
          </Label>
          <Input
            required
            id="password-confirmed"
            type="password"
            placeholder="Contraseña"
            {...register('passwordConfirmed', {
              required: true,
              validate: (value: string) =>
                value === passwordRef.current || 'La contraseña no coincide',
            })}
          />

          {errors.passwordConfirmed && (
            <ErrorMessage>{errors.passwordConfirmed.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Button type="submit" FPrimary css={xw`w-full`}>
            <span css={xw`mr-2`}>Iniciar Sesión</span>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </div>
      </form>
      <div css={xw`break-words`}>
        Al registrarte aceptas nuestros{' '}
        <Link href="terms">
          <Anchor>Términos de uso</Anchor>
        </Link>{' '}
        y la{' '}
        <Link href="privacy">
          <Anchor>Política de privacidad</Anchor>
        </Link>
        .
      </div>
    </CenteredBody>
  );
};

Register.getInitialProps = async ({ req, res }: NextPageContext) => {
  const cookieData = parseCookies(req);

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

export default Register;
