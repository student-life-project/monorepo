import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import Alert from '@/components/common/Alert';
import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import ModalConfirm from '@/components/common/ModalConfirm';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Table from '@/components/common/Table';
import {
  ColumnsPublicationUser,
  confirmMessage,
  HeaderPublicationUser,
  ItemsPublications,
} from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
import { TStore } from '@/store';
import {
  changePublicationAvailability,
  deletePublication,
  getAllPublication,
  searchPublication,
} from '@/store/actions/publications';
import { TRootState } from '@/store/reducers';
import {
  isFetchingPublicationsSelector,
  publicationsSelector,
} from '@/store/selectors/publications';
import { TElementId } from '@/types';

const Publications: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState<TElementId>(null);

  const publicationList = useSelector(publicationsSelector);
  const loading = useSelector(isFetchingPublicationsSelector);

  const handleChange = ({ target }) => {
    dispatch(searchPublication(target.value));
  };

  const availablePost = (id: TElementId) => {
    dispatch(changePublicationAvailability(id));
  };

  const handleOpenModal = (id: TElementId) => {
    setShowModal(true);
    setPostId(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (router.query) {
      const { createdPost, updatedPost, deletedPublication } = router.query;

      if (createdPost === 'true') {
        toast.success(AlertMessage.created('publicación'));
      } else if (updatedPost === 'true') {
        toast.success(AlertMessage.updated('publicación'));
      } else if (deletedPublication === 'true') {
        toast.success(AlertMessage.deleted('publicación'));
      }

      router.replace('/profile/publications');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const header = {
    ...HeaderPublicationUser,
    onChange: handleChange,
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsPublications} />
      <Alert />

      <BodyContainer css={xw`pt-0`}>
        <Table
          data={publicationList}
          loading={loading}
          columns={ColumnsPublicationUser(availablePost, handleOpenModal)}
          header={header}
          linkRow="/profile/publications/details/"
        />
      </BodyContainer>

      {showModal && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('publicación')}
          description={confirmMessage.descriptionDelete('publicación')}
          closeModal={handleCloseModal}
          action={() => dispatch(deletePublication(postId))}
        />
      )}
    </>
  );
};

Publications.getInitialProps = async ({
  reduxStore,
}: NextPageContext & { reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getAllPublication(),
  );

  return {};
};

export default Publications;
