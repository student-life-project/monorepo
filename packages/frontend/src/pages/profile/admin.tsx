import { FC } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';

const Admin: FC = () => {
  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <BodyContainer>
        <Title>
          En esta vista estara tablas para gestionar los usuarios, publicaciones
          y reportes.
        </Title>
      </BodyContainer>
    </>
  );
};

export default Admin;
