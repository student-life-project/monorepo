/* eslint-disable simple-import-sort/imports */
import xw from 'xwind';
import { useUser } from '@auth0/nextjs-auth0';
import styled from '@emotion/styled';
import {
  faChevronRight,
  faIdCard,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EUserType } from '@student_life/common';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '@/components/common/Button';
import WebcamImage from '@/components/common/Camara';
import DoubleFormSpace from '@/components/common/DoubleFormSpace';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import Modal from '@/components/common/Modal';
import Radio from '@/components/common/Radio';
import Tooltip from '@/components/common/Tooltip';
import { ErrorMessageInput, NameInput } from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
import { api } from '@/services/api';
import { userRecognitionApi } from '@/services/faceRecognition';
import { fetchUserData } from '@/store/actions/users';
import { userSelector } from '@/store/selectors/user';
import { calculateAge, formatDate } from '@/utils/managerDate';

interface IRegisterData {
  userType: EUserType;
  firstName: string;
  lastName: string;
  birthDate: string;
}

const Title = styled.h1`
  ${xw`
    mb-4
    w-full
    text-4xl
    text-center
    font-medium
    sm:text-5xl
  `}
`;

const Text = styled.p`
  ${xw`
    mb-4
    text-lg
    font-bold
    text-center
  `}
`;

const RadioContainer = styled.div`
  ${xw`
    h-12
    px-4
    mb-4
    border
    rounded
    border-gray-200
  `}
`;

type TUpdateUser = {
  closeModal: () => void;
};

