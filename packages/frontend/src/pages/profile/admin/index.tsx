import { FC, useState } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import ModalConfirm from '@/components/common/ModalConfirm';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Table from '@/components/common/Table';
import Tabs from '@/components/common/Tabs';
import {
  ColumnsPublication,
  ColumnsReport,
  ColumnsUser,
  confirmMessage,
  ETables,
  HeaderPublication,
  HeaderReport,
  HeaderUser,
  ItemsAdmin,
} from '@/constants';

const dataUser = [
  {
    id: 1,
    name: 'Alfredo Carreón Urbano',
    email: 'alfredo11cu@gmail.com',
    role: 0,
    status: true,
  },
  {
    id: 2,
    name: 'Fernanda Hernandez',
    email: 'fer@hotmail.com',
    role: 1,
    status: false,
  },
  {
    id: 3,
    name: 'Victor Reyes',
    email: 'victor@gmail.com',
    role: 2,
    status: true,
  },
  {
    id: 4,
    name: 'Angelica Victoria',
    email: 'angie@gmail.com',
    role: 2,
    status: true,
  },
  {
    id: 5,
    name: 'karla Valdos',
    email: 'kvaldos@gmail.com',
    role: 1,
    status: false,
  },
];

const dataPublication = [
  {
    id: 1,
    title: 'Casa cerca de CUCEI',
    price: 700,
    available: true,
    approved: true,
  },
  {
    id: 2,
    title: 'Depatamento cerca de CUCEI',
    price: 800,
    available: true,
    approved: true,
  },
  {
    id: 3,
    title: 'Cuarto privado cerca de CUCEI',
    price: 1000,
    available: false,
    approved: true,
  },
  {
    id: 4,
    title: 'Cuarto compartido cerca de CUCEI',
    price: 1200,
    available: true,
    approved: true,
  },
  {
    id: 5,
    title: 'Depatamento cerca de CUCEI',
    price: 1500,
    available: true,
    approved: false,
  },
  {
    id: 6,
    title: 'Cuarto cerca de CUCEI',
    price: 600,
    available: true,
    approved: false,
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
    approved: true,
  },
  {
    id: 10,
    title: 'Cuarto privado cerca de CUCEI',
    price: 120,
    available: true,
    approved: true,
  },
  {
    id: 11,
    title: 'Casa cerca de CUCEI',
    price: 640,
    available: false,
    approved: true,
  },
  {
    id: 12,
    title: 'Depatamento cerca de CUCEI',
    price: 320,
    available: true,
    approved: false,
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
    approved: true,
  },
  {
    id: 15,
    title: 'Depatamento cerca de CUCEI',
    price: 500,
    available: true,
    approved: false,
  },
  {
    id: 16,
    title: 'Cuarto cerca de CUCEI',
    price: 250,
    available: false,
    approved: false,
  },
  { id: 17, title: 'Piso cerca de CUCEI', price: 700, available: true },
  {
    id: 18,
    title: 'Casa cerca de CUCEI',
    price: 300,
    available: false,
    approved: true,
  },
  {
    id: 19,
    title: 'Casa cerca de CUCEI',
    price: 2000,
    available: true,
    approved: true,
  },
  {
    id: 20,
    title: 'Cuarto privado cerca de CUCEI',
    price: 500,
    available: true,
    approved: false,
  },
];

const dataReport = [
  {
    id: 1,
    type: 'Usuario',
    description: 'Lorem ipsum dolor sit amet',
    createdAt: '2021-03-12',
    status: true,
  },
  {
    id: 2,
    type: 'Publicación',
    description: 'Lorem ipsum dolor sit amet',
    createdAt: '2021-05-12',
    status: true,
  },
  {
    id: 3,
    type: 'Usuario',
    description: 'Lorem ipsum dolor sit amet',
    createdAt: '2021-02-21',
    status: false,
  },
  {
    id: 4,
    type: 'Publicación',
    description: 'Lorem ipsum dolor sit amet',
    createdAt: '2021-05-10',
    status: false,
  },
  {
    id: 5,
    type: 'Publicación',
    description: 'Lorem ipsum dolor sit amet',
    createdAt: '2021-01-11',
    status: true,
  },
];

