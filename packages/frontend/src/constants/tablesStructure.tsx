// * ALL
// * =========================================================================

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import xw from 'xwind';

import Options from '@/components/common/Options';
import Status from '@/components/common/Status';
import { IOption } from '@/types';
import { formatDate } from '@/utils/managerDate';

import {
  RentalApprovedStatus,
  RentalAvailabilityStatus,
  ReportStatus,
  UserActiveStatus,
} from './status';

type TColumns = IOption[];

// * USER
// * =========================================================================

export const HeaderPublicationUser = {
  title: 'Publicaciones',
  link: '/profile/publications/post',
  textLink: 'Crear publicación',
  search: true,
};

export const ColumnsPublicationUser = (
  availablePost: (id: number) => any,
  handleOpenModal: (id: number) => any,
): TColumns => [
  { name: 'Titulo', selector: 'title', sortable: true },
  { name: 'Precio', selector: 'price', sortable: true },
  {
    name: 'Disponibilidad',
    selector: 'available',
    cell: (row: { available: any }) => {
      const { available } = row;
      return <Status status={available} options={RentalAvailabilityStatus} />;
    },
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row: { id: any; available: any }) => {
      const { id, available } = row;

      return (
        <Options>
          <button type="button" onClick={() => availablePost(id)}>
            <span css={xw`ml-2`}>
              {available ? 'No disponible' : 'Disponible'}
            </span>
          </button>

          <a href={`/profile/publications/post/${id}`}>
            <FontAwesomeIcon icon={faPen} height="1.2rem" />
            <span css={xw`ml-2`}>Editar</span>
          </a>

          <button type="button" onClick={() => handleOpenModal(id)}>
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

// * ADMIN
// * =========================================================================

export enum ETables {
  USER,
  PUBLICATION,
  REPORT,
}

export const HeaderUser = {
  title: 'Usuarios',
  search: true,
};

export const HeaderPublication = {
  title: 'Publicaciones',
  search: true,
};

export const HeaderReport = {
  title: 'Reportes',
  search: true,
};

export const ColumnsUser = (
  statusUser: (id: number) => any,
  handleOpenModalUser: (id: number) => any,
): TColumns => [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Nombre', selector: 'name', sortable: true },
  { name: 'Correo', selector: 'email', sortable: true },
  {
    name: 'Rol',
    selector: 'role',
    cell: (row: { role: any }) => {
      const { role } = row;
      const roleName = ['Admin', 'Estudiante', 'Arrendatario'];

      return <p>{roleName[role]}</p>;
    },
    sortable: true,
  },
  {
    name: 'Estatus',
    selector: 'status',
    cell: (row: { status: any }) => {
      const { status } = row;
      return <Status status={status} options={UserActiveStatus} />;
    },
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row: { id: any; status: any }) => {
      const { id, status } = row;

      return (
        <Options>
          <button type="button" onClick={() => statusUser(id)}>
            <span css={xw`ml-2`}>{status ? 'Desactivar' : 'Activar'}</span>
          </button>

          <button type="button" onClick={() => handleOpenModalUser(id)}>
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

export const ColumnsPublication = (
  approvePost: (id: number) => any,
  handleOpenModalPost: (id: number) => any,
): TColumns => [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Titulo', selector: 'title', sortable: true },
  { name: 'Precio', selector: 'price', sortable: true },
  {
    name: 'Disponibilidad',
    selector: 'available',
    cell: (row: { available: any }) => {
      const { available } = row;
      return <p>{available ? 'Disponible' : 'No disponible'}</p>;
    },
    sortable: true,
  },
  {
    name: 'Aprobación',
    selector: 'approved',
    cell: (row: { approved: any }) => {
      const { approved } = row;
      return <Status status={approved} options={RentalApprovedStatus} />;
    },
    sortable: true,
  },
  {
    name: 'Acciones',
    cell: (row: { id: any; approved: any }) => {
      const { id, approved } = row;

      return (
        <Options>
          <button type="button" onClick={() => approvePost(id)}>
            <span css={xw`ml-2`}>{approved ? 'No aprobar' : 'Aprobar'}</span>
          </button>

          <button type="button" onClick={() => handleOpenModalPost(id)}>
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

export const ColumnsReport = (
  solveReport: (id: number) => any,
  handleOpenModalReport: (id: number) => any,
): TColumns => [
  { name: 'ID', selector: 'id', sortable: true },
  { name: 'Tipo', selector: 'type', sortable: true },
  { name: 'Descripción', selector: 'description', sortable: true },
  {
    name: 'Fecha',
    selector: 'createdAt',
    sortable: true,
    cell: (row: { createdAt: any }) => {
      const { createdAt } = row;
      return formatDate(createdAt);
    },
  },
  {
    name: 'Estatus',
    selector: 'status',
    sortable: true,
    cell: (row: { status: boolean }) => {
      const { status } = row;
      return <Status status={status} options={ReportStatus} />;
    },
  },
  {
    name: 'Acciones',
    cell: (row: { id: any; status: any }) => {
      const { id, status } = row;

      return (
        <Options>
          <button type="button" onClick={() => solveReport(id)}>
            <span css={xw`ml-2`}>{status ? 'No resuelto' : 'Resuelto'}</span>
          </button>

          <button type="button" onClick={() => handleOpenModalReport(id)}>
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

// * =========================================================================