// TODO: si se registran con gmail, cargar en nombre y el apellido.
const UpdateUser: React.FC<TUpdateUser> = ({ closeModal }) => {
  const {
    reset,
    control,
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const { user: oauthUser } = useUser();
  const dispatch = useDispatch();

  const userFromStore = useSelector(userSelector);

  const [faceImage, setFaceImage] = useState<string | null>(null);
  const [showFaceImage, setShowFaceImage] = useState(false);

  const [idCardImage, setIdCardImage] = useState<string | null>(null);
  const [showIdCardImage, setShowIdCardImage] = useState(false);

  const [facialRecognition, setFacialRecognition] = useState(false);

  const handleShowFaceImage = () => {
    setShowFaceImage(!showFaceImage);
  };

  const handleShowIdCardImage = () => {
    setShowIdCardImage(!showIdCardImage);
  };

  const onSubmit: SubmitHandler<IRegisterData> = async (dataToSend) => {
    // eslint-disable-next-line no-console
    console.log(dataToSend);
    if (!idCardImage && faceImage) {
      toast.error('Por favor verifique su identidad');
      return;
    }
    try {
      const { data: dataIdValidated } = await userRecognitionApi.post<{
        response: string;
      }>('', {
        faceImage: faceImage?.split?.(',')?.pop?.() || '',
        idCardImage: idCardImage?.split?.(',')?.pop?.() || '',
      });

      if (dataIdValidated.response === 'false') {
        toast.error('El rostro del usuario no coincide con la identificacion');
        return;
      }

      if (dataIdValidated.response === 'true') {
        const { data } = await api.put('/user/profile', {
          user: { ...dataToSend, identityValidated: true },
        });

        // eslint-disable-next-line no-console
        console.log('====================================');
        // eslint-disable-next-line no-console
        console.log({ data });
        // eslint-disable-next-line no-console
        console.log('====================================');

        dispatch(fetchUserData());

        toast.success(AlertMessage.updated('usuario'));
        closeModal();
      } else {
        throw new Error('Error al procesar las imágenes');
      }
    } catch (error) {
      console.error('ERROR_VALIDATING_USER_FACE', error);
      toast.error(error.message);
    }
  };

  const previousStep = () => {
    setFacialRecognition(false);
  };

  const nextStep = async () => {
    const result = await trigger();

    if (result) {
      setFacialRecognition(true);
    }
  };

  useEffect(() => {
    if (Object.keys(userFromStore).length && oauthUser) {
      let formatedDate = '';

      if (userFromStore.birthDate) {
        formatedDate = formatDate(userFromStore.birthDate, 'yyyy-MM-dd');
      }

      reset({
        firstName: userFromStore.firstName,
        lastName: userFromStore.lastName,
        phone: userFromStore.phoneNumber,
        birthDate: formatedDate,
        aboutMe: userFromStore?.aboutMe || '',
        email: oauthUser.email,
        userImage: oauthUser.picture,
        userType: userFromStore.type || EUserType.STUDENT,
      });
    }
  }, [userFromStore, oauthUser, reset]);

  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Te damos la bienvenida</Title>

        {!facialRecognition ? (
          <>
            <Text>
              Es importante que ingreses la siguiente información para
              personalizar tu perfil
            </Text>

            <Label id="label-first-name" htmlFor="first-name">
              {NameInput.userRole}
            </Label>
            <DoubleFormSpace>
              <Controller
                name="userType"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => {
                  const role = value;

                  return (
                    <>
                      <RadioContainer data-tip data-for="student">
                        <>
                          <Radio
                            name="student"
                            label="Estudiante"
                            value={EUserType.STUDENT}
                            onChange={onChange}
                            checked={role === EUserType.STUDENT}
                          />

                          <Tooltip id="student" type="info">
                            <span>Buscar alojamientos</span>
                          </Tooltip>
                        </>
                      </RadioContainer>

                      <RadioContainer data-tip data-for="renter">
                        <>
                          <Radio
                            name="renter"
                            label="Arrendatario"
                            value={EUserType.OWNER}
                            onChange={onChange}
                            checked={role === EUserType.OWNER}
                          />

                          <Tooltip id="renter" type="info">
                            <span>Buscar inquilino o buscar un rommie</span>
                          </Tooltip>
                        </>
                      </RadioContainer>
                    </>
                  );
                }}
              />

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
            </DoubleFormSpace>

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
                      calculateAge(value) >= 18 || ErrorMessageInput.ageValid,
                  }),
                }}
                error={errors.birthDate}
                messageError={errors.birthDate?.message}
              />
            </div>

            <p css={xw`text-center sm:text-left`}>
              Al registrarte aceptas nuestros&nbsp;
              <span css={xw`font-bold`}>términos y condiciones</span> y la&nbsp;
              <span css={xw`font-bold`}>política de privacidad</span>.
            </p>
          </>
        ) : (
          <>
            <Text>
              Para validar tu identidad toma una foto de tu identificación
              oficial y una foto de tu rostro.
            </Text>

            <p css={xw`text-center`}>
              <span css={xw`font-bold text-primary`}> Recomendación:</span> toma
              tus fotos con buena iluminación
            </p>

            <div css={xw`flex justify-center flex-wrap gap-10 my-10`}>
              <WebcamImage
                icon={faIdCard}
                img={idCardImage}
                setImg={setIdCardImage}
                showCam={showIdCardImage}
                onShowCam={handleShowIdCardImage}
                description="Foto de frente y de forma horizontal de tu identificación oficial"
              />

              <WebcamImage
                icon={faUser}
                img={faceImage}
                setImg={setFaceImage}
                showCam={showFaceImage}
                onShowCam={handleShowFaceImage}
                description="Foto de tu rostro sin accesorios (lentes, gorras, cubrebocas, etc.)"
              />
            </div>
          </>
        )}

        <div
          css={xw`flex justify-end flex-col-reverse sm:flex-row flex-wrap my-4`}
        >
          {!facialRecognition ? (
            <>
              <Button
                FPrimary
                type="button"
                onClick={nextStep}
                css={xw`w-full sm:w-3/12 mb-5 sm:mb-0`}
              >
                <span css={xw`mr-2`}>Continuar</span>
                <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
              </Button>
            </>
          ) : (
            <>
              <Button
                BSecondary
                type="button"
                onClick={previousStep}
                css={xw`w-full sm:w-3/12 mb-5 sm:mr-5 sm:mb-0`}
              >
                Regresar
              </Button>

              <Button
                FPrimary
                type="submit"
                css={xw`w-full sm:w-3/12 mb-5 sm:mb-0`}
              >
                <span css={xw`mr-2`}>Regístrate</span>
                <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
              </Button>
            </>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default UpdateUser;
