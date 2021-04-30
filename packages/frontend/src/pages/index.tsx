import { faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { NextPage } from 'next';
// import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import VerticalCard from '@/components/common/Card/VerticalCard';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Footer from '@/components/Footer';
import GetStartedCard from '@/components/home/GetStartedCard';
import HeroImage from '@/components/home/HeroImage';
/*
import { fetchUserData, IUserAction } from '@/store/actions/user';
import { TRootState } from '@/store/reducers';
import { parseCookies } from '@/utils/cookie';
 */

export const Home: NextPage = () => {
  return (
    <>
      <NavBar allowPublish allowRegister allowLogin />
      <section css={xw`max-w-3xl mx-auto pt-16 md:container`}>
        {/* <a href='https://www.freepik.com/photos/business'>Business photo created by jcomp - www.freepik.com</a> */}
        <HeroImage url="/images/home_hero.jpg" name="hero_banner" />
        <div
          css={xw`w-full flex flex-col justify-center items-center my-20 flex-shrink flex-wrap md:flex-row md:justify-around`}
        >
          <div css={xw`pb-8 lg:pb-0`}>
            <VerticalCard
              rate={4}
              rateNumber={10}
              title="Comoda casa para descanso en Club de Golf Tequis"
              pricePerMonth={1349}
              imageUrl="/images/example_home.jpg" // <a href='https://www.freepik.com/vectors/sale'>Sale vector created by upklyak - www.freepik.com</a>
            />
          </div>
          <div css={xw`pb-8 px-4 lg:pb-0`}>
            <VerticalCard
              title="Comoda casa para descanso en Club de Golf Tequis"
              pricePerMonth={50.25}
              imageUrl="/images/example_home.jpg"
            />
          </div>
          <div css={xw``}>
            <VerticalCard
              rate={2.5}
              rateNumber={15}
              title="Comoda casa para descanso en Club de Golf Tequis"
              pricePerMonth={120.5}
              imageUrl="/images/example_home.jpg"
            />
          </div>
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

/*
export const getServerSideProps = async ({ store, req, res }) => {
  const cookieData = parseCookies(req);

  if (cookieData.token) {
    await (store.dispatch as ThunkDispatch<TRootState, unknown, IUserAction>)(
      fetchUserData(cookieData.userId),
    );
  }
};
 */

export default Home;
