import { NextPage, NextPageContext } from 'next';
import router from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import xw from 'xwind';

import Alert from '@/components/common/Alert';
import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import Button from '@/components/common/Button';
import ModalConfirm from '@/components/common/ModalConfirm';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Status from '@/components/common/Status';
import SubTitle from '@/components/common/SubTitle';
import Switch from '@/components/common/Switch';
import Avatar from '@/components/profile/Avatar';
import {
  confirmMessage,
  ItemsUserDetails,
  NameInput,
  UserActiveStatus,
} from '@/constants';
import { TStore } from '@/store';
import {
  changeUserStatus,
  deleteUser,
  getUser,
} from '@/store/actions/manageUsers';
import { TRootState } from '@/store/reducers';
import { manageUserSelector } from '@/store/selectors/manageUsers';
import { isBannedUserFormat } from '@/utils/editUserFormat';
import { formatDate } from '@/utils/managerDate';

type TRedirectData = {
  pathname: string;
  query?: {
    deletedUser?: boolean;
  };
} & any;

const UserDetails: NextPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(manageUserSelector);

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(!user?.isBanned);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleStatus = async () => {
    setStatus(!status);
    await dispatch(changeUserStatus(user?._id, isBannedUserFormat(user)));
  };

  const handleDeleteUser = async () => {
    await dispatch(deleteUser(user?._id));

    const redirectData: TRedirectData = {
      pathname: '/profile/admin',
      query: {
        deletedUser: true,
      },
    };

    router.push(redirectData);
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BreadCrumbs items={ItemsUserDetails(user?._id)} />
      <Alert />

      {user && (
        <BodyContainer css={xw`pt-16 sm:pt-8`}>
          <div css={xw`flex justify-center mb-10`}>
            <div css={xw`w-full lg:w-8/12`}>
              <h2 css={xw`py-5 text-lg font-bold`}>Usuario # {user._id}</h2>

              <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
                <div
                  css={xw`flex justify-center items-center sm:justify-start sm:row-span-3`}
                >
                  <Avatar alt={user.firstName} url="/images/avatar.png" large />
                </div>

                <div>
                  <SubTitle>{NameInput.userStatus}</SubTitle>
                  <Switch
                    checked={status}
                    onClick={handleStatus}
                    label={
                      <Status status={status} options={UserActiveStatus} />
                    }
                  />
                </div>

                <div>
                  <SubTitle>{NameInput.fullName}</SubTitle>
                  <p css={xw`font-bold mt-2`}>
                    {user.firstName && user.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : 'N/A'}
                  </p>
                </div>

                <div>
                  <SubTitle>{NameInput.email}</SubTitle>
                  <p css={xw`font-bold mt-2`}>{user.email}</p>
                </div>

                <div>
                  <SubTitle>{NameInput.phone}</SubTitle>
                  <p css={xw`font-bold mt-2`}>
                    {user?.phoneNumber?.length > 1 ? user.phoneNumber : 'N/A'}
                  </p>
                </div>

                <div>
                  <SubTitle>{NameInput.birthDate}</SubTitle>
                  <p css={xw`font-bold mt-2`}>
                    {(user.birthDate && formatDate(user.birthDate)) || 'N/A'}
                  </p>
                </div>
              </div>

              <div css={xw`grid grid-cols-1`}>
                <SubTitle>{NameInput.aboutMe}</SubTitle>
                <p css={xw`font-bold mt-2`}>{user.aboutMe || 'N/A'}</p>
              </div>

              <div css={xw`w-full flex justify-center sm:justify-end mt-8`}>
                <Button BDanger type="button" onClick={handleShowModal}>
                  Eliminar cuenta
                </Button>
              </div>
            </div>
          </div>

          {showModal && (
            <ModalConfirm
              type="warning"
              title={confirmMessage.titleDelete('reporte')}
              description={confirmMessage.descriptionDelete('reporte')}
              closeModal={handleShowModal}
              action={handleDeleteUser}
            />
          )}
        </BodyContainer>
      )}
    </>
  );
};

UserDetails.getInitialProps = async ({
  query,
  reduxStore,
}: NextPageContext & { query: any; reduxStore: TStore }) => {
  await (reduxStore.dispatch as ThunkDispatch<TRootState, unknown, any>)(
    getUser(query.id),
  );

  return {};
};

export default UserDetails;
