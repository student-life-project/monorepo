/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Options from '@/components/Options';
import Status from '@/components/Status';
import Table from '@/components/Table';
import Tabs from '@/components/Tabs';

const headerUser = {
  title: 'Usuarios',
  search: true,
};

const headerPublication = {
  title: 'Publicaciones',
  search: true,
};

const headerReport = {
  title: 'Reportes',
  search: true,
};

const columnsUser = [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Nombre', selector: 'name', sortable: true },
  { name: 'Correo', selector: 'email', sortable: true },
  {
    name: 'Rol',
    selector: 'role',
    cell: (row) => (
      <p>
        {row.role === 0
          ? 'Admin'
          : row.role === 1
          ? 'Estudiante'
          : 'Arrendatario'}
      </p>
    ),
    sortable: true,
  },
  {
    name: 'Estatus',
    selector: 'status',
    cell: (row) => (
      <Status status={row.status} options={['Activado', 'No activado']} />
    ),
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row) => (
      <Options>
        <button type="button" onClick={() => alert(row.id)}>
          <span css={xw`ml-2`}>{row.status ? 'Desactivar' : 'Activar'}</span>
        </button>
        <button type="button" onClick={() => alert(row.id)}>
          <FontAwesomeIcon icon={faTrash} height="1.2rem" />
          <span css={xw`ml-2`}>Eliminar</span>
        </button>
      </Options>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const columnsPublication = [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Titulo', selector: 'title', sortable: true },
  { name: 'Precio', selector: 'price', sortable: true },
  {
    name: 'Disponibilidad',
    selector: 'available',
    cell: (row) => <p>{row.available ? 'Disponible' : 'No disponible'}</p>,
    sortable: true,
  },
  {
    name: 'Aprobado',
    selector: 'approved',
    cell: (row) => (
      <Status status={row.approved} options={['Aprobado', 'No aprobado']} />
    ),
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row) => (
      <Options>
        <button type="button" onClick={() => alert(row.id)}>
          <span css={xw`ml-2`}>{row.approved ? 'No aprobar' : 'Aprobar'}</span>
        </button>
        <button type="button" onClick={() => alert(row.id)}>
          <FontAwesomeIcon icon={faTrash} height="1.2rem" />
          <span css={xw`ml-2`}>Eliminar</span>
        </button>
      </Options>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const columnsReport = [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Tipo', selector: 'type', sortable: true },
  { name: 'Descripción', selector: 'description', sortable: true },
  { name: 'Fecha', selector: 'createdAt', sortable: true },
  {
    name: 'Estatus',
    selector: 'status',
    cell: (row) => (
      <Status status={row.status} options={['Resuelto', 'No resuelto']} />
    ),
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row) => (
      <Options>
        <button type="button" onClick={() => alert(row.id)}>
          <span css={xw`ml-2`}>{row.status ? 'No resuelto' : 'Resuelto'}</span>
        </button>
        <button type="button" onClick={() => alert(row.id)}>
          <FontAwesomeIcon icon={faTrash} height="1.2rem" />
          <span css={xw`ml-2`}>Eliminar</span>
        </button>
      </Options>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

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
    type: 'Publiación',
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
    type: 'Publiación',
    description: 'Lorem ipsum dolor sit amet',
    createdAt: '2021-05-10',
    status: false,
  },
  {
    id: 5,
    type: 'Publiación',
    description: 'Lorem ipsum dolor sit amet',
    createdAt: '2021-01-11',
    status: true,
  },
];

const Admin: FC = () => {
  const [tab, setTab] = useState(0);

  const handleTab = (tabCurrent) => {
    setTab(tabCurrent);
  };

  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <BreadCrumbs
        items={[
          { link: '/', text: 'Student Life' },
          { link: '/profile', text: 'Perfil' },
          { link: '/profile/admin', text: 'Administrador' },
        ]}
      />
      <Tabs
        items={[
          { text: 'Usuarios', handleTab },
          { text: 'Publicaciones', handleTab },
          { text: 'Reportes', handleTab },
        ]}
      />

      <BodyContainer css={xw`pt-0`}>
        {tab === 0 && (
          <Table data={dataUser} columns={columnsUser} header={headerUser} />
        )}

        {tab === 1 && (
          <Table
            data={dataPublication}
            columns={columnsPublication}
            header={headerPublication}
          />
        )}

        {tab === 2 && (
          <Table
            data={dataReport}
            columns={columnsReport}
            header={headerReport}
          />
        )}
      </BodyContainer>
    </>
  );
};

export default Admin;
