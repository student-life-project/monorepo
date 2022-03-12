// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, useState } from 'react';

import Button from '@/components/common/Button';
import BodyContainer from '@/components/common/BodyContainer';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Title from '@/components/common/Title';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';

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
  const [updatePassword, setUpdatePassword] = useState(false);

  const handleUpdatePassword = () => {
    setUpdatePassword(true);
  };

  const handleCancel = () => {
    setUpdatePassword(false);
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
                onClick={handleUpdatePassword}
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

        {updatePassword && (
          <Content css={xw`mb-10`}>
            <form css={xw`w-full lg:w-6/12`}>
              <Title css={xw`mt-0 sm:mt-7`}>Actualizar Contraseña</Title>

              <DoubleFormSpace>
                <div css={xw`mb-4`}>
                  <Label id="label-current-password" htmlFor="current-password">
                    Contraseña actual
                  </Label>
                  <Input
                    required
                    id="current-password"
                    type="password"
                    placeholder="Contraseña actual"
                  />
                </div>

                <div css={xw`mb-4`}>
                  <Label id="label-new-password" htmlFor="new-password">
                    Contraseña nueva
                  </Label>
                  <Input
                    required
                    id="new-password"
                    type="password"
                    placeholder="Contraseña nueva"
                  />
                </div>

                <div css={xw`mb-6 col-span-2`}>
                  <Label
                    id="label-new-password-confirmed"
                    htmlFor="new-password-confirmed"
                  >
                    Confirmar nueva contraseña
                  </Label>
                  <Input
                    required
                    type="password"
                    id="new-password-confirmed"
                    placeholder="Contraseña"
                  />
                </div>
              </DoubleFormSpace>

              <DoubleFormSpace>
                <div css={xw`mb-4`}>
                  <Button
                    BSecondary
                    type="button"
                    css={xw`w-full`}
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                </div>

                <div css={xw`mb-4`}>
                  <Button type="submit" FPrimary css={xw`w-full`}>
                    Actualizar
                  </Button>
                </div>
              </DoubleFormSpace>
            </form>
          </Content>
        )}
      </BodyContainer>
    </>
  );
};

export default Profile;
