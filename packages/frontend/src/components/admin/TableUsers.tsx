import { FC, useState } from 'react';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsUser, confirmMessage, HeaderUser } from '@/constants';
import { TElementId } from '@/types';

type TTableUsers = {
  data: any; //! Crear type
};

const TableUsers: FC<TTableUsers> = ({ data }) => {
  // TODO: need to implement
  // TODO: loading si la data aún no carga mostrar el Spinner.

  const [userId, setUserId] = useState<TElementId>(null);
  const [showModalUser, setShowModalUser] = useState(false);

  const statusUser = (id: TElementId) => {
    // eslint-disable-next-line no-alert
    alert(`Usuario ${id}`);
  };

  const handleOpenModalUser = (id: TElementId) => {
    setShowModalUser(true);
    setUserId(id);
  };

  const handleCloseModalUser = () => {
    setShowModalUser(false);
  };

  const deleteUser = (id: TElementId) => {
    // eslint-disable-next-line no-alert
    alert(`Usuario ${id}`);
  };

  return (
    <>
      <Table
        data={data}
        loading={false}
        columns={ColumnsUser(statusUser, handleOpenModalUser)}
        header={HeaderUser}
      />

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
    </>
  );
};

export default TableUsers;
