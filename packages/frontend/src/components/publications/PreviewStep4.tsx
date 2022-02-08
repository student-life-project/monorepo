// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, MouseEventHandler } from 'react';

import Button from '@/components/common/Button';
import ClampedText from '@/components/common/ClampedText';

type TPreviewStep4 = {
  nextStep: MouseEventHandler<HTMLButtonElement>;
  previousStep: MouseEventHandler<HTMLButtonElement>;
};

const SubTitle = styled.h3`
  ${xw`
    mt-2
    mb-1
    w-full
    text-xs
    text-left
    sm:text-sm 
    tracking-wide 
    text-gray-600
  `}
`;

const PreviewStep4: FC<TPreviewStep4> = ({ nextStep, previousStep }) => {
  return (
    <div css={xw`flex justify-center mb-10`}>
      <div css={xw`w-full lg:w-8/12`}>
        <h2 css={xw`pb-3 text-lg font-bold`}>Tipo de anuncio</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
          <div>
            <SubTitle>Título</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>

          <div>
            <SubTitle>Motivo de la publicación</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>Tipo de espacio</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Género preferido</h2>

        <div css={xw`grid grid-cols-1`}>
          <div>
            <SubTitle>Género</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Renta</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
          <div>
            <SubTitle>Disponibilidad</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>Precio</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>Pago por</SubTitle>
            <p css={xw`font-bold mt-2`}>Mes</p>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Ubicación de la vivienda</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
          <div>
            <SubTitle>Calle</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>

          <div>
            <SubTitle>Número de exterior</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>Número de interior</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>Cruces</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>

          <div>
            <SubTitle>Referencias</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>

          <div>
            <SubTitle>Código Postal</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>Colonia</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>Ciudad</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>

          <div>
            <SubTitle>País</SubTitle>
            <p css={xw`font-bold mt-2`}>Text</p>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Zona</h2>

        <div css={xw`grid grid-cols-1`}>
          <div>
            <SubTitle>Descripción de la zona</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>
          Información de la vivienda
        </h2>

        <div css={xw`grid grid-cols-1`}>
          <div>
            <SubTitle>Descripción de la vivienda</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Servicios y reglas</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-2`}>
          <div>
            <SubTitle>Lista de servicios</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>

          <div>
            <SubTitle>Lista de reglas</SubTitle>
            <ClampedText lines={2}>
              <span css={xw`font-bold mt-2`}>Text</span>
            </ClampedText>
          </div>
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

export default PreviewStep4;
