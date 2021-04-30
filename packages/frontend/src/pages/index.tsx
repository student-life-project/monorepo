import {
  faCheckCircle,
  faHome,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { NextPage, NextPageContext } from 'next';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import InstructionCard from '@/components/common/Card/InstructionCard';
import VerticalCard from '@/components/common/Card/VerticalCard';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Footer from '@/components/Footer';
import GetStartedCard from '@/components/home/GetStartedCard';
import HeroImage from '@/components/home/HeroImage';
import { TStore } from '@/store';
import {
  getRentalPlaces,
  IRentalPlacesAction,
} from '@/store/actions/rentalTypes';
import { TRootState } from '@/store/reducers';
import { rentaPlacesSelector } from '@/store/selectors/rentalPlaces';

export const Home: NextPage = () => {
  const rentalPlaces = useSelector(rentaPlacesSelector);

  return (
    <>
      <NavBar allowPublish allowRegister allowLogin />
      <section css={xw`max-w-3xl mx-auto pt-16 md:container`}>
        {/* <a href='https://www.freepik.com/photos/business'>Business photo created by jcomp - www.freepik.com</a> */}
        <HeroImage url="/images/home_hero.jpg" name="hero_banner" />
        <div
          css={xw`w-full flex flex-col justify-center items-center my-20 flex-shrink flex-wrap md:flex-row md:justify-around`}
        >
          {rentalPlaces.map((rentalPlace, index) => {
            const rateNumber = rentalPlace.scores && rentalPlace.scores.length;
            const rate =
              rentalPlace.scores &&
              rentalPlace.scores.reduce(
                (totalScore, score) => totalScore + score.score,
                0,
              ) / rateNumber;
            const css =
              index !== rentalPlaces.length - 1
                ? xw`pb-8 md:pr-4 lg:pb-0`
                : xw``;

            return (
              <div css={css} key={`rental_place${rentalPlace.id}`}>
                <VerticalCard
                  rate={rate && parseFloat(rate.toFixed(2))}
                  rateNumber={rateNumber}
                  title={rentalPlace.title}
                  pricePerMonth={rentalPlace.price}
                  imageUrl={rentalPlace.images?.[0]?.url}
                />
              </div>
            );
          })}
        </div>

        <div css={xw`my-12 mx-4 md:mx-8 xl:mx-0`}>
          <div css={xw`mb-8`}>
            <InstructionCard
              title="Sed ut perspiciatis unde omnis"
              text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro."
              stepsList={[
                'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
                'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
                'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
              ]}
              listBullet={faCheckCircle}
              imgUrl="/images/questions.jpg" // <a href='https://www.freepik.es/vectores/personas'>Vector de Personas creado por stories - www.freepik.es</a>
            />
          </div>
          <div css={xw`mb-8`}>
            <InstructionCard
              title="Sed ut perspiciatis unde omnis"
              text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro."
              stepsList={[
                'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
                'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
                'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
              ]}
              listBullet={faCheckCircle}
              imgUrl="/images/questions.jpg" // <a href='https://www.freepik.es/vectores/personas'>Vector de Personas creado por stories - www.freepik.es</a>
              reverse
            />
          </div>
          <InstructionCard
            title="Sed ut perspiciatis unde omnis"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro."
            stepsList={[
              'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
              'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
              'Sed ut perspiciatis unde omnis iste natus error sit voluptate',
            ]}
            listBullet={faCheckCircle}
            imgUrl="/images/questions.jpg" // <a href='https://www.freepik.es/vectores/personas'>Vector de Personas creado por stories - www.freepik.es</a>
          />
        </div>

        <div
          css={xw`flex flex-col justify-center items-center py-12 border-b border-t border-gray-400 mx-2 lg:flex-row lg:justify-around`}
        >
          <div css={xw`mb-8 lg:mb-0`}>
            <GetStartedCard
              linkUrl="/rentals"
              text="¿Estás buscando un cuarto para rentar?"
              buttonText="Buscar Alojamiento"
              imgUrl="/images/search_place.jpg" // <a href='https://www.freepik.es/fotos/casa'>Foto de Casa creado por wayhomestudio - www.freepik.es</a>
              alt="rentals start"
              icon={faHome}
            />
          </div>

          <GetStartedCard
            linkUrl="/publish"
            text="¿Necesitas rentar una vivienda?"
            buttonText="Publicar Alojamiento"
            imgUrl="/images/start_publishing.jpg" // <a href='https://www.freepik.es/fotos/venta'>Foto de Venta creado por yanalya - www.freepik.es</a>
            alt="publish rentals"
            icon={faMapMarker}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

Home.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<
    TRootState,
    unknown,
    IRentalPlacesAction
  >)(getRentalPlaces({ limit: 3 }));

  return {};
};

export default Home;
