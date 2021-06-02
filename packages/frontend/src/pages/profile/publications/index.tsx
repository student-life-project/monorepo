import NextLink from 'next/link';
import { FC } from 'react';

import Anchor from '@/components/common/Anchor';
import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';

const Publications: FC = () => {
  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <BodyContainer>
        <Title>En esta vista estara tabla de publaciones y CRUD.</Title>
        <NextLink href="/profile/publications/create">
          <Anchor>Crear Publicación</Anchor>
        </NextLink>
      </BodyContainer>
    </>
  );
};

export default Publications;
