import { FC } from 'react';
import xw from 'xwind';

import ClampedText from '@/components/common/ClampedText';
import { NameInput } from '@/constants';
import { IPublicationData } from '@/pages/profile/publications/post';
import { formatter } from '@/utils/numberFormat';

import Status from '../common/Status';
import SubTitle from '../common/SubTitle';

type TPreviewStep4 = {
  getValues: (payload?: string | string[]) => IPublicationData;
};

const PreviewStep4: FC<TPreviewStep4> = ({ getValues }) => {
  const values = getValues();

  return (
    <div css={xw`flex justify-center mb-10`}>
      <div css={xw`w-full lg:w-8/12`}>
        <h2 css={xw`pb-3 text-lg font-bold`}>Tipo de anuncio</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
          <div>
            <SubTitle>{NameInput.title}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.title}</p>
          </div>

          <div>
            <SubTitle>{NameInput.reason}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.reason}</p>
          </div>

          <div>
            <SubTitle>{NameInput.typeSpace}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.typeSpace}</p>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Género preferido</h2>

        <div css={xw`grid grid-cols-1`}>
          <SubTitle>{NameInput.gender}</SubTitle>
          <p css={xw`font-bold mt-2`}>{values.gender}</p>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Renta</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
          <div>
            <SubTitle>{NameInput.price}</SubTitle>
            <p css={xw`font-bold mt-2`}>{formatter().format(values.price)}</p>
          </div>

          <div>
            <SubTitle>Pago por</SubTitle>
            <p css={xw`font-bold mt-2`}>Mes</p>
          </div>

          <div>
            <SubTitle>{NameInput.availability}</SubTitle>
            <Status
              status={values.availability}
              options={['Disponible', 'No disponible']}
            />
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Ubicación de la vivienda</h2>

        <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
          <div css={xw`my-2`}>
            <SubTitle>{NameInput.street}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.street}</p>
          </div>

          <div css={xw`my-2`}>
            <SubTitle>{NameInput.state}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.state}</p>
          </div>

          <div css={xw`my-2`}>
            <SubTitle>{NameInput.city}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.city}</p>
          </div>

          <div css={xw`my-2`}>
            <SubTitle>{NameInput.neighborhood}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.neighborhood}</p>
          </div>

          <div css={xw`my-2`}>
            <SubTitle>{NameInput.stateCode}</SubTitle>
            <p css={xw`font-bold mt-2`}>{values.stateCode}</p>
          </div>

          <div css={xw`my-2`}>
            <SubTitle>País</SubTitle>
            <p css={xw`font-bold mt-2`}>México</p>
          </div>
        </div>

        <div css={xw`grid grid-cols-1`}>
          <div css={xw`grid grid-cols-1`}>
            <SubTitle>{NameInput.reference}</SubTitle>
            <ClampedText lines={5}>
              <span css={xw`font-bold mt-2`}>{values.reference}</span>
            </ClampedText>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Zona</h2>

        <div css={xw`grid grid-cols-1`}>
          <div>
            <SubTitle>{NameInput.zone}</SubTitle>
            <ClampedText lines={5}>
              <span css={xw`font-bold mt-2`}>{values.zone}</span>
            </ClampedText>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>
          Información de la vivienda
        </h2>

        <div css={xw`grid grid-cols-1`}>
          <SubTitle>{NameInput.rentalPlace}</SubTitle>
          <ClampedText lines={5}>
            <p css={xw`font-bold mt-1`}>{values.rentalPlace}</p>
          </ClampedText>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>
          Servicios, reglas y seguridad
        </h2>

        <div css={xw`grid grid-cols-1`}>
          <div>
            <SubTitle>Servicios</SubTitle>
            <ul css={xw`list-disc flex flex-wrap my-2`}>
              {values.services.map((item) => (
                <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/3`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SubTitle>Reglas</SubTitle>
            <ul css={xw`list-disc flex flex-wrap my-2`}>
              {values.rules.map((item) => (
                <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/3`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SubTitle>Seguridad</SubTitle>
            <ul css={xw`list-disc flex flex-wrap my-2`}>
              {values.security.map((item) => (
                <li key={item} css={xw`list-inside w-full sm:w-1/2 lg:w-1/3`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Subir imagenes</h2>
        <p css={xw`text-red-500`}>Apartado de imagenes</p>
      </div>
    </div>
  );
};

export default PreviewStep4;
