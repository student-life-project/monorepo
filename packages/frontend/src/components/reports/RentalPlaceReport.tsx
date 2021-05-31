// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, memo } from 'react';

import Button from '../Button';
import Modal from '../Modal';
import Radio from '../Radio';
import Textarea from '../Textarea';

type IRentalPlaceReport = {
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

const RentalPlaceReport: FC<IRentalPlaceReport> = ({ closeModal }) => (
  <Modal title="Reportar alojamiento" close={closeModal}>
    <h2 css={xw`py-4 text-lg font-bold`}>
      Ayúdanos a entender cuál es el problema con esta publicación. ¿Cómo lo
      describirías?
    </h2>

    <div css={xw`flex flex-col items-start`}>
      <Radio name="reason-1" label="Es impreciso o incorrecto" checked />
      <Radio
        name="reason-2"
        label="No es un alojamiento real"
        checked={false}
      />
      <Radio name="reason-3" label="Es una estafa" checked={false} />
      <Radio name="reason-4" label="Es ofensivo" checked={false} />
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

export default memo(RentalPlaceReport);
