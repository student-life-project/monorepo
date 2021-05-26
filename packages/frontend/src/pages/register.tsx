/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EUserType } from '@student_life/common';
import Link from 'next/link';
import { ChangeEvent, useState, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Anchor from '@/components/common/Anchor';
import CenteredBody from '@/components/common/CenteredBody';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/actions/user';
import { useRouter } from 'next/router';
import { NextPage, NextPageContext } from 'next';
import { redirectLoggedToHome } from '@/utils/redirectLoggedtoHome';

interface IRegisterData {
  email: string;
  lastName: string;
  password: string;
  firstName: string;
  confirmedPassword: string;
}

const Form = styled.form`
  ${xw`
    px-4
    w-full
    lg:w-6/12
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
    mb-4
    text-lg
    font-bold
    text-center
  `}
`;

const DoubleFormSpace = styled.div`
  ${xw`
    grid
    gap-x-4
    grid-rows-2
    md:grid-rows-1
    md:grid-cols-2
  `}
`;

const RadioContainer = styled.div`
  ${xw`
    h-12
    px-4
    mb-4
    border
    rounded
    border-gray-200
  `}
`;

const InputContainer = styled.div`
  ${xw`
    mb-4
  `}
`;

const TextButton = styled.span`
  ${xw`
    mr-2
  `}
`;

const TextTerms = styled.p`
  ${xw`
    text-sm
    break-words
    text-justify
    sm:text-base
  `}
`;

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
    <CenteredBody css={xw`h-auto lg:h-screen py-10`}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Te damos la bienvenida</Title>
        <Text>
          ¿Ya te habias registrado?{' '}
          <Link href="/login">
            <Anchor>Iniciar sesión</Anchor>
          </Link>
        </Text>

        <DoubleFormSpace>
          <RadioContainer>
            <Radio
              name="student"
              label="Estudiante"
              value={EUserType.STUDENT}
              onChange={handleRadioChange}
              checked={userType === EUserType.STUDENT}
            />
          </RadioContainer>
          <RadioContainer>
            <Radio
              name="renter"
              label="Arrendatario"
              value={EUserType.OWNER}
              onChange={handleRadioChange}
              checked={userType === EUserType.OWNER}
            />
          </RadioContainer>
        </DoubleFormSpace>

        <DoubleFormSpace>
          <InputContainer>
            <Label id="label-first-name" htmlFor="first-name">
              Nombre
            </Label>
            <Input
              required
              type="text"
              id="first-name"
              placeholder="Nombre"
              {...register('firstName', { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <Label id="label-last-name" htmlFor="last-name">
              Apellido
            </Label>
            <Input
              required
              type="text"
              id="last-name"
              placeholder="Apellido"
              {...register('lastName', { required: true })}
            />
          </InputContainer>
        </DoubleFormSpace>

        <InputContainer>
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
        </InputContainer>

        <InputContainer>
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
            error={errors.password}
            messageError={errors.password?.message}
          />
        </InputContainer>

        <InputContainer>
          <Label id="label-password-confirmed" htmlFor="password-confirmed">
            Confirmar contraseña
          </Label>
          <Input
            required
            type="password"
            id="password-confirmed"
            placeholder="Contraseña"
            {...register('passwordConfirmed', {
              required: true,
              validate: (value: string) =>
                value === passwordRef.current || 'La contraseña no coincide',
            })}
            error={errors.passwordConfirmed}
            messageError={errors.passwordConfirmed?.message}
          />
        </InputContainer>

        <InputContainer>
          <Button type="submit" FPrimary css={xw`w-full`}>
            <TextButton css={xw`mr-2`}>Regístrate</TextButton>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </InputContainer>

        <TextTerms>
          Al registrarte aceptas nuestros{' '}
          <Link href="/help/terms-and-conditions">
            <Anchor>Términos y condiciones</Anchor>
          </Link>{' '}
          y la{' '}
          <Link href="/help/privacy">
            <Anchor>Política de privacidad</Anchor>
          </Link>
          .
        </TextTerms>
      </Form>
    </CenteredBody>
  );
};

Register.getInitialProps = async ({ req, res }: NextPageContext) => {
  redirectLoggedToHome(req, res);

  return {};
};

export default Register;
