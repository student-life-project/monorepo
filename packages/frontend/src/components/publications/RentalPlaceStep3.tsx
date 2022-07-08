// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { Rules, Security, Services } from '@student_life/common';
import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { ErrorMessageInput, NameInput } from '@/constants';

import { TFile } from '@/types';
import Checkbox from '../common/Checkbox';
import Label from '../common/Label';
import SpanError from '../common/SpanError';
import Textarea from '../common/Textarea';
import Dropzone from './Dropzone/Dropzone';

type TRentalPlaceStep3 = {
  register: UseFormRegister<FieldValues>;
  errors: any;
  rentalPlace: number;
  files: File[];
  setFiles: (files: TFile[]) => void;
};

const RentalPlaceStep3: FC<TRentalPlaceStep3> = ({
  register,
  errors,
  rentalPlace,
  files,
  setFiles,
}) => (
  <div css={xw`flex justify-center mb-10`}>
    <div css={xw`w-full lg:w-8/12`}>
      <h2 css={xw`pb-3 text-lg font-bold`}>Información de la vivienda</h2>

      <div css={xw`mb-4`}>
        <Label id="label-rental-place" htmlFor="rental-place">
          {NameInput.rentalPlace}
        </Label>
        <Textarea
          id="rental-place"
          maxLength={500}
          counter={rentalPlace}
          placeholder="Describe puntos importantes de la vivienda, por ejemplo describa las habitaciones, servicios, reglas, seguridad o algo que resalte su publicación"
          register={{
            ...register('rentalPlace', {
              required: ErrorMessageInput.inputRequire(NameInput.rentalPlace),
              maxLength: {
                value: 500,
                message: ErrorMessageInput.max(500),
              },
            }),
          }}
          error={errors.rentalPlace}
          messageError={errors.rentalPlace?.message}
        />
      </div>

      <h2 css={xw`pt-5 pb-3 text-lg font-bold`}>{NameInput.services}</h2>

      <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
        {Services.map((item) => {
          const value = Object.values(item)[0];

          return (
            <div key={value}>
              <Checkbox
                name={value}
                label={value}
                value={value}
                register={{
                  ...register('services', {
                    required: ErrorMessageInput.inputRequire(
                      NameInput.services,
                    ),
                  }),
                }}
              />
            </div>
          );
        })}
      </div>

      {errors.services && <SpanError>{errors.services?.message}</SpanError>}

      <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>{NameInput.rules}</h2>

      <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
        {Rules.map((item) => {
          const value = Object.values(item)[0];

          return (
            <div key={value}>
              <Checkbox
                name={value}
                label={value}
                value={value}
                register={{
                  ...register('rules', {
                    required: ErrorMessageInput.inputRequire(NameInput.rules),
                  }),
                }}
              />
            </div>
          );
        })}
      </div>

      {errors.rules && <SpanError>{errors.rules?.message}</SpanError>}

      <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>{NameInput.security}</h2>

      <div css={xw`grid grid-cols-1 sm:grid-cols-3`}>
        {Security.map((item) => {
          const value = Object.values(item)[0];

          return (
            <div key={value}>
              <Checkbox
                name={value}
                label={value}
                value={value}
                register={{
                  ...register('security', {
                    required: ErrorMessageInput.inputRequire(
                      NameInput.security,
                    ),
                  }),
                }}
              />
            </div>
          );
        })}
      </div>

      {errors.security && <SpanError>{errors.security?.message}</SpanError>}

      <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>
        Subir imagenes&nbsp;
        <span css={xw`text-xs text-primary`}>(Máximo 7 imágenes)</span>
      </h2>
      <Dropzone files={files} setFiles={setFiles} />
    </div>
  </div>
);

export default RentalPlaceStep3;
