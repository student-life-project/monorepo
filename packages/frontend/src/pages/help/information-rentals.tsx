// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import {
  faComments,
  faIdCard,
  faLaptopHouse,
  faTruckLoading,
} from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import InfoSteps from '@/components/faqs/InfoSteps';
import { ItemsInfoRentals } from '@/constants';

const steps = [
  {
    title: 'Verificate',
    text: 'Registrate como "Estudiante" y actualiza la información de tu perfil. Es perfecto para ti, si estás en el proceso de independencia y estás buscando un alojamiento mientras realizas tus estudios.',
    icon: faIdCard,
  },
  {
    title: 'Explora alojamientos',
    text: 'Explora cientos de alojamientos. Verificamos cada anuncio para asegurarte una experiencia de búsqueda segura. Encuentra un alojamiento adecuado a tus necesidades, costos y seguridad.',
    icon: faLaptopHouse,
  },
  {
    title: 'Comunicate',
    text: 'Llamé o mandé un mensaje para obtener más información sobre algún anuncio de un alojamiento.',
    icon: faComments,
  },
  {
    title: '¡Múdate!',
    text: '¡Es hora de festejar que encontraste un lugar para alojarte!',
    icon: faTruckLoading,
  },
];

const Information: FC = () => (
  <>
    <NavBar allowRequest allowLoginRegister />

    <BreadCrumbs items={ItemsInfoRentals} />

    <BodyContainer css={xw`pt-0`}>
      <Title>Busco un alojamiento</Title>
      <InfoSteps steps={steps} />
    </BodyContainer>
    <Footer />
  </>
);

export default Information;
