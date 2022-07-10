import { FC, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import xw from 'xwind';

import { ErrorMessageInput, NameInput } from '@/constants';
import { AlertMessage } from '@/constants/alertMessage';
import { rgxPassword } from '@/utils/validations';

import Button from '../common/Button';
import DoubleFormSpace from '../common/DoubleFormSpace';
import DoubleSpace from '../common/DoubleSpace';
import Input from '../common/Input';
import Label from '../common/Label';
import Modal from '../common/Modal';

type TResetPassword = {
  closeModal: () => void;
};

interface IResetPasswordData {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmed: string;
}

const ResetPassword: FC<TResetPassword> = ({ closeModal }) => {
  // TODO: Need to implement
  //! Validar currentPassword para verificar que sea la misma contraseña.

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const passwordRef = useRef({});
  passwordRef.current = watch('newPassword', '');

  const onSubmit: SubmitHandler<IResetPasswordData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    // TODO: Alerta success y error
    toast.success(AlertMessage.updated('contraseña'));
    closeModal();
  };

  return (
    <Modal title="Actualizar Contraseña" close={closeModal}>
      <form css={xw`w-full mt-9`} onSubmit={handleSubmit(onSubmit)}>
        <DoubleFormSpace>
          <div css={xw`mb-4 col-span-2 sm:col-span-1`}>
            <Label id="label-current-password" htmlFor="current-password">
              {NameInput.currentPassword}
            </Label>
            <Input
              id="current-password"
              type="password"
              placeholder="Contraseña actual"
              register={{
                ...register('currentPassword', {
                  required: ErrorMessageInput.inputRequire(
                    NameInput.currentPassword,
                  ),
                  pattern: {
                    value: rgxPassword,
                    message: ErrorMessageInput.inputValid(
                      NameInput.currentPassword,
                    ),
                  },
                }),
              }}
              error={errors.currentPassword}
              messageError={errors.currentPassword?.message}
            />
          </div>

          <div css={xw`mb-4 col-span-2 sm:col-span-1`}>
            <Label id="label-new-password" htmlFor="new-password">
              {NameInput.newPassword}
            </Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Contraseña nueva"
              register={{
                ...register('newPassword', {
                  required: ErrorMessageInput.inputRequire(
                    NameInput.newPassword,
                  ),
                  pattern: {
                    value: rgxPassword,
                    message: ErrorMessageInput.inputValid(
                      NameInput.newPassword,
                    ),
                  },
                }),
              }}
              error={errors.newPassword}
              messageError={errors.newPassword?.message}
            />
          </div>

          <div css={xw`mb-6 col-span-2`}>
            <Label
              id="label-new-password-confirmed"
              htmlFor="new-password-confirmed"
            >
              {NameInput.newPasswordConfirmed}
            </Label>
            <Input
              type="password"
              id="new-password-confirmed"
              placeholder="Contraseña"
              register={{
                ...register('newPasswordConfirmed', {
                  required: ErrorMessageInput.inputRequire(
                    NameInput.newPasswordConfirmed,
                  ),
                  validate: (value: string) =>
                    value === passwordRef.current ||
                    ErrorMessageInput.passwordDoNotMatch,
                }),
              }}
              error={errors.newPasswordConfirmed}
              messageError={errors.newPasswordConfirmed?.message}
            />
          </div>
        </DoubleFormSpace>

        <DoubleSpace classNames={xw`sm:gap-4`}>
          <div css={xw`mt-5 sm:mb-2 w-full`}>
            <Button
              BSecondary
              type="button"
              css={xw`w-full`}
              onClick={closeModal}
            >
              Cancelar
            </Button>
          </div>

          <div css={xw`mt-5 sm:mb-2 w-full`}>
            <Button type="submit" FPrimary css={xw`w-full`}>
              Actualizar
            </Button>
          </div>
        </DoubleSpace>
      </form>
    </Modal>
  );
};

export default ResetPassword;
