/* eslint-disable simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EUserType } from '@student_life/common';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import Button from '@/components/Button';
import Anchor from '@/components/common/Anchor';
import CenteredBody from '@/components/common/CenteredBody';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import { ErrorMessageInput, NameInput } from '@/constants';
import { registerUser } from '@/store/actions/user';
import { redirectLoggedToHome } from '@/utils/redirectLoggedtoHome';
import { rgxEmail, rgxPassword } from '@/utils/validations';

interface IRegisterData {
  userType: EUserType;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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

  const {
    handleSubmit,
    register,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const passwordRef = useRef({});
  passwordRef.current = watch('password', '');

  useEffect(() => {
    reset({ userType: EUserType.STUDENT });
  }, [reset]);

  const onSubmit: SubmitHandler<IRegisterData> = async (data) => {
    await dispath(registerUser({ ...data }));

    router.push('/');
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
          <Controller
            name="userType"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => {
              const role = parseInt(value, 10);

              return (
                <>
                  <RadioContainer data-tip data-for="student">
                    <>
                      <Radio
                        name="student"
                        label="Estudiante"
                        value={EUserType.STUDENT}
                        onChange={onChange}
                        checked={role === EUserType.STUDENT}
                      />

                      <ReactTooltip id="student" type="info">
                        <span>Buscar alojamientos</span>
                      </ReactTooltip>
                    </>
                  </RadioContainer>

                  <RadioContainer data-tip data-for="renter">
                    <>
                      <Radio
                        name="renter"
                        label="Arrendatario"
                        value={EUserType.OWNER}
                        onChange={onChange}
                        checked={role === EUserType.OWNER}
                      />

                      <ReactTooltip id="renter" type="info">
                        <span>Buscar inquilino o buscar un rommie</span>
                      </ReactTooltip>
                    </>
                  </RadioContainer>
                </>
              );
            }}
          />
        </DoubleFormSpace>

        <DoubleFormSpace>
          <InputContainer>
            <Label id="label-first-name" htmlFor="first-name">
              {NameInput.firstName}
            </Label>
            <Input
              id="first-name"
              type="text"
              placeholder="Ingresa tu nombre"
              {...register('firstName', {
                required: ErrorMessageInput.inputRequire(NameInput.firstName),
                maxLength: {
                  value: 50,
                  message: ErrorMessageInput.max50,
                },
              })}
              error={errors.firstName}
              messageError={errors.firstName?.message}
            />
          </InputContainer>

          <InputContainer>
            <Label id="label-last-name" htmlFor="last-name">
              {NameInput.lastName}
            </Label>
            <Input
              id="last-name"
              type="text"
              placeholder="Ingresa tu apellido"
              {...register('lastName', {
                required: ErrorMessageInput.inputRequire(NameInput.lastName),
                maxLength: {
                  value: 50,
                  message: ErrorMessageInput.max50,
                },
              })}
              error={errors.lastName}
              messageError={errors.lastName?.message}
            />
          </InputContainer>
        </DoubleFormSpace>

        <InputContainer>
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
        </InputContainer>

        <InputContainer>
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
        </InputContainer>

        <InputContainer>
          <Label id="label-confirmed-password" htmlFor="confirmed-password">
            {NameInput.confirmPassword}
          </Label>
          <Input
            id="confirmed-password"
            type="password"
            placeholder="Confirmación de contraseña"
            {...register('confirmedPassword', {
              required: ErrorMessageInput.inputRequire(
                NameInput.confirmPassword,
              ),
              validate: (value: string) =>
                value === passwordRef.current ||
                ErrorMessageInput.passwordDoNotMatch,
            })}
            error={errors.confirmedPassword}
            messageError={errors.confirmedPassword?.message}
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
