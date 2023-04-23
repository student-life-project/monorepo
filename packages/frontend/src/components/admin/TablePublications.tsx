import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import {
  ColumnsPublication,
  confirmMessage,
  HeaderPublication,
} from '@/constants';
import {
  changePublicationApproval,
  deletePublication,
  getAllPublications,
  searchPublication,
} from '@/store/actions/managePublications';
import { isFetchingManagePublicationsSelector } from '@/store/selectors/managePublications';
import { TElementId } from '@/types';

type TTablePublications = {
  data: any;
};

const TablePublications: FC<TTablePublications> = ({ data }) => {
  const dispatch = useDispatch();

  const [postId, setPostId] = useState<TElementId>(null);
  const [showModalPost, setShowModalPost] = useState(false);

  const loading = useSelector(isFetchingManagePublicationsSelector);

  const handleChange = ({ target }) => {
    dispatch(searchPublication(target.value));
  };

  const approvePost = (id: TElementId) => {
    dispatch(changePublicationApproval(id));
  };

  const handleDeletePublication = async () => {
    await dispatch(deletePublication(postId));
    await dispatch(getAllPublications());
  };

  const handleOpenModalPost = (id: TElementId) => {
    setShowModalPost(true);
    setPostId(id);
  };

  const handleCloseModalPost = () => {
    setShowModalPost(false);
  };

  const header = {
    ...HeaderPublication,
    onChange: handleChange,
  };

  return (
    <>
      <Table
        data={data}
        loading={loading}
        columns={ColumnsPublication(approvePost, handleOpenModalPost)}
        header={header}
        linkRow="/profile/admin/publication-details/"
      />

      {showModalPost && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('publicación')}
          description={confirmMessage.descriptionDelete('publicación')}
          closeModal={handleCloseModalPost}
          action={handleDeletePublication}
        />
      )}
    </>
  );
};

export default TablePublications;
