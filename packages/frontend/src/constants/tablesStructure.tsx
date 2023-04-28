// * ALL
// * =========================================================================

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import xw from 'xwind';

import Options from '@/components/common/Options';
import Status from '@/components/common/Status';
import { IOption, TElementId } from '@/types';
import { formatDate } from '@/utils/managerDate';
import { formatter } from '@/utils/numberFormat';

import { RoleName } from './rolesName';
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
  availablePost: (_id: TElementId) => void,
  handleOpenModal: (_id: TElementId) => void,
): TColumns => [
  { name: 'Titulo', selector: 'title', sortable: true },
  {
    name: 'Precio',
    selector: 'price',
    sortable: true,
    cell: (row: { price: string }) => {
      const { price } = row;
      return formatter('MXN').format(price);
    },
  },
  {
    name: 'Disponibilidad',
    selector: 'availability',
    sortable: true,
    cell: (row: { availability: boolean }) => {
      const { availability } = row;
      return (
        <Status status={availability} options={RentalAvailabilityStatus} />
      );
    },
  },
  {
    name: 'Acciones',
    cell: (row: { _id: TElementId; availability: boolean }) => {
      const { _id, availability } = row;

      return (
        <Options>
          <button type="button" onClick={() => availablePost(_id)}>
            <span css={xw`ml-2`}>
              {availability ? 'No disponible' : 'Disponible'}
            </span>
          </button>

          <a href={`/profile/publications/post/${_id}`}>
            <FontAwesomeIcon icon={faPen} height="1.2rem" />
            <span css={xw`ml-2`}>Editar</span>
          </a>

          <button type="button" onClick={() => handleOpenModal(_id)}>
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
  statusUser: (_id: TElementId) => void,
  handleOpenModalUser: (_id: TElementId) => void,
): TColumns => [
  {
    name: 'Nombre',
    selector: 'fullName',
    sortable: true,
    cell: (row: { firstName: string; lastName: string }) => {
      const { firstName, lastName } = row;
      return (
        <p>
          {firstName} {lastName}
        </p>
      );
    },
  },
  { name: 'Correo', selector: 'email', sortable: true },
  {
    name: 'Rol',
    selector: 'role',
    sortable: true,
    cell: (row: { type: string }) => {
      const { type } = row;
      return <p>{RoleName[type]}</p>;
    },
  },
  {
    name: 'Estatus',
    selector: 'status',
    sortable: true,
    cell: (row: { isBanned: boolean }) => {
      const { isBanned } = row;
      return <Status status={!isBanned} options={UserActiveStatus} />;
    },
  },
  {
    name: 'Acciones',
    cell: (row: { _id: TElementId; isBanned: boolean }) => {
      const { _id, isBanned } = row;

      return (
        <Options>
          <button type="button" onClick={() => statusUser(_id)}>
            <span css={xw`ml-2`}>{!isBanned ? 'Desactivar' : 'Activar'}</span>
          </button>

          <button type="button" onClick={() => handleOpenModalUser(_id)}>
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
  approvePost: (_id: TElementId) => void,
  handleOpenModalPost: (_id: TElementId) => void,
): TColumns => [
  { name: 'Titulo', selector: 'title', sortable: true },
  {
    name: 'Precio',
    selector: 'price',
    sortable: true,
    cell: (row: { price: string }) => {
      const { price } = row;
      return formatter('MXN').format(price);
    },
  },
  {
    name: 'Disponibilidad',
    selector: 'availability',
    sortable: true,
    cell: (row: { availability: boolean }) => {
      const { availability } = row;
      return <p>{availability ? 'Disponible' : 'No disponible'}</p>;
    },
  },
  {
    name: 'Aprobación',
    selector: 'approved',
    sortable: true,
    cell: (row: { approved: boolean }) => {
      const { approved } = row;
      return <Status status={approved} options={RentalApprovedStatus} />;
    },
  },
  {
    name: 'Acciones',
    cell: (row: { _id: TElementId; approved: boolean }) => {
      const { _id, approved } = row;

      return (
        <Options>
          <button type="button" onClick={() => approvePost(_id)}>
            <span css={xw`ml-2`}>{approved ? 'No aprobar' : 'Aprobar'}</span>
          </button>

          <button type="button" onClick={() => handleOpenModalPost(_id)}>
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
  solveReport: (_id: TElementId) => void,
  handleOpenModalReport: (_id: TElementId) => void,
): TColumns => [
  { name: 'ID', selector: '_id', sortable: true },
  { name: 'Tipo', selector: 'type', sortable: true },
  { name: 'Descripción', selector: 'description', sortable: true },
  {
    name: 'Fecha',
    selector: 'createdAt',
    sortable: true,
    cell: (row: { createdAt: Date }) => {
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
    cell: (row: { _id: TElementId; status: boolean }) => {
      const { _id, status } = row;

      return (
        <Options>
          <button type="button" onClick={() => solveReport(_id)}>
            <span css={xw`ml-2`}>{status ? 'No resuelto' : 'Resuelto'}</span>
          </button>

          <button type="button" onClick={() => handleOpenModalReport(_id)}>
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
