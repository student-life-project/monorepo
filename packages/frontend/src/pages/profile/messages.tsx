import { FC } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';

const Messages: FC = () => {
  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <BodyContainer>
        <Title>En esta vista estara tel chat.</Title>
      </BodyContainer>
    </>
  );
};

export default Messages;
