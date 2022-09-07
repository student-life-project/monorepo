// TODO: Crear types y cambiar los any, cambiar funcion a ejecurtar
import { FC, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsUser, confirmMessage, HeaderUser } from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
import { TElementId } from '@/types';

type TTableUsers = {
  data: any;
};

const TableUsers: FC<TTableUsers> = ({ data }) => {
  // const dispatch = useDispatch();
  const [userId, setUserId] = useState<TElementId>(null);
  const [showModalUser, setShowModalUser] = useState(false);

  const statusUser = (id: TElementId) => {
    // dispatch(changeUserStatus(id));
    // eslint-disable-next-line no-console
    console.log(id);
  };

  const handleOpenModalUser = (id: TElementId) => {
    setShowModalUser(true);
    setUserId(id);
  };

  const handleCloseModalUser = () => {
    setShowModalUser(false);
  };

  const deleteUser = (id: TElementId) => {
    // eslint-disable-next-line no-console
    console.log(`Usuario ${id}`);
    toast.success(AlertMessage.deleted('usuario'));
  };

  return (
    <>
      <Table
        data={data}
        loading={false} // TODO: loading si la data aún no carga mostrar el Spinner.
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
