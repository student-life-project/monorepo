// eslint-disable-next-line simple-import-sort/imports
import {
  faIdCard,
  faComments,
  faLaptopHouse,
  faTruckLoading,
} from '@fortawesome/free-solid-svg-icons';
import xw from 'xwind';
import { FC } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import Footer from '@/components/Footer';
import InfoSteps from '@/components/faqs/InfoSteps';

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
    title: 'Chatea y manda solicitudes',
    text: 'Manda una solicitud de chat para obtener más información sobre algún anuncio de un alojamiento.',
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
    <NavBar allowRequest allowLogin />

    <BreadCrumbs
      items={[
        { link: '/', text: 'Student Life' },
        { link: '/help', text: 'Ayuda' },
        {
          link: '/help/information-rentals',
          text: 'Busco un alojamiento',
        },
      ]}
    />

    <BodyContainer css={xw`pt-0`}>
      <Title>Busco un alojamiento</Title>
      <InfoSteps steps={steps} />
    </BodyContainer>
    <Footer />
  </>
);

export default Information;
