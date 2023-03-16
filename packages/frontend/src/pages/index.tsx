// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  faCheckCircle,
  faHome,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { NextPage, NextPageContext } from 'next';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import BodyContainer from '@/components/common/BodyContainer';
import InstructionCard from '@/components/common/Card/InstructionCard';
import VerticalCard from '@/components/common/Card/VerticalCard';
import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import GetStartedCard from '@/components/home/GetStartedCard';
import HeroImage from '@/components/home/HeroImage';
import { TStore } from '@/store';
import { getAllRentalPlaces } from '@/store/actions/rentalPlaces';
import { TRootState } from '@/store/reducers';
import { rentalPlacesSelector } from '@/store/selectors/rentalPlaces';
import { EOrder } from '@student_life/common';

const PlaceContent = styled.div`
  ${xw`
    flex
    gap-8
    my-20
    w-full
    flex-col
    flex-wrap
    flex-shrink
    md:flex-row
    items-center
    justify-center
    md:justify-around
  `}
`;

const InstructionContent = styled.div`
  ${xw`
    mx-4
    my-12
    md:mx-8
    xl:mx-0
  `}
`;

const ActionContent = styled.div`
  ${xw`
    mx-2
    flex
    py-24
    flex-col
    border-t
    lg:flex-row
    items-center
    justify-center
    lg:justify-around
    border-secondary-2
  `}
`;

export const Home: NextPage = () => {
  const rentalPlaces = useSelector(rentalPlacesSelector);

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BodyContainer css={xw`px-0`}>
        <HeroImage url="/images/home_hero.jpg" name="hero_banner" />

        <PlaceContent>
          {rentalPlaces.map((rentalPlace) => (
            <div key={`rental_place${rentalPlace._id}`}>
              <VerticalCard
                id={rentalPlace._id}
                likes={rentalPlace.likesCount || 0}
                title={rentalPlace.title}
                pricePerMonth={parseFloat(rentalPlace.price || '0')}
                imageUrl={`${process.env.PUBLIC_IMAGES}/${rentalPlace.images?.[0]?.fullpath}`}
              />
            </div>
          ))}
        </PlaceContent>

        <InstructionContent>
          <InstructionCard
            title="Encuentra el alojamiento ideal"
            text="Student Life es una plataforma especializada para estudiantes universitarios, nuestro objetivo es ayudarte a encontrar el alojamiento adecuado para ti."
            stepsList={[
              'Es perfecto para  ti, si estás en el proceso de independencia y estás buscando un alojamiento mientras realizas tus estudios.',
              'Si buscas un alojamiento adecuado a tus necesidades, costos y seguridad.',
            ]}
            listBullet={faCheckCircle}
            imgUrl="/images/best_place.png"
          />

          <InstructionCard
            title="Tu espacio, tus reglas"
            text="Student Life te ayuda a publicar un cuarto, un departamento completo o cualquier tipo de espacio."
            stepsList={[
              'Es perfecto para ti, si quieres publicar tu espacio de forma gratuita.',
              'Ya sea que estés buscando un inquilino para ganar dinero o si estás en la búsqueda de un roomie para compartir gastos.',
            ]}
            listBullet={faCheckCircle}
            imgUrl="/images/rental.png"
            reverse
          />

          <InstructionCard
            title="Se parte de la comunidad"
            text="Student Life es una plataforma inclusiva, abierta a todo tipo de representación con el mismo ideal de compartir lo mejor de sí mismos, y juntos crear una comunidad sólida."
            stepsList={[
              'Busca y filtra alojamientos.',
              'Comenta, reporta  y califica alojamientos.',
              'Comunícate de forma rápida y sencilla con los usuarios.',
              'Encuentra toda la información como detalles, reglas, servicios, zona, calificación y comentarios de un alojamiento.',
            ]}
            listBullet={faCheckCircle}
            imgUrl="/images/community.png"
          />
        </InstructionContent>

        <ActionContent>
          <div css={xw`mb-8 lg:mb-0`}>
            <GetStartedCard
              icon={faHome}
              linkUrl="/rentals"
              alt="rentals start"
              buttonText="Buscar Alojamiento"
              imgUrl="/images/search_place.jpg"
              text="¿Estás buscando un cuarto para rentar?"
            />
          </div>

          <div css={xw`mb-8 lg:mb-0`}>
            <GetStartedCard
              icon={faMapMarkerAlt}
              linkUrl="/help/information-publish"
              alt="publish rentals"
              buttonText="Publicar Alojamiento"
              imgUrl="/images/start_publishing.jpg"
              text="¿Necesitas rentar una vivienda?"
            />
          </div>
        </ActionContent>
      </BodyContainer>
      <Footer />
    </>
  );
};

Home.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getAllRentalPlaces({ limit: 4, sortBy: 'score', order: EOrder.desc }),
  );

  return {};
};

export default Home;
