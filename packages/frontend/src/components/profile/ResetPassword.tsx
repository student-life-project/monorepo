// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';

type TResetPassword = {
  closeModal: () => void;
};

const DoubleFormSpace = styled.div`
  ${xw`
    grid
    gap-x-4
    grid-rows-2
    md:grid-rows-1
    md:grid-cols-2
  `}
`;

const DoubleSpace = styled.div`
  ${xw`
    flex
    w-full
    sm:gap-4
    sm:flex-row
    justify-center
    flex-col-reverse
    sm:justify-between
  `}
`;

const ResetPassword: FC<TResetPassword> = ({ closeModal }) => {
  // TODO: Need to implement

  return (
    <Modal title="Actualizar Contraseña" close={closeModal}>
      <form css={xw`w-full mt-9`}>
        <DoubleFormSpace>
          <div css={xw`mb-4 col-span-2 sm:col-span-1`}>
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

          <div css={xw`mb-4 col-span-2 sm:col-span-1`}>
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

        <DoubleSpace>
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
