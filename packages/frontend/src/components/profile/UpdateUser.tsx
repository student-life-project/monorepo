/* eslint-disable simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EUserType } from '@student_life/common';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';

import Button from '@/components/common/Button';
import DoubleFormSpace from '@/components/common/DoubleFormSpace';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import Radio from '@/components/common/Radio';
import Tooltip from '@/components/common/Tooltip';
import { ErrorMessageInput, NameInput } from '@/constants';
// import { AlertMessage } from '@/constants/alertMessage';
import { calculateAge } from '@/utils/managerDate';

import Modal from '../common/Modal';

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
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  useEffect(() => {
    reset({ userType: EUserType.STUDENT });
  }, [reset]);

  const onSubmit: SubmitHandler<IRegisterData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    //! toast.success(AlertMessage.updated('usuario'));
    closeModal(); // TODO: cerrar si el resultado es success
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Te damos la bienvenida</Title>
        <Text>
          Es importante que ingreses la siguiente información para personalizar
          tu perfil
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
              const role = parseInt(value, 10);

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
                  required: ErrorMessageInput.inputRequire(NameInput.firstName),
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
                  required: ErrorMessageInput.inputRequire(NameInput.lastName),
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
                required: ErrorMessageInput.inputRequire(NameInput.birthDate),
                validate: (value) =>
                  calculateAge(value) >= 18 || ErrorMessageInput.ageValid,
              }),
            }}
            error={errors.birthDate}
            messageError={errors.birthDate?.message}
          />
        </div>

        <div css={xw`my-4`}>
          <Button type="submit" FPrimary css={xw`w-full`}>
            <span css={xw`mr-2`}>Regístrate</span>
            <FontAwesomeIcon icon={faChevronRight} height=".875rem" />
          </Button>
        </div>

        <p css={xw`text-center sm:text-left`}>
          Al registrarte aceptas nuestros&nbsp;
          <span css={xw`font-bold`}>Términos y condiciones</span> y la&nbsp;
          <span css={xw`font-bold`}>Política de privacidad</span>.
        </p>
      </form>
    </Modal>
  );
};

export default UpdateUser;
