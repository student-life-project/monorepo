// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import Link from 'next/link';
import { NextPage } from 'next';
import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import { FixingBugs } from '@/icons';

interface IError {
  message: string;
  statusCode: number;
}

const Container = styled.div`
  ${xw`
    flex
    px-4
    w-full
    lg:px-0
    h-screen
    md:mx-auto
    items-center
    justify-center
    font-montserrat
    text-secondary-1
  `}
`;

const Content = styled.div`
  ${xw`
    flex
    w-full
    flex-col
    md:flex-row
  `}
`;

const IconContent = styled.div`
  ${xw`
    flex
    flex-1
    items-center
    justify-center
  `}
`;

const InfoContent = styled.section`
  ${xw`
    p-4
    flex
    flex-1
    md:mt-0
    flex-col
    text-center
    justify-center
  `}
`;

const CodeTitle = styled.h1`
  ${xw`
    mb-4
    text-5xl
    font-bold
    md:text-7xl
    lg:text-9xl
  `}
`;

const MessageText = styled.p`
  ${xw`
    mb-4
    text-2xl
    break-words
  `}
`;

const Error: NextPage<IError> = ({ statusCode, message }) => (
  <Container>
    <Content>
      <IconContent>
        <FixingBugs css={xw`w-full`} />
      </IconContent>
      <InfoContent>
        <CodeTitle>Error {statusCode}</CodeTitle>
        <MessageText>{message}</MessageText>
        <Link href="/">
          <Button FPrimary css={xw`w-full self-center lg:w-1/2`}>
            <span>Ir al inicio</span>
          </Button>
        </Link>
      </InfoContent>
    </Content>
  </Container>
);

Error.getInitialProps = ({ res, err }) => {
  let message = '';
  let statusCode = 0;

  if (res) {
    statusCode = res.statusCode;

    switch (statusCode) {
      case 404:
        message = 'No pudimos encontrar la página que buscas';
        break;
      default:
        message = 'Error inesperado en la página';
    }
  }

  if (err) {
    message = err.message || '';
    statusCode = err.statusCode || 404;
  }

  return {
    message,
    statusCode: statusCode || 404,
  };
};

export default Error;
