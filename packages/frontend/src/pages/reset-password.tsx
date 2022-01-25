/* eslint-disable simple-import-sort/imports */
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
import { ErrorMessageInput, NameInput } from '@/constants';
import { login } from '@/store/actions/user';
import { redirectLoggedToHome } from '@/utils/redirectLoggedtoHome';
import { redirectToPage } from '@/utils/redirectToPage';
import { rgxPassword } from '@/utils/validations';

interface IResetPassword {
  email: string;
  password: string;
  confirmedPassword: string;
}

interface IResetPasswordPage {
  email: string;
}

const Form = styled.form`
  ${xw`
    px-4
    w-full
    lg:w-6/12
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

const ResetPassword: NextPage<IResetPasswordPage> = ({ email }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title css={xw`text-center mt-0 mb-4`}>Restablecer Contraseña</Title>

        <InputContainer>
          <Label>{NameInput.email}</Label>
          <Input
            readOnly
            id="email"
            type="email"
            defaultValue={email}
            {...register('email', { required: false })}
          />
        </InputContainer>

        <InputContainer>
          <Label>{NameInput.password}</Label>
          <Input
            required
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
          <Label>Confirmar contraseña</Label>
          <Input
            required
            type="password"
            id="confirmedPassword"
            placeholder="Confirmación contraseña"
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
            <TextButton>Restablecer contraseña</TextButton>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </InputContainer>
      </Form>
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
