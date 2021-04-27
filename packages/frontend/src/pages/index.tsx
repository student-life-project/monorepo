import { NextPage } from 'next';
// import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import NavBar from '@/components/common/NavBar/NavBarContainer';
import Footer from '@/components/Footer';
/*
import { fetchUserData, IUserAction } from '@/store/actions/user';
import { TRootState } from '@/store/reducers';
import { parseCookies } from '@/utils/cookie';
 */

export const Home: NextPage = () => {
  return (
    <>
      <NavBar allowPublish allowRegister allowLogin />
      <section css={xw`container mx-auto pt-16`}>Home page</section>
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
