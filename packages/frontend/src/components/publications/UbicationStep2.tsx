// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';
import { Control, FieldValues, UseFormRegister } from 'react-hook-form';

import Input from '@/components/Input';
import Label from '@/components/Label';
import Select from '@/components/Select';
import Textarea from '@/components/Textarea';
import { ErrorMessageInput, NameInput, States } from '@/constants';
import { rgxNumber } from '@/utils/validations';

type TUbicationStep2 = {
  register: UseFormRegister<FieldValues>;
  errors: any;
  Controller: any;
  control: Control<FieldValues>;
  reference: number;
  zone: number;
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

const UbicationStep2: FC<TUbicationStep2> = ({
  register,
  errors,
  Controller,
  control,
  reference,
  zone,
}) => (
  <div css={xw`flex justify-center mb-10`}>
    <div css={xw`w-full lg:w-8/12`}>
      <h2 css={xw`pb-3 text-lg font-bold`}>Ubicación de la vivienda</h2>

      <div css={xw`mb-4`}>
        <Label id="label-street" htmlFor="street">
          {NameInput.street}
        </Label>
        <Input
          id="street"
          type="text"
          placeholder="Nombre de la Calle, No. Exterior, No. Interior"
          register={{
            ...register('street', {
              required: ErrorMessageInput.inputRequire(NameInput.street),
              maxLength: {
                value: 100,
                message: ErrorMessageInput.max(100),
              },
            }),
          }}
          error={errors.street}
          messageError={errors.street?.message}
        />
      </div>

      <DoubleFormSpace>
        <div css={xw`mb-4`}>
          <Label id="label-state" htmlFor="state">
            {NameInput.state}
          </Label>
          <Select
            id="state"
            label={NameInput.state}
            options={States}
            register={{
              ...register('state', {
                required: ErrorMessageInput.inputRequire(NameInput.state),
              }),
            }}
            error={errors.state}
            messageError={errors.state?.message}
          />
        </div>

        <div css={xw`mb-4`}>
          <Label id="label-city" htmlFor="city">
            {NameInput.city}
          </Label>
          <Input
            id="city"
            type="text"
            placeholder="Nombre del municipio"
            register={{
              ...register('city', {
                required: ErrorMessageInput.inputRequire(NameInput.city),
                maxLength: {
                  value: 50,
                  message: ErrorMessageInput.max(50),
                },
              }),
            }}
            error={errors.city}
            messageError={errors.city?.message}
          />
        </div>
      </DoubleFormSpace>

      <div css={xw`grid grid-cols-1 sm:grid-cols-4 gap-5`}>
        <div css={xw`mb-4 col-span-2`}>
          <Label id="label-neighborhood" htmlFor="neighborhood">
            {NameInput.neighborhood}
          </Label>
          <Input
            id="neighborhood"
            type="text"
            placeholder="Nombre de la colonia"
            register={{
              ...register('neighborhood', {
                required: ErrorMessageInput.inputRequire(
                  NameInput.neighborhood,
                ),
                maxLength: {
                  value: 50,
                  message: ErrorMessageInput.max(50),
                },
              }),
            }}
            error={errors.neighborhood}
            messageError={errors.neighborhood?.message}
          />
        </div>

        <div css={xw`mb-4`}>
          <Label id="label-state-code" htmlFor="state-code">
            {NameInput.stateCode}
          </Label>
          <Controller
            name="stateCode"
            defaultValue=""
            control={control}
            rules={{
              required: ErrorMessageInput.inputRequire(NameInput.stateCode),
              pattern: {
                value: rgxNumber,
                message: ErrorMessageInput.notNumber,
              },
              minLength: {
                value: 5,
                message: ErrorMessageInput.minNumber(5),
              },
              maxLength: {
                value: 5,
                message: ErrorMessageInput.maxNumber(5),
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                id="state-code"
                type="text"
                onBlur={onBlur}
                placeholder="C.P."
                onChange={({ target: { value: val } }) => {
                  return onChange(
                    rgxNumber.test(val) ? val : val.slice(0, val.length - 1),
                  );
                }}
                value={value}
                error={errors.stateCode}
                messageError={errors.stateCode?.message}
              />
            )}
          />
        </div>

        <div css={xw`mb-4`}>
          <Label id="label-country" htmlFor="country">
            País
          </Label>
          <p css={xw`mt-3`}>México</p>
        </div>
      </div>

      <div css={xw`mb-4`}>
        <Label id="label-reference" htmlFor="reference">
          {NameInput.reference}
        </Label>
        <Textarea
          id="reference"
          maxLength={255}
          counter={reference}
          placeholder="Ingrese alguna descripción del domicilio, cruces, etc"
          register={{
            ...register('reference', {
              required: ErrorMessageInput.inputRequire(NameInput.reference),
              maxLength: {
                value: 255,
                message: ErrorMessageInput.max(255),
              },
            }),
          }}
          error={errors.reference}
          messageError={errors.reference?.message}
        />
      </div>

      <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Zona</h2>

      <div css={xw`mb-4`}>
        <Label id="label-zone" htmlFor="zone">
          {NameInput.zone}
        </Label>
        <Textarea
          id="zone"
          maxLength={255}
          counter={zone}
          placeholder="Describe puntos importantes de la zona, por ejemplo seguridad, servicios o instituciones cercanas"
          register={{
            ...register('zone', {
              required: ErrorMessageInput.inputRequire(NameInput.zone),
              maxLength: {
                value: 255,
                message: ErrorMessageInput.max(255),
              },
            }),
          }}
          error={errors.zone}
          messageError={errors.zone?.message}
        />
      </div>
    </div>
  </div>
);

export default UbicationStep2;
