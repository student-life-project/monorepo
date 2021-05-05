/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FC } from 'react';

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

const Register: FC = () => {
  return (
    <CenteredBody css={xw`px-4 sm:px-0`}>
      <Title css={xw`text-center mt-0 mb-4`}>Te damos la bienvenida</Title>
      <p>
        <b css={xw`font-black`}>¿Ya te habias registrado?</b>{' '}
        <Link href="/login">
          <Anchor css={xw`font-black`}>Iniciar sesión</Anchor>
        </Link>
      </p>
      <form action="" css={xw`grid gap-4 my-8 md:gap-8 md:grid-rows-5`}>
        <DoubleFormSpace>
          <RadioContainer>
            <Radio name="student" label="Estudiante" checked />
          </RadioContainer>

          <RadioContainer>
            <Radio name="renter" label="Arrendatario" checked={false} />
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
              name="first-name"
              // value={email}
              placeholder="Nombre"
              // onChange={handleInputChange}
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
              name="last-name"
              // value={email}
              placeholder="Apellido"
              // onChange={handleInputChange}
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
            name="email"
            // value={email}
            placeholder="Correo"
            // onChange={handleInputChange}
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
            name="password"
            // value={email}
            placeholder="Contraseña"
            // onChange={handleInputChange}
          />
        </div>
        <div>
          <Label id="label-password-confirmed" htmlFor="password-confirmed">
            Confirmar contraseña
          </Label>
          <Input
            required
            id="password-confirmed"
            type="password"
            name="password-confirmed"
            // value={email}
            placeholder="Contraseña"
            // onChange={handleInputChange}
          />
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
