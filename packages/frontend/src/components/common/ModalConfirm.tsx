import {
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

import { TStatus } from '@/types';

import Button from './Button';
import DoubleSpace from './DoubleSpace';
import Modal from './Modal';

type TMoldalConfirm = {
  type: TStatus;
  title: string;
  description: string;
  action: () => any;
  closeModal: () => void;
};

const ModalConfirm: FC<TMoldalConfirm> = ({
  type,
  title,
  description,
  action,
  closeModal,
}) => {
  const Icon = {
    success: [faCheckCircle, xw`text-green-600`],
    warning: [faExclamationCircle, xw`text-yellow-500`],
    error: [faExclamationCircle, xw`text-red-600`],
    info: [faInfoCircle, xw`text-primary`],
  };

  const actionButton = () => {
    action();
    closeModal();
  };

  return (
    <Modal classNames={xw`m-auto md:w-96 p-4`}>
      <DoubleSpace>
        <div css={xw`hidden md:block`}>
          <FontAwesomeIcon
            icon={Icon[type][0]}
            height="3rem"
            css={Icon[type][1]}
          />
        </div>

        <div>
          <h2 css={xw`text-lg font-bold`}>{title}</h2>
          <p css={xw`mt-2 mb-5 text-sm`}>{description}</p>
        </div>
      </DoubleSpace>

      <DoubleSpace classNames={xw`gap-4 sm:gap-3`}>
        <Button BSecondary type="button" onClick={closeModal} css={xw`w-full`}>
          Cancelar
        </Button>

        <Button
          FSecondary
          type="button"
          onClick={actionButton}
          css={xw`w-full `}
        >
          Aceptar
        </Button>
      </DoubleSpace>
    </Modal>
  );
};

export default ModalConfirm;
