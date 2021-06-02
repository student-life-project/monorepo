// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Textarea from '@/components/Textarea';

type IRentalPlaceStep3 = {
  stepBack: React.MouseEventHandler<HTMLButtonElement>;
  complateStep3: React.MouseEventHandler<HTMLButtonElement>;
};

const Form = styled.form`
  ${xw`
    w-full
    lg:w-8/12
  `}
`;

const services = [
  {
    key: 'Lavadora',
  },
  {
    key: 'Elevador',
  },
  {
    key: 'Con balcón o patio',
  },
  {
    key: 'Wi-Fi incluido',
  },
  {
    key: 'Tiene mascotas',
  },
  {
    key: 'Servicios incluidos',
  },
  {
    key: 'Aire acondicionado',
  },
  {
    key: 'TV',
  },
  {
    key: 'Amueblado',
  },
  {
    key: 'Calefacción',
  },
  {
    key: 'Baño privado',
  },
];

const rules = [
  {
    key: 'No fumar',
  },
  {
    key: 'No mascotas',
  },
  {
    key: 'Mascotas OK',
  },
  {
    key: 'No drogas',
  },
  {
    key: 'No beber',
  },
  {
    key: 'Parejas OK',
  },
];

const RentalPlaceStep3: FC<IRentalPlaceStep3> = ({
  complateStep3,
  stepBack,
}) => {
  return (
    <div css={xw`flex justify-center mb-10`}>
      <Form>
        <h2 css={xw`pb-3 text-lg font-bold`}>Ubicación de la vivienda</h2>

        <div css={xw`mb-4`}>
          <Label id="label-place" htmlFor="place">
            Descripción de la vivienda
          </Label>
          <Textarea
            id="place"
            placeholder="Describe puntos importantes de la vivienda, por ejemplo describa las habitaciones o algo que resalte su publicación"
          />
        </div>

        <div css={xw`mb-4`}>
          <Label id="label-rooms" htmlFor="rooms">
            Número total de habitaciones
          </Label>
          <Input required id="rooms" type="number" placeholder="Ejemplo: 5" />
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Servicios</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-4`}>
          {services.map((item) => (
            <div key={item.key}>
              <Checkbox name={item.key} label={item.key} checked={false} />
            </div>
          ))}
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Reglas</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-4`}>
          {rules.map((item) => (
            <div key={item.key}>
              <Checkbox name={item.key} label={item.key} checked={false} />
            </div>
          ))}
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Subir imagenes</h2>
        <p css={xw`text-red-500`}>Apartado de imagenes</p>

        <div css={xw`flex justify-end flex-wrap my-4`}>
          <Button
            BSecondary
            type="button"
            css={xw`w-full sm:w-3/12 mb-5 sm:mr-5 sm:mb-0`}
            onClick={stepBack}
          >
            Regresar
          </Button>
          <Button
            FPrimary
            type="button"
            css={xw`w-full sm:w-3/12`}
            onClick={complateStep3}
          >
            Continuar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RentalPlaceStep3;
