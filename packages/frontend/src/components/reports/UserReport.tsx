// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Button from '../Button';
import Modal from '../Modal';
import Radio from '../Radio';
import Textarea from '../Textarea';

type IUserReport = {
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
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

const UserReport: FC<IUserReport> = ({ closeModal }) => (
  <Modal title="Reportar usuario" close={closeModal}>
    <h2 css={xw`py-4 text-lg font-bold`}>Seleccione el motivo del reporte</h2>

    <div css={xw`flex flex-col items-start`}>
      <Radio
        name="reason-1"
        label="Es irrespetuoso u ofensivo (Incita al odio)"
        checked
      />
      <Radio
        name="reason-2"
        label="Es un perfil con información falsa"
        checked={false}
      />
      <Radio
        name="reason-3"
        label="Amenazar con violencia o daño físico"
        checked={false}
      />
      <Radio
        name="reason-4"
        label="Comportamiento inapropiado"
        checked={false}
      />
      <Radio name="reason-5" label="Es otra cosa" checked={false} />
    </div>

    <h2 css={xw`py-4 text-lg font-bold`}>Describa mejor la problemática</h2>
    <Textarea id="message" placeholder="Message..." />

    <DoubleFormSpace>
      <div css={xw`mt-5 sm:mb-2`}>
        <Button BSecondary type="button" css={xw`w-full`} onClick={closeModal}>
          Cancelar
        </Button>
      </div>

      <div css={xw`mt-5 sm:mb-2`}>
        <Button type="submit" FPrimary css={xw`w-full`}>
          Enviar
        </Button>
      </div>
    </DoubleFormSpace>
  </Modal>
);

export default UserReport;