type TId = number | null;

const Admin: FC = () => {
  // TODO: need to implement
  // TODO: loading si la data aún no carga mostrar el Spinner.

  const [tab, setTab] = useState(0);

  const handleTab = (tabCurrent) => {
    setTab(tabCurrent);
  };

  // * =========================================================================

  const [userId, setUserId] = useState<TId>(null);
  const [showModalUser, setShowModalUser] = useState(false);

  const statusUser = (id: TId) => {
    // eslint-disable-next-line no-alert
    alert(`Usuario ${id}`);
  };

  const handleOpenModalUser = (id: TId) => {
    setShowModalUser(true);
    setUserId(id);
  };

  const handleCloseModalUser = () => {
    setShowModalUser(false);
  };

  const deleteUser = (id: TId) => {
    // eslint-disable-next-line no-alert
    alert(`Usuario ${id}`);
  };

  // * =========================================================================

  const [postId, setPostId] = useState<TId>(null);
  const [showModalPost, setShowModalPost] = useState(false);

  const approvePost = (id: TId) => {
    // eslint-disable-next-line no-alert
    alert(`Publicación ${id}`);
  };

  const handleOpenModalPost = (id: TId) => {
    setShowModalPost(true);
    setPostId(id);
  };

  const handleCloseModalPost = () => {
    setShowModalPost(false);
  };

  const deletePost = (id: TId) => {
    // eslint-disable-next-line no-alert
    alert(`Publicación ${id}`);
  };

  // * =========================================================================

  const [reportId, setReportId] = useState<TId>(null);
  const [showModalReport, setShowModalReport] = useState(false);

  const solveReport = (id: TId) => {
    // eslint-disable-next-line no-alert
    alert(`Reporte ${id}`);
  };

  const handleOpenModalReport = (id: TId) => {
    setShowModalReport(true);
    setReportId(id);
  };

  const handleCloseModalReport = () => {
    setShowModalReport(false);
  };

  const deleteReport = (id: TId) => {
    // eslint-disable-next-line no-alert
    alert(`Reporte ${id}`);
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />

      <BreadCrumbs items={ItemsAdmin} />

      <Tabs
        items={[
          { text: 'Usuarios', handleTab },
          { text: 'Publicaciones', handleTab },
          { text: 'Reportes', handleTab },
        ]}
      />

      <BodyContainer css={xw`pt-0`}>
        {tab === ETables.USER && (
          <Table
            data={dataUser}
            loading={false}
            columns={ColumnsUser(statusUser, handleOpenModalUser)}
            header={HeaderUser}
          />
        )}

        {tab === ETables.PUBLICATION && (
          <Table
            data={dataPublication}
            loading={false}
            columns={ColumnsPublication(approvePost, handleOpenModalPost)}
            header={HeaderPublication}
          />
        )}

        {tab === ETables.REPORT && (
          <Table
            data={dataReport}
            loading={false}
            columns={ColumnsReport(solveReport, handleOpenModalReport)}
            header={HeaderReport}
          />
        )}
      </BodyContainer>

      {showModalUser && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('usuario')}
          description={confirmMessage.descriptionDelete('usuario')}
          closeModal={handleCloseModalUser}
          // eslint-disable-next-line no-console
          action={() => deleteUser(userId)}
        />
      )}

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

      {showModalReport && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('reporte')}
          description={confirmMessage.descriptionDelete('reporte')}
          closeModal={handleCloseModalReport}
          // eslint-disable-next-line no-console
          action={() => deleteReport(reportId)}
        />
      )}
    </>
  );
};

export default Admin;
