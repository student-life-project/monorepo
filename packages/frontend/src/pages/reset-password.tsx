/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  useDispatch,
  // useSelector
} from 'react-redux';

import Button from '@/components/Button';
import CenteredBody from '@/components/common/CenteredBody';
import Title from '@/components/common/Title';
import Input from '@/components/Input';
import Label from '@/components/Label';
// import { api } from '@/services/api';
import { login } from '@/store/actions/user';
import { redirectLoggedToHome } from '@/utils/redirectLoggedtoHome';
import { redirectToPage } from '@/utils/redirectToPage';

interface IResetPassword {
  email: string;
  password: string;
  confirmedPassword: string;
}

interface IResetPasswordPage {
  email: string;
}

const ErrorMessage = styled.p`
  ${xw`
    text-xs
    text-red-300
    mt-2
  `}
`;

const ResetPassword: NextPage<IResetPasswordPage> = ({ email }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const passwordRef = useRef({});
  passwordRef.current = watch('password', '');

  const onSubmit: SubmitHandler<IResetPassword> = async (data) => {
    try {
      /*
      api.post('/reset-passwrd', {
        email,
        password: data.password,
      });
      */
      await dispatch(
        login({ email, password: data.password, rememberUser: true }),
      );
      router.push('/');
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <CenteredBody>
      <Title css={xw`text-center mt-0 mb-4 break-words`}>
        RestablecerContraseña
      </Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={xw`w-full my-4 px-4 grid gap-4 grid-rows-4 lg:w-1/2`}
      >
        <div>
          <Label>Correo</Label>
          <Input
            id="email"
            type="text"
            required
            disabled
            placeholder="Correo"
            value={email}
            {...register('email', { required: false })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <Label>Contraseña</Label>
          <Input
            id="password"
            type="password"
            required
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
          <Label>Confirmar contraseña</Label>
          <Input
            id="confirmedPassword"
            type="password"
            required
            placeholder="Contraseña"
            {...register('confirmedPassword', {
              required: true,
              validate: (value: string) =>
                value === passwordRef.current || 'La contraseña no coincide',
            })}
          />
          {errors.confirmedPassword && (
            <ErrorMessage>{errors.confirmedPassword.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Button type="submit" FPrimary css={xw`w-full`}>
            <span css={xw`mr-2`}>Restablecer contraseña</span>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </div>
      </form>
    </CenteredBody>
  );
};

ResetPassword.getInitialProps = async ({ req, res, query }) => {
  const { token, email } = query;

  if (!token || !email) {
    redirectToPage(req, res, '/');
  }

  redirectLoggedToHome(req, res);

  return { email: decodeURIComponent(email as string) };
};

export default ResetPassword;
