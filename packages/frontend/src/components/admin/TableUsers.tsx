import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsUser, confirmMessage, HeaderUser } from '@/constants';
import {
  changeUserStatus,
  deleteUser,
  searchUser,
} from '@/store/actions/manageUsers';
import { isFetchingManageUserSelector } from '@/store/selectors/manageUsers';
import { TElementId } from '@/types';

type TTableUsers = {
  data: any;
};

const TableUsers: FC<TTableUsers> = ({ data }) => {
  const [userId, setUserId] = useState<TElementId>(null);
  const [showModalUser, setShowModalUser] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => isFetchingManageUserSelector(state));

  const handleChange = ({ target }) => {
    dispatch(searchUser(target.value));
  };

  const statusUser = (id: TElementId) => {
    dispatch(changeUserStatus(id));
  };

  const handleOpenModalUser = (id: TElementId) => {
    setShowModalUser(true);
    setUserId(id);
  };

  const handleCloseModalUser = () => {
    setShowModalUser(false);
  };

  const header = {
    ...HeaderUser,
    onChange: handleChange,
  };

  return (
    <>
      <Table
        data={data}
        loading={loading}
        columns={ColumnsUser(statusUser, handleOpenModalUser)}
        header={header}
        linkRow="/profile/admin/user-details/"
      />

      {showModalUser && (
        <ModalConfirm
          type="warning"
          title={confirmMessage.titleDelete('usuario')}
          description={confirmMessage.descriptionDelete('usuario')}
          closeModal={handleCloseModalUser}
          action={() => dispatch(deleteUser(userId))}
        />
      )}
    </>
  );
};

export default TableUsers;
