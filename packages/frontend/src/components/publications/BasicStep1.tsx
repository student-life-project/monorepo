// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Radio from '@/components/Radio';
import Select from '@/components/Select';

type IBasicStep1 = {
  complateStep1: React.MouseEventHandler<HTMLButtonElement>;
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

const Form = styled.form`
  ${xw`
    w-full
    lg:w-8/12
  `}
`;

const BasicStep1: FC<IBasicStep1> = ({ complateStep1 }) => {
  return (
    <div css={xw`flex justify-center mb-10`}>
      <Form>
        <h2 css={xw`pb-3 text-lg font-bold`}>Tipo de anuncio</h2>

        <div css={xw`mb-4`}>
          <Label id="label-title" htmlFor="title">
            Título
          </Label>
          <Input
            required
            id="title"
            type="text"
            placeholder="Ejemplo: Casa cerca de la universidad"
          />
        </div>

        <DoubleFormSpace>
          <div css={xw`mb-4`}>
            <Label id="label-reason" htmlFor="reason">
              Motivo de la publicación
            </Label>
            <Select name="reason" id="reason" required>
              <option value="rental">Quiero rentar</option>
              <option value="roomie">Busco roomie</option>
            </Select>
          </div>

          <div css={xw`mb-4`}>
            <Label id="label-ad" htmlFor="ad">
              Tipo de espacio
            </Label>
            <Select name="ad" id="ad" required>
              <option value="full-place">Lugar completo</option>
              <option value="private-room">Cuarto privado</option>
              <option value="shared-room">Cuarto compartido</option>
            </Select>
          </div>
        </DoubleFormSpace>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Género preferido</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-4`}>
          <Radio name="man" label="Hombre" checked={false} />
          <Radio name="woman" label="Mujer" checked={false} />
          <Radio name="non-binary" label="Non-binary" checked={false} />
          <Radio name="no-preferences" label="Sin preferencias" checked />
        </div>

        <h2 css={xw`pt-11 pb-3 text-lg font-bold`}>Renta</h2>

        <DoubleFormSpace>
          <div css={xw`mb-4`}>
            <Label id="label-residents" htmlFor="residents">
              Número de residentes permitidos
            </Label>
            <Input
              required
              id="residents"
              type="number"
              placeholder="Ejemplo: 7"
            />
          </div>

          <div css={xw`mb-4`}>
            <Label id="label-availability" htmlFor="availability">
              Disponibilidad
            </Label>
            <Select name="availability" id="availability" required>
              <option value="available">Disponible</option>
              <option value="not-available">No disponible</option>
            </Select>
          </div>

          <div css={xw`mb-4`}>
            <Label id="label-price" htmlFor="price">
              Precio
            </Label>
            <Input
              required
              id="price"
              type="number"
              placeholder="Ejemplo: $1500.00"
            />
          </div>
          <div css={xw`mb-4`}>
            <Label id="label-time" htmlFor="time">
              Pago por
            </Label>
            <Input
              required
              disabled
              id="time"
              type="text"
              value="Mes"
              placeholder="Mes"
            />
          </div>
        </DoubleFormSpace>

        <div css={xw`flex justify-end my-4`}>
          <Button
            FPrimary
            type="button"
            css={xw`w-full sm:w-3/12`}
            onClick={complateStep1}
          >
            Continuar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BasicStep1;
