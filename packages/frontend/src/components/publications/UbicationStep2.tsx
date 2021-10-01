// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Textarea from '@/components/Textarea';

type IUbicationStep2 = {
  nextStep: React.MouseEventHandler<HTMLButtonElement>;
  previousStep: React.MouseEventHandler<HTMLButtonElement>;
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

const UbicationStep2: FC<IUbicationStep2> = ({ nextStep, previousStep }) => {
  return (
    <div css={xw`flex justify-center mb-10`}>
      <Form>
        <h2 css={xw`pb-3 text-lg font-bold`}>Ubicación de la vivienda</h2>

        <div css={xw`mb-4`}>
          <Label id="label-street" htmlFor="street">
            Calle
          </Label>
          <Input
            required
            id="street"
            type="text"
            placeholder="Nombre o número de la calle"
          />
        </div>

        <DoubleFormSpace>
          <div css={xw`mb-4`}>
            <Label id="label-ext-number" htmlFor="ext-number">
              Número de exterior
            </Label>
            <Input
              required
              id="ext-number"
              type="text"
              placeholder="No. Exterior"
            />
          </div>

          <div css={xw`mb-4`}>
            <Label id="label-int-number" htmlFor="int-number">
              Número de interior
            </Label>
            <Input
              required
              id="int-number"
              type="text"
              placeholder="No. Interior"
            />
          </div>
        </DoubleFormSpace>

        <div css={xw`mb-4`}>
          <Label id="label-cross-street" htmlFor="cross-street">
            Cruces
          </Label>
          <Input
            required
            id="cross-street"
            type="text"
            placeholder="Nombre de las calles"
          />
        </div>

        <div css={xw`mb-4`}>
          <Label id="label-reference" htmlFor="reference">
            Referencias
          </Label>
          <Textarea
            id="reference"
            placeholder="Ingrese alguna referencia del domicilio"
          />
        </div>

        <DoubleFormSpace>
          <div css={xw`mb-4`}>
            <Label id="label-state-code" htmlFor="state-code">
              Código Postal
            </Label>
            <Input required id="state-code" type="text" placeholder="CP" />
          </div>

          <div css={xw`mb-4`}>
            <Label id="label-cologne" htmlFor="cologne">
              Colonia
            </Label>
            <Input
              required
              id="cologne"
              type="text"
              placeholder="Nombre de la colonia"
            />
          </div>

          <div css={xw`mb-4`}>
            <Label id="label-city" htmlFor="city">
              Ciudad
            </Label>
            <Input
              required
              id="city"
              type="text"
              placeholder="Nombre de la ciudad"
            />
          </div>

          <div css={xw`mb-4`}>
            <Label id="label-country" htmlFor="country">
              País
            </Label>
            <Input
              required
              disabled
              id="country"
              type="text"
              value="México"
              placeholder="Nombre de la ciudad"
            />
          </div>
        </DoubleFormSpace>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Zona</h2>

        <div css={xw`mb-4`}>
          <Label id="label-zone" htmlFor="zone">
            Descripción de la zona
          </Label>
          <Textarea
            id="zone"
            placeholder="Describe puntos importantes de la zona, por ejemplo seguridad, servicios o instituciones cercanas"
          />
        </div>

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
      </Form>
    </div>
  );
};

export default UbicationStep2;
