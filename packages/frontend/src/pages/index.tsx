import { NextPage } from 'next';
// import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import NavBar from '@/components/common/NavBar/NavBarContainer';
import Footer from '@/components/Footer';
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
      <section css={xw`container mx-auto pt-16`}>
        {/* <a href='https://www.freepik.com/photos/business'>Business photo created by jcomp - www.freepik.com</a> */}
        <HeroImage url="/images/home_hero.jpg" name="hero_banner" />
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
