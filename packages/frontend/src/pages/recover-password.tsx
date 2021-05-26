// eslint-disable-next-line simple-import-sort/imports
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import xw from 'xwind';
import styled from '@emotion/styled';

import Button from '@/components/Button';
import Anchor from '@/components/common/Anchor';
import CenteredBody from '@/components/common/CenteredBody';
import Title from '@/components/common/Title';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { redirectLoggedToHome } from '@/utils/redirectLoggedtoHome';
// import { api } from '@/services/api';

interface IRecoverForm {
  email: string;
}

const Text = styled.p`
  ${xw`
    sm:w-1/2
    text-justify
  `}
`;

const Form = styled.form`
  ${xw`
    grid
    my-4
    gap-4
    w-full
    sm:w-1/2
    md:gap-8
    md:grid-rows-2
  `}
`;

const TextButton = styled.span`
  ${xw`
    mr-2
  `}
`;

const RecoverPassword: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<IRecoverForm> = async (data) => {
    // const { data: token } = await api.post('/recover', { email: data.email });
    const token = 'asdasdbhjcdbchebqwdfyuqweg873643g2re3g21yoxdh87dgdxbi2';
    router.push(
      `/reset-password?token=${token}&email=${encodeURIComponent(data.email)}`,
    );
  };

  return (
    <CenteredBody css={xw`px-4 sm:px-0`}>
      <Title css={xw`text-center mt-0 mb-4 break-words`}>
        ¿Olvidaste tu contraseña?
      </Title>
      <Text>
        Para restaurar tu contraseña, ingresa tu dirección de correo
        electrónico. Es posible que tengas que consultar tu carpeta de spam o
        desbloquear la dirección{' '}
        <Anchor href="mailto:no-reply@studentlife.com.mx">
          no-reply@studentlife.com
        </Anchor>
        .
      </Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Correo</Label>
          <Input
            id="email"
            type="text"
            required
            placeholder="Correo"
            {...register('email', { required: true })}
          />
        </div>

        <div>
          <Button type="submit" FPrimary css={xw`w-full`}>
            <TextButton>Enviar</TextButton>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </div>
      </Form>
    </CenteredBody>
  );
};

RecoverPassword.getInitialProps = async ({ req, res }: NextPageContext) => {
  redirectLoggedToHome(req, res);

  return {};
};

export default RecoverPassword;
