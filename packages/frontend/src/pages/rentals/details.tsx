import { FC } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';

const Details: FC = () => {
  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <BodyContainer>
        <Title>Publication Detail.</Title>
      </BodyContainer>
    </>
  );
};

export default Details;
