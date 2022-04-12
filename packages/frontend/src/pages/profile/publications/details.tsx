import { FC } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import PostDetails from '@/components/profile/PostDetails';
import { ItemsReportDetails } from '@/constants';

const getValues = () => ({
  id: 1,
  owner: 'Alfredo Carreón Urbano',
  date: '11 de marzo 2022',
  gender: 'Hombre',
  availability: true,
  title: 'Casa cerca de CUCEI',
  reason: 'Quiero rentar',
  typeSpace: 'Cuarto privado',
  price: '3500',
  street: 'Pallas #1523 A',
  state: 'Jalisco',
  city: 'Guadalajara',
  neighborhood: '18 de marzo',
  reference:
    'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
  zone: 'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
  stateCode: '44960',
  rentalPlace:
    'Casa tipo minimalista con mucha iluminación, muy ventilada, zona tranquila, segura, a 5 minutos de los mejores centros comerciales, restaurantes y bares. A 30 minutos de la playa y zona arqueológica de Dzibichaltun en coche.',
  services: [
    'Baño',
    'Elevador',
    'Servicios públicos',
    'Aire acondicionado',
    'Wi-Fi incluido',
  ],
  rules: ['No fumar', 'No mascotas', 'No drogas', 'No beber', 'No invitados'],
  security: [
    'Alarma de incendios',
    'Salidas de emergencia',
    'Señalamientos de seguridad',
  ],
});

const Details: FC = () => {
  // TODO: Need to implement

  return (
    <>
      <NavBar allowRental allowLoginRegister />

      <BreadCrumbs items={ItemsReportDetails} />

      <BodyContainer css={xw`pt-16 sm:pt-8`}>
        <PostDetails getValues={getValues} />
      </BodyContainer>
    </>
  );
};

export default Details;
