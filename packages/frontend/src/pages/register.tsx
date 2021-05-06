/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EUserType } from '@student_life/common';
import Link from 'next/link';
import { ChangeEvent, FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Anchor from '@/components/common/Anchor';
import CenteredBody from '@/components/common/CenteredBody';
import Title from '@/components/common/Title';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';

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

interface IRegisterData {
  firstName: string;
}

const Register: FC = () => {
  const [userType, setUserType] = useState(EUserType.STUDENT);
  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm();

  const onSubmit: SubmitHandler<IRegisterData> = (_data, _ev) => {
    Object.values(_data);
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
              required: true,
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
          />
          {errors.password && <p>{errors.password}</p>}
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
                value === touchedFields.password ||
                'The passwords do not match',
            })}
          />

          {errors.passwordConfirmed && <p>{errors.passwordConfirmed}</p>}
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

export default Register;
