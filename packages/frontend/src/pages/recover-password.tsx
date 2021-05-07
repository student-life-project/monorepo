import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isServer } from '@student_life/common';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import xw from 'xwind';

import Button from '@/components/Button';
import CenteredBody from '@/components/common/CenteredBody';
import Title from '@/components/common/Title';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { parseCookies } from '@/utils/cookie';
// import { api } from '@/services/api';

interface IRecoverForm {
  email: string;
}

const RecoverPassword: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit: SubmitHandler<IRecoverForm> = async (_data) => {
    // const { data: token } = await api.post('/recover', { email: data.email });
    const token = 'asdasdbhjcdbchebqwdfyuqweg873643g2re3g21yoxdh87dgdxbi2';
    router.push(`/reset-password?token=${token}`);
  };

  return (
    <CenteredBody css={xw`px-4 sm:px-0`}>
      <Title css={xw`text-center mt-0 mb-4 break-words`}>
        ¿Olvidaste tu contraseña?
      </Title>
      <p css={xw`text-justify sm:w-1/2`}>
        Para restaurar tu contraseña, ingresa tu dirección de correo
        electrónico. Es posible que tengas que consultar tu carpeta de spam o
        desbloquear la dirección{' '}
        <a
          href="mailto:no-reply@studentlife.com"
          css={xw`text-blue-600 hover:text-blue-800 cursor-pointer text-center hover:underline`}
        >
          no-reply@studentlife.com
        </a>
        .
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={xw`grid gap-4 my-4 w-full sm:w-1/2 md:gap-8 md:grid-rows-2`}
      >
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
            <span css={xw`mr-2`}>Enviar</span>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </div>
      </form>
    </CenteredBody>
  );
};
RecoverPassword.getInitialProps = async ({ req, res }: NextPageContext) => {
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

export default RecoverPassword;
