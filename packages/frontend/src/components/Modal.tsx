// eslint-disable-next-line simple-import-sort/imports
import { FC, memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Title from './common/Title';

type IModal = {
  title: string;
  children: React.ReactNode;
  close: React.MouseEventHandler<HTMLButtonElement>;
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
    items-center
    bg-opacity-75
    justify-center
  `}
`;

const Content = styled.div`
  ${xw`
    p-4
    w-11/12
    bg-white
    relative
    lg:h-auto
    lg:w-7/12
    rounded-lg
    font-montserrat
    text-secondary-1
  `}
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
    h-72
    mt-2
    lg:mt-3
    sm:h-80
    lg:h-96
    overflow-y-auto
  `}
`;

const Modal: FC<IModal> = ({ title, children, close }) => (
  <Container>
    <Content>
      <Header>
        <Title css={xw`my-0`}>{title}</Title>
        <button type="button" onClick={close}>
          <FontAwesomeIcon icon={faTimes} height="2rem" />
        </button>
      </Header>
      <Main>{children}</Main>
    </Content>
  </Container>
);

export default memo(Modal);
