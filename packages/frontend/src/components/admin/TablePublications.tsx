import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import {
  ColumnsPublication,
  confirmMessage,
  HeaderPublication,
} from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
import { TElementId } from '@/types';

type TTablePublications = {
  data: any; //! Crear type
};

const TablePublications: FC<TTablePublications> = ({ data }) => {
  // TODO: need to implement
  // TODO: loading si la data aún no carga mostrar el Spinner.

  const [postId, setPostId] = useState<TElementId>(null);
  const [showModalPost, setShowModalPost] = useState(false);

  const approvePost = (id: TElementId) => {
    // eslint-disable-next-line no-console
    console.log(`Publicación ${id}`);
    toast.success(AlertMessage.updated('aprobación'));
  };

  const handleOpenModalPost = (id: TElementId) => {
    setShowModalPost(true);
    setPostId(id);
  };

  const handleCloseModalPost = () => {
    setShowModalPost(false);
  };

  const deletePost = (id: TElementId) => {
    // eslint-disable-next-line no-console
    console.log(`Publicación ${id}`);
    toast.success(AlertMessage.deleted('publicación'));
  };

  return (
    <>
      <Table
        data={data}
        loading={false}
        columns={ColumnsPublication(approvePost, handleOpenModalPost)}
        header={HeaderPublication}
      />

      {showModalPost && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('publicación')}
          description={confirmMessage.descriptionDelete('publicación')}
          closeModal={handleCloseModalPost}
          // eslint-disable-next-line no-console
          action={() => deletePost(postId)}
        />
      )}
    </>
  );
};

export default TablePublications;
