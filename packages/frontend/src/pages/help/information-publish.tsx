// eslint-disable-next-line simple-import-sort/imports
import {
  faHome,
  faIdCard,
  faComments,
  faLaptopHouse,
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
    text:
      'Registrate como "Arrendatario" y actualiza la información de tu perfil. Ya sea que estés buscando un inquilino para ganar dinero o si estás en la búsqueda de un roomie para compartir gastos.',
    icon: faIdCard,
  },
  {
    title: 'Anuncia tu espacio',
    text:
      'Anuncia gratis un espacio disponible y describe a detalle servicios, reglas, ubicación y seguridad de la zona.',
    icon: faLaptopHouse,
  },
  {
    title: 'Revisar aplicantes',
    text:
      'Aprobar o rechazar solicitudes comunicándote por medio de un chat con los interesados.',
    icon: faComments,
  },
  {
    title: '¡A festejar!',
    text:
      '¡En hora buena y festejar que encontraste un nuevo roomie o inquilino!',
    icon: faHome,
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
          link: '/help/information-publish',
          text: 'Anunciar un alojamiento',
        },
      ]}
    />

    <BodyContainer css={xw`pt-0`}>
      <Title>Anunciar un alojamiento</Title>
      <InfoSteps steps={steps} />
    </BodyContainer>
    <Footer />
  </>
);

export default Information;
