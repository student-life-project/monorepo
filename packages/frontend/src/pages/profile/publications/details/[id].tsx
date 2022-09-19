import { NextPage, NextPageContext } from 'next';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import PostDetails from '@/components/profile/PostDetails';
import { ItemsPublicationDetails } from '@/constants';
import { TStore } from '@/store';
import { getPublication } from '@/store/actions/publications';
import { TRootState } from '@/store/reducers';
import { publicationsSelector } from '@/store/selectors/publications';

const Details: NextPage = () => {
  const publication = useSelector((state) => publicationsSelector(state));

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsPublicationDetails(publication.id)} />

      <BodyContainer css={xw`pt-16 sm:pt-8`}>
        <PostDetails values={publication} />
      </BodyContainer>
    </>
  );
};

Details.getInitialProps = async ({
  query,
  reduxStore,
}: NextPageContext & { query: any; reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getPublication(query.id),
  );

  return {};
};

export default Details;
