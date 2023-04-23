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
import { managePublicationSelector } from '@/store/selectors/managePublications';

const PublicationDetails: NextPage = () => {
  const post = useSelector(managePublicationSelector);

  return (
    <>
      <NavBar allowRental allowLoginRegister />

      {post && (
        <>
          <BreadCrumbs items={ItemsPublicationDetailsAdmin(post?._id)} />

          <BodyContainer css={xw`pt-16 sm:pt-8`}>
            <PostDetails values={post} admin />
          </BodyContainer>
        </>
      )}
    </>
  );
};

PublicationDetails.getInitialProps = async ({
  query,
  reduxStore,
}: NextPageContext & { query: any; reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getPublication(query.id),
  );

  return {};
};

export default PublicationDetails;
