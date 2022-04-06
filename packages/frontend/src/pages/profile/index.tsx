// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, useState } from 'react';

import BodyContainer from '@/components/common/BodyContainer';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Textarea from '@/components/common/Textarea';
import ResetPassword from '@/components/profile/ResetPassword';

const Content = styled.div`
  ${xw`
    mt-7
    flex
    sm:mt-10
    flex-col
    items-center
    justify-center
  `}
`;

const DoubleFormSpace = styled.div`
  ${xw`
    grid
    gap-x-4
    grid-rows-2
    md:grid-rows-1
    md:grid-cols-2
  `}
`;

const user = {
  userImage: '/images/avatar.png',
  firstName: 'User 1',
  lastName: 'Test Test',
  email: 'user@test.com',
  password: 'testtesttest',
  phoneNumber: '3315448430',
  birthDate: '2018-07-22',
};

const Profile: FC = () => {
  const [showUpdatePass, setShowUpdatePass] = useState(false);

  const handleShowUpdatePass = () => {
    setShowUpdatePass(!showUpdatePass);
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BodyContainer>
        <Content>
          <img
            alt={user.firstName}
            src={user.userImage}
            css={xw`w-52 h-52 sm:w-48 sm:h-48 bg-gray-400 rounded-full mb-5`}
          />

          <form css={xw`w-full lg:w-6/12`}>
            <DoubleFormSpace>
              <div css={xw`mb-4`}>
                <Label id="label-first-name" htmlFor="first-name">
                  Nombre
                </Label>
                <Input
                  required
                  type="text"
                  id="first-name"
                  placeholder="Nombre"
                  value={user.firstName}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-last-name" htmlFor="last-name">
                  Apellido
                </Label>
                <Input
                  required
                  type="text"
                  id="last-name"
                  placeholder="Apellido"
                  value={user.lastName}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-phone-Number" htmlFor="phone-number">
                  Número de teléfono
                </Label>
                <Input
                  required
                  type="tel"
                  id="phone-number"
                  placeholder="Número de teléfono"
                  value={user.phoneNumber}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-birth-date" htmlFor="birth-date">
                  Fecha de nacimiento
                </Label>
                <Input
                  required
                  type="date"
                  id="birth-date"
                  placeholder="Fecha de nacimiento"
                  value={user.birthDate}
                />
              </div>
            </DoubleFormSpace>

            <Label id="label-password" htmlFor="password">
              Acerca de mi
            </Label>
            <Textarea
              id="rental-place"
              maxLength={100}
              counter={0}
              placeholder="Describe quién eres"
            />

            <DoubleFormSpace>
              <div css={xw`mb-4`}>
                <Label id="label-email" htmlFor="email">
                  Correo
                </Label>
                <Input
                  disabled
                  id="email"
                  type="email"
                  placeholder="Correo"
                  value={user.email}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-password" htmlFor="password">
                  Contraseña
                </Label>
                <Input
                  disabled
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  value={user.password}
                />
              </div>
            </DoubleFormSpace>

            <div css={xw`flex sm:justify-end`}>
              <button
                type="button"
                css={xw`text-primary hover:underline text-sm`}
                onClick={handleShowUpdatePass}
              >
                Cambiar contraseña
              </button>
            </div>

            <div css={xw`flex justify-center my-3`}>
              <Button type="submit" FPrimary css={xw`w-2/4`}>
                Editar
              </Button>
            </div>
          </form>
        </Content>

        {showUpdatePass && <ResetPassword closeModal={handleShowUpdatePass} />}
      </BodyContainer>
    </>
  );
};

export default Profile;
