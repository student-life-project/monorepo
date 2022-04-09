import { FC } from 'react';
import xw from 'xwind';

import BodyContainer from '@/components/common/BodyContainer';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import Button from '@/components/common/Button';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Status from '@/components/common/Status';
import SubTitle from '@/components/common/SubTitle';
import Switch from '@/components/common/Switch';
import { ItemsUserDetails, NameInput, UserActiveStatus } from '@/constants';

const user = {
  userImage: '/images/avatar.png',
  firstName: 'User 1',
  lastName: 'Test Test',
  email: 'user@test.com',
  password: 'testtesttest',
  phoneNumber: '3315448430',
  birthDate: '2018-07-22',
};

const UserDetails: FC = () => {
  // TODO: Need to implement
  const status = true; //* Por defecto debe estar activo el usuario al momento que se registra.

  return (
    <>
      <NavBar allowRental allowLoginRegister />

      <BreadCrumbs items={ItemsUserDetails} />

      <BodyContainer css={xw`pt-16 sm:pt-8`}>
        <div css={xw`flex justify-center mb-10`}>
          <div css={xw`w-full lg:w-8/12`}>
            <h2 css={xw`py-5 text-lg font-bold`}>Usuario # 1</h2>

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
                <p css={xw`font-bold mt-2`}>Alfredo Carreón Urbano</p>
              </div>

              <div>
                <SubTitle>{NameInput.email}</SubTitle>
                <p css={xw`font-bold mt-2`}>alfredo11cu@gmail.com</p>
              </div>

              <div>
                <SubTitle>{NameInput.phone}</SubTitle>
                <p css={xw`font-bold mt-2`}>3315448430</p>
              </div>

              <div>
                <SubTitle>{NameInput.birthday}</SubTitle>
                <p css={xw`font-bold mt-2`}>11 de febrero 1997</p>
              </div>
            </div>

            <div css={xw`grid grid-cols-1`}>
              <SubTitle>{NameInput.aboutMe}</SubTitle>
              <p css={xw`font-bold mt-2`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                sequi, odit recusandae rerum fuga laboriosam modi, consequuntur,
                iste reprehenderit provident tenetur repellendus natus saepe ea
                perspiciatis quaerat molestiae maiores quam!
              </p>
            </div>

            <div css={xw`w-full flex justify-center sm:justify-start mt-8`}>
              <Button BDanger type="button">
                Eliminar cuenta
              </Button>
            </div>
          </div>
        </div>
      </BodyContainer>
    </>
  );
};

export default UserDetails;
