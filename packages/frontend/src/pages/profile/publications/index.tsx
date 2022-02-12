import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Options from '@/components/common/Options';
import Status from '@/components/common/Status';
import Table from '@/components/common/Table';
import { rentalAvailabilityStatus } from '@/constants';

const header = {
  title: 'Publicaciones',
  link: '/profile/publications/create',
  textLink: 'Crear publicación',
  search: true,
};

const columns = [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Titulo', selector: 'title', sortable: true },
  { name: 'Precio', selector: 'price', sortable: true },
  {
    name: 'Disponibilidad',
    selector: 'available',
    cell: (row) => {
      const { available } = row;
      return <Status status={available} options={rentalAvailabilityStatus} />;
    },
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row) => {
      const { id, available } = row;

      return (
        <Options>
          <button type="button" onClick={() => alert(id)}>
            <span css={xw`ml-2`}>
              {available ? 'No disponible' : 'Disponible'}
            </span>
          </button>

          <a href={`/profile/publication/${id}/edit`}>
            <FontAwesomeIcon icon={faPen} height="1.2rem" />
            <span css={xw`ml-2`}>Editar</span>
          </a>

          <button type="button" onClick={() => alert(id)}>
            <FontAwesomeIcon icon={faTrash} height="1.2rem" />
            <span css={xw`ml-2`}>Eliminar</span>
          </button>
        </Options>
      );
    },
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

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
  return (
    <>
      <NavBar allowRental allowRegister allowLogin />
      <BreadCrumbs
        items={[
          { link: '/', text: 'Student Life' },
          { link: '/profile', text: 'Perfil' },
          { link: '/profile/publications', text: 'Publicaciones' },
        ]}
      />
      <BodyContainer css={xw`pt-0`}>
        <Table data={data} columns={columns} header={header} />
      </BodyContainer>
    </>
  );
};

export default Publications;
