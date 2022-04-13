// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import BodyContainer from '@/components/common/BodyContainer';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Textarea from '@/components/common/Textarea';
import ResetPassword from '@/components/profile/ResetPassword';
import { ErrorMessageInput, NameInput } from '@/constants';

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

interface IProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  aboutMe: string;
}

// TODO: Need to implement.
const userData = {
  firstName: 'Alfredo',
  lastName: 'Carreón Urbano',
  phone: '3315448430',
  birthDate: '1997-02-11',
  aboutMe:
    'Soy Estudiante de Ing. en Computación y me gustaria encontrar un roomy',
  email: 'alfredo11cu@gmail.com',
  password: 'Password.123',
  userImage: '/images/avatar.png',
};

const Profile: FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  useEffect(() => {
    reset({
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      birthDate: userData.birthDate,
      aboutMe: userData.aboutMe,
    });
  }, [reset]);

  const aboutMe = watch('aboutMe');

  const onSubmit: SubmitHandler<IProfileData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const [showUpdatePass, setShowUpdatePass] = useState(false);

  const handleShowUpdatePass = () => {
    setShowUpdatePass(!showUpdatePass);
  };

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <BodyContainer>
        <Content>
          <form css={xw`w-full lg:w-6/12`} onSubmit={handleSubmit(onSubmit)}>
            <div css={xw`flex items-center justify-center`}>
              <img
                alt={userData.firstName}
                src={userData.userImage}
                css={xw`w-52 h-52 sm:w-48 sm:h-48 bg-gray-400 rounded-full mb-5`}
              />
            </div>

            <DoubleFormSpace>
              <div css={xw`mb-4`}>
                <Label id="label-first-name" htmlFor="first-name">
                  {NameInput.firstName}
                </Label>
                <Input
                  type="text"
                  id="first-name"
                  placeholder="Tu nombre"
                  register={{
                    ...register('firstName', {
                      required: ErrorMessageInput.inputRequire(
                        NameInput.firstName,
                      ),
                    }),
                  }}
                  error={errors.firstName}
                  messageError={errors.firstName?.message}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-last-name" htmlFor="last-name">
                  {NameInput.lastName}
                </Label>
                <Input
                  type="text"
                  id="last-name"
                  placeholder="Tu apellido"
                  register={{
                    ...register('lastName', {
                      required: ErrorMessageInput.inputRequire(
                        NameInput.lastName,
                      ),
                    }),
                  }}
                  error={errors.lastName}
                  messageError={errors.lastName?.message}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-phone" htmlFor="phone">
                  {NameInput.phone}
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Tu número de teléfono"
                  register={{
                    ...register('phone', {
                      required: ErrorMessageInput.inputRequire(NameInput.phone),
                    }),
                  }}
                  error={errors.phone}
                  messageError={errors.phone?.message}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-birth-date" htmlFor="birth-date">
                  {NameInput.birthDate}
                </Label>
                <Input
                  type="date"
                  id="birth-date"
                  placeholder="Tu fecha de nacimiento"
                  register={{
                    ...register('birthDate', {
                      required: ErrorMessageInput.inputRequire(
                        NameInput.birthDate,
                      ),
                    }),
                  }}
                  error={errors.birthDate}
                  messageError={errors.birthDate?.message}
                />
              </div>
            </DoubleFormSpace>

            <Label id="label-password" htmlFor="password">
              {NameInput.aboutMe}
            </Label>
            <Textarea
              id="rental-place"
              maxLength={255}
              counter={aboutMe?.length}
              placeholder="Describe quién eres"
              register={{
                ...register('aboutMe', {
                  required: ErrorMessageInput.inputRequire(NameInput.aboutMe),
                  maxLength: {
                    value: 255,
                    message: ErrorMessageInput.max(255),
                  },
                }),
              }}
              error={errors.aboutMe}
              messageError={errors.aboutMe?.message}
            />

            <DoubleFormSpace>
              <div css={xw`mb-4`}>
                <Label id="label-email" htmlFor="email">
                  {NameInput.email}
                </Label>
                <Input
                  disabled
                  id="email"
                  type="email"
                  placeholder="Tu correo"
                  defaultValue={userData.email}
                />
              </div>

              <div css={xw`mb-4`}>
                <Label id="label-password" htmlFor="password">
                  {NameInput.password}
                </Label>
                <Input
                  disabled
                  id="password"
                  type="password"
                  placeholder="Tu contraseña"
                  defaultValue={userData.password}
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
