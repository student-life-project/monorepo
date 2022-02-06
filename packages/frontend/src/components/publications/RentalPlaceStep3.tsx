// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { FC, MouseEventHandler } from 'react';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Label from '@/components/Label';
import Textarea from '@/components/Textarea';
import { Services, Rules } from '@/constants';

type IRentalPlaceStep3 = {
  nextStep: MouseEventHandler<HTMLButtonElement>;
  previousStep: MouseEventHandler<HTMLButtonElement>;
};

const RentalPlaceStep3: FC<IRentalPlaceStep3> = ({
  nextStep,
  previousStep,
}) => {
  return (
    <div css={xw`flex justify-center mb-10`}>
      <div css={xw`w-full lg:w-8/12`}>
        <h2 css={xw`pb-3 text-lg font-bold`}>Información de la vivienda</h2>

        <div css={xw`mb-4`}>
          <Label id="label-rental-place" htmlFor="rental-place">
            Descripción de la vivienda
          </Label>
          <Textarea
            id="rental-place"
            placeholder="Describe puntos importantes de la vivienda, por ejemplo describa las habitaciones, servicios, reglas o algo que resalte su publicación"
          />
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Servicios</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-4`}>
          {Services.map((item) => (
            <div key={item.name}>
              <Checkbox name={item.name} label={item.name} checked={false} />
            </div>
          ))}
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Reglas</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-4`}>
          {Rules.map((item) => (
            <div key={item.name}>
              <Checkbox name={item.name} label={item.name} checked={false} />
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
            onClick={previousStep}
          >
            Regresar
          </Button>

          <Button
            FPrimary
            type="button"
            css={xw`w-full sm:w-3/12`}
            onClick={nextStep}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RentalPlaceStep3;
