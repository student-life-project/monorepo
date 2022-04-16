import { FC, useState } from 'react';
import xw from 'xwind';

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
import { TElementId } from '@/types';

const data = [
  { id: 1, title: 'Casa cerca de CUCEI', price: 700, available: true },
  {
    id: 2,
    title: 'Depatamento cerca de CUCEI',
    price: 800,
    available: true,
  },
  {
    id: 3,
    title: 'Cuarto privado cerca de CUCEI',
    price: 1000,
    available: false,
  },
  {
    id: 4,
    title: 'Cuarto compartido cerca de CUCEI',
    price: 1200,
    available: true,
  },
  {
    id: 5,
    title: 'Depatamento cerca de CUCEI',
    price: 1500,
    available: true,
  },
  {
    id: 6,
    title: 'Cuarto cerca de CUCEI',
    price: 600,
    available: true,
  },
  {
    id: 7,
    title: 'Piso cerca de CUCEI',
    price: 950,
    available: false,
  },
  { id: 8, title: 'Casa cerca de CUCEI', price: 200, available: true },
  {
    id: 9,
    title: 'Casa cerca de CUCEI',
    price: 200,
    available: false,
  },
  {
    id: 10,
    title: 'Cuarto privado cerca de CUCEI',
    price: 120,
    available: true,
  },
  {
    id: 11,
    title: 'Casa cerca de CUCEI',
    price: 640,
    available: false,
  },
  {
    id: 12,
    title: 'Depatamento cerca de CUCEI',
    price: 320,
    available: true,
  },
  {
    id: 13,
    title: 'Cuarto privado cerca de CUCEI',
    price: 700,
    available: false,
  },
  {
    id: 14,
    title: 'Cuarto compartido',
    price: 840,
    available: true,
  },
  {
    id: 15,
    title: 'Depatamento cerca de CUCEI',
    price: 500,
    available: true,
  },
  {
    id: 16,
    title: 'Cuarto cerca de CUCEI',
    price: 250,
    available: false,
  },
  { id: 17, title: 'Piso cerca de CUCEI', price: 700, available: true },
  {
    id: 18,
    title: 'Casa cerca de CUCEI',
    price: 300,
    available: false,
  },
  {
    id: 19,
    title: 'Casa cerca de CUCEI',
    price: 2000,
    available: true,
  },
  {
    id: 20,
    title: 'Cuarto privado cerca de CUCEI',
    price: 500,
    available: true,
  },
];

const Publications: FC = () => {
  // TODO: need to implement
  // TODO: loading si la data aún no carga mostrar el Spinner.

  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState<TElementId>(null);

  const availablePost = (id: TElementId) => {
    // eslint-disable-next-line no-alert
    alert(id);
  };

  const handleOpenModal = (id: TElementId) => {
    setShowModal(true);
    setPostId(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deletePost = (id: TElementId) => {
    // eslint-disable-next-line no-alert
    alert(id);
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsPublications} />
      <BodyContainer css={xw`pt-0`}>
        <Table
          data={data}
          loading={false}
          header={HeaderPublicationUser}
          columns={ColumnsPublicationUser(availablePost, handleOpenModal)}
        />
      </BodyContainer>

      {showModal && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('publicación')}
          description={confirmMessage.descriptionDelete('publicación')}
          closeModal={handleCloseModal}
          // eslint-disable-next-line no-console
          action={() => deletePost(postId)}
        />
      )}
    </>
  );
};

export default Publications;
