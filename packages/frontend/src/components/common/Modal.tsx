// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import Title from './Title';

type TModal = {
  title?: string;
  classNames?: string;
  children: React.ReactNode;
  close?: React.MouseEventHandler<HTMLButtonElement>;
};

const Container = styled.article`
  ${xw`
    m-0
    p-0
    flex
    z-50
    fixed
    inset-0
    w-screen
    h-screen
    bg-gray-900
    bg-opacity-75
    justify-center
    overflow-y-auto 
    overflow-x-hidden
  `}
`;

const Content = styled.div`
  ${xw`
    p-8
    mt-14
    w-11/12
    bg-white
    relative
    lg:w-7/12
    rounded-lg
    font-montserrat
    text-secondary-1
  `}

  height: fit-content;
`;

const Header = styled.header`
  ${xw`
    pb-3
    flex
    border-b
    justify-between
    border-secondary-2
  `}
`;

const Main = styled.main`
  ${xw`
    mt-2
    lg:mt-3
  `}
`;

const Modal: FC<TModal> = ({ title, classNames, children, close }) => (
  <Container>
    <Content css={classNames}>
      {title && close && (
        <Header>
          <Title css={xw`my-0`}>{title}</Title>
          <button type="button" onClick={close}>
            <FontAwesomeIcon icon={faTimes} height="2rem" />
          </button>
        </Header>
      )}
      <Main>{children}</Main>
    </Content>
  </Container>
);

export default Modal;
