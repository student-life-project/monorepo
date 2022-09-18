import { NextPage, NextPageContext } from 'next';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import PostDetails from '@/components/profile/PostDetails';
import { ItemsPublicationDetailsAdmin } from '@/constants';
import { TStore } from '@/store';
import { getPublication } from '@/store/actions/managePublications';
import { TRootState } from '@/store/reducers';
import { managePublicationsSelector } from '@/store/selectors/managePublications';

const PublicationDetails: NextPage = () => {
  const publication = useSelector((state) => managePublicationsSelector(state));

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsPublicationDetailsAdmin(publication.id)} />

      <BodyContainer css={xw`pt-16 sm:pt-8`}>
        <PostDetails values={publication} admin />
      </BodyContainer>
    </>
  );
};

PublicationDetails.getInitialProps = async ({
  query,
  reduxStore,
}: NextPageContext & { id: number; reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getPublication(query.id),
  );

  return {};
};

export default PublicationDetails;
