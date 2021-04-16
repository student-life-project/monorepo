import { NextPage } from 'next';
import xw from 'xwind';

import Button from '@/components/Button';

export interface IError {
  statusCode: number;
  message: string;
}

const Error: NextPage<IError> = ({ statusCode, message }) => {
  return (
    <div
      css={xw`max-w-screen-xl flex items-center justify-center w-full h-screen px-4 lg:px-0 md:mx-auto`}
    >
      <div css={xw`w-full h-3/4 flex flex-col md:flex-row md:h-1/2`}>
        <img
          src="/images/error.jpg"
          alt="error_image"
          css={xw`w-full h-1/2 bg-gray-400 md:w-1/2 md:h-full`}
        />
        <section
          css={xw`w-full h-1/2 flex flex-col justify-around mt-4 text-center md:w-1/2 md:h-full md:mt-0`}
        >
          <h1 css={xw`text-4xl font-bold font-maven`}>Error {statusCode}</h1>
          <p css={xw`font-montserrat break-words`}>{message}</p>
          <Button FPrimary css={xw`w-full self-center lg:w-1/2`}>
            <span css={xw`mx-2 w-full`}>Ir al inicio</span>
          </Button>
        </section>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  let statusCode = 0;
  let message = '';

  if (res) {
    statusCode = res.statusCode;
    switch (statusCode) {
      case 404:
        message = 'Pagina no encontrada';
        break;
      default:
        message = 'Error inesperado';
    }
  }

  if (err) {
    statusCode = err.statusCode || 404;
    message = err.message || '';
  }

  return {
    statusCode: statusCode || 404,
    message,
  };
};

export default Error;
