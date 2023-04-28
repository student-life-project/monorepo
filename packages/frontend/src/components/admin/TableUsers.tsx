import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalConfirm from '@/components/common/ModalConfirm';
import Table from '@/components/common/Table';
import { ColumnsUser, confirmMessage, HeaderUser } from '@/constants';
import {
  changeUserStatus,
  deleteUser,
  getAllUser,
  searchUser,
} from '@/store/actions/manageUsers';
import { isFetchingManageUserSelector } from '@/store/selectors/manageUsers';
import { TElementId } from '@/types';
import { isBannedUserFormat } from '@/utils/editUserFormat';

type TTableUsers = {
  data: any;
};

const TableUsers: FC<TTableUsers> = ({ data }) => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState<TElementId>(null);
  const [showModalUser, setShowModalUser] = useState(false);

  const loading = useSelector(isFetchingManageUserSelector);

  const handleChange = ({ target }) => {
    dispatch(searchUser(target.value));
  };

  const statusUser = async (id: TElementId) => {
    const userSelected = data.find((item) => item._id === id);
    await dispatch(changeUserStatus(id, isBannedUserFormat(userSelected)));
    await dispatch(getAllUser());
  };

  const handleDeletePublication = async () => {
    await dispatch(deleteUser(userId));
    await dispatch(getAllUser());
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
          action={handleDeletePublication}
        />
      )}
    </>
  );
};

export default TableUsers;
