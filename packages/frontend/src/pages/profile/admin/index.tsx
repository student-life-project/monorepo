import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import xw from 'xwind';

import TablePublications from '@/components/admin/TablePublications';
import TableReports from '@/components/admin/TableReports';
import TableUsers from '@/components/admin/TableUsers';
import Alert from '@/components/common/Alert';
import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Tabs from '@/components/common/Tabs';
import { ETables, ItemsAdmin } from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';

const dataUsers = [
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

const dataPublications = [
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

const dataReports = [
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

// TODO: need to implement
const Admin: FC = () => {
  const router = useRouter();
  const [tab, setTab] = useState(0);

  const handleTab = (tabCurrent) => {
    setTab(tabCurrent);
  };

  useEffect(() => {
    if (router.query) {
      const { deletedUser, deletedReport, deletedPublication } = router.query;

      if (deletedUser === 'true') {
        toast.success(AlertMessage.deleted('usuario'));
      } else if (deletedReport === 'true') {
        toast.success(AlertMessage.deleted('reporte'));
      } else if (deletedPublication === 'true') {
        toast.success(AlertMessage.deleted('publicación'));
      }

      router.replace('/profile/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsAdmin} />
      <Alert />

      <Tabs
        items={[
          { text: 'Usuarios', handleTab },
          { text: 'Publicaciones', handleTab },
          { text: 'Reportes', handleTab },
        ]}
      />

      <BodyContainer css={xw`pt-0`}>
        {tab === ETables.USER && <TableUsers data={dataUsers} />}

        {tab === ETables.PUBLICATION && (
          <TablePublications data={dataPublications} />
        )}

        {tab === ETables.REPORT && <TableReports data={dataReports} />}
      </BodyContainer>
    </>
  );
};

export default Admin;
