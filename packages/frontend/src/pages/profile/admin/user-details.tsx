import { FC, useState } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import Button from '@/components/common/Button';
import ModalConfirm from '@/components/common/ModalConfirm';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Status from '@/components/common/Status';
import SubTitle from '@/components/common/SubTitle';
import Switch from '@/components/common/Switch';
import {
  confirmMessage,
  ItemsUserDetails,
  NameInput,
  UserActiveStatus,
} from '@/constants';

const user = {
  id: 1,
  userImage: '/images/avatar.png',
  firstName: 'Alfredo',
  lastName: 'Carreón Urbano',
  email: 'alfredo11cu@gmail.com',
  phoneNumber: '3315448430',
  birthDate: '11 de febrero 1997',
  aboutMe:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi, odit recusandae rerum fuga laboriosam modi, consequuntur, iste reprehenderit provident tenetur repellendus natus saepe ea perspiciatis quaerat molestiae maiores quam!',
};

const UserDetails: FC = () => {
  // TODO: Need to implement
  const status = true; //* Por defecto debe estar activo el usuario al momento que se registra.

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />

      <BreadCrumbs items={ItemsUserDetails} />

      <BodyContainer css={xw`pt-16 sm:pt-8`}>
        <div css={xw`flex justify-center mb-10`}>
          <div css={xw`w-full lg:w-8/12`}>
            <h2 css={xw`py-5 text-lg font-bold`}>Usuario # {user.id}</h2>

            <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
              <div
                css={xw`flex justify-center items-center sm:justify-start sm:row-span-3`}
              >
                <img
                  alt={user.firstName}
                  src={user.userImage}
                  css={xw`w-52 h-52 sm:w-48 sm:h-48 bg-gray-400 rounded-full mb-5`}
                />
              </div>

              <div>
                <SubTitle>{NameInput.userStatus}</SubTitle>
                <Switch
                  checked={status}
                  label={<Status status={status} options={UserActiveStatus} />}
                />
              </div>

              <div>
                <SubTitle>{NameInput.fullName}</SubTitle>
                <p css={xw`font-bold mt-2`}>
                  {`${user.firstName} ${user.lastName}`}
                </p>
              </div>

              <div>
                <SubTitle>{NameInput.email}</SubTitle>
                <p css={xw`font-bold mt-2`}>{user.email}</p>
              </div>

              <div>
                <SubTitle>{NameInput.phone}</SubTitle>
                <p css={xw`font-bold mt-2`}>{user.phoneNumber}</p>
              </div>

              <div>
                <SubTitle>{NameInput.birthDate}</SubTitle>
                <p css={xw`font-bold mt-2`}>{user.birthDate}</p>
              </div>
            </div>

            <div css={xw`grid grid-cols-1`}>
              <SubTitle>{NameInput.aboutMe}</SubTitle>
              <p css={xw`font-bold mt-2`}>{user.aboutMe}</p>
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
            // eslint-disable-next-line no-console
            action={() => console.log('hi')}
          />
        )}
      </BodyContainer>
    </>
  );
};

export default UserDetails;
