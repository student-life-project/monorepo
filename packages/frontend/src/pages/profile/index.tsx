// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import {
  getAccessToken,
  useUser,
  WithPageAuthRequiredProps,
} from '@auth0/nextjs-auth0';
import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState, ComponentType } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Alert from '@/components/common/Alert';
import BodyContainer from '@/components/common/BodyContainer';
import Button from '@/components/common/Button';
import DoubleFormSpace from '@/components/common/DoubleFormSpace';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import NavBar from '@/components/common/NavBar/NavBarContainer';
import Textarea from '@/components/common/Textarea';
import Avatar from '@/components/profile/Avatar';
import UpdateUser from '@/components/profile/UpdateUser';
import { ErrorMessageInput, NameInput } from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
import { TFile } from '@/types';
import { calculateAge } from '@/utils/managerDate';
import { rgxNumber } from '@/utils/validations';
import withAuth from '@/utils/WithAuth';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '@/store/selectors/user';
import dayjs from 'dayjs';
import { api } from '@/services/api';
import { fetchUserData } from '@/store/actions/users';

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

const Profile: NextPage<{ accessToken: string }> = ({ accessToken }) => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const { isLoading, user: oauthUser, error: authError } = useUser();
  const dispatch = useDispatch();

  const userFromStore = useSelector(userSelector);

  useEffect(() => {
    if (isLoading || !oauthUser) {
      return;
    }

    if (authError) {
      // insert error handler here
    }

    reset({
      firstName: oauthUser.given_name,
      lastName: oauthUser.family_name,
      phone: '',
      birthDate: '',
      aboutMe: '',
      email: oauthUser.email,
      password: accessToken,
      userImage: oauthUser.picture,
    });

    /*
    reset({
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      birthDate: userData.birthDate,
      aboutMe: userData.aboutMe,
    });
  */
  }, [reset, isLoading, oauthUser, authError, accessToken]);

  const aboutMe = watch('aboutMe');

  const onSubmit: SubmitHandler<IProfileData> = async (dataToSend) => {
    try {
      const { data } = await api.put('/user/profile', {
        user: { ...dataToSend, phoneNumber: dataToSend.phone },
      });

      // eslint-disable-next-line no-console
      console.log('====================================');
      // eslint-disable-next-line no-console
      console.log({ data });
      // eslint-disable-next-line no-console
      console.log('====================================');

      dispatch(fetchUserData());

      toast.success(AlertMessage.updated('usuario'));
    } catch (error) {
      console.error('error validating user face', error);
      toast.error(error.message);
    }
  };

  // TODO: mantender el estado con los archivos agregados. Subir de golpe.
  const [files, setFiles] = useState<TFile[]>([]);

  const [updateUser, setUpdateUser] = useState(false);

  const handleUpdateUser = () => {
    setUpdateUser(!updateUser);
  };

  useEffect(() => {
    if (userFromStore && oauthUser) {
      const formatedDate = dayjs(userFromStore.birthDate).format('YYYY-MM-DD');
      reset({
        firstName: oauthUser.given_name,
        lastName: oauthUser.family_name,
        phone: userFromStore.phoneNumber,
        birthDate: formatedDate,
        aboutMe: userFromStore?.aboutMe || '',
        email: oauthUser.email,
        password: accessToken,
        userImage: oauthUser.picture,
      });

      setUpdateUser(!!userFromStore.identityValidated);
    }
  }, [userFromStore, oauthUser, accessToken, reset]);

  return (
    <>
      <NavBar allowRental allowLoginRegister />
      <Alert />

      <BodyContainer>
        <Content>
          <form css={xw`w-full lg:w-6/12`} onSubmit={handleSubmit(onSubmit)}>
            <div css={xw`flex items-center justify-center flex-col`}>
              <Avatar
                large
                showDropzone
                files={files}
                setFiles={setFiles}
                alt={oauthUser ? (oauthUser.nickname as string) : ''}
                url={
                  ((userData as unknown as any).picture as string) ||
                  userData.userImage
                }
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
                <Controller
                  name="phone"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: ErrorMessageInput.inputRequire(NameInput.phone),
                    pattern: {
                      value: rgxNumber,
                      message: ErrorMessageInput.notNumber,
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      id="phone"
                      type="text"
                      onBlur={onBlur}
                      placeholder="Tu número de teléfono"
                      onChange={({ target: { value: val } }) => {
                        return onChange(
                          rgxNumber.test(val)
                            ? val
                            : val.slice(0, val.length - 1),
                        );
                      }}
                      value={value}
                      error={errors.phone}
                      messageError={errors.phone?.message}
                    />
                  )}
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
                      validate: (value) =>
                        calculateAge(value) > 18 || ErrorMessageInput.ageValid,
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
                  register={{
                    ...register('email', {
                      required: ErrorMessageInput.inputRequire(NameInput.email),
                    }),
                  }}
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
                  register={{
                    ...register('password', {
                      required: ErrorMessageInput.inputRequire(
                        NameInput.password,
                      ),
                    }),
                  }}
                />
              </div>
            </DoubleFormSpace>

            <div css={xw`flex justify-center my-3`}>
              <Button type="submit" FPrimary css={xw`w-2/4`}>
                Editar
              </Button>
            </div>
          </form>
        </Content>

        {!updateUser && <UpdateUser closeModal={handleUpdateUser} />}
      </BodyContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  /*
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  */

  const { accessToken, ...restParams } = await getAccessToken(req, res); // request the token
  // eslint-disable-next-line no-console
  console.log(accessToken, restParams);

  return {
    props: { accessToken },
  };
};

export default withAuth(
  Profile as unknown as ComponentType<WithPageAuthRequiredProps>,
);
