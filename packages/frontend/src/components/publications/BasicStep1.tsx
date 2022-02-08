// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { ERentalPlace } from '@student_life/common';
import { FC } from 'react';
import { Control, FieldValues, UseFormRegister } from 'react-hook-form';

import Checkbox from '@/components/common/Checkbox';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import Radio from '@/components/common/Radio';
import Select from '@/components/common/Select';
import { ErrorMessageInput, NameInput, Reason, TypeSpace } from '@/constants';
import { rgxPrice } from '@/utils/validations';

type TBasicStep1 = {
  register: UseFormRegister<FieldValues>;
  errors: any;
  Controller: any;
  control: Control<FieldValues>;
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

const BasicStep1: FC<TBasicStep1> = ({
  register,
  errors,
  Controller,
  control,
}) => (
  <div css={xw`flex justify-center mb-10`}>
    <div css={xw`w-full lg:w-8/12`}>
      <h2 css={xw`pb-3 text-lg font-bold`}>Tipo de anuncio</h2>

      <div css={xw`mb-4`}>
        <Label id="label-title" htmlFor="title">
          {NameInput.title}
        </Label>
        <Input
          id="title"
          type="text"
          placeholder="Ejemplo: Casa cerca de la universidad"
          register={{
            ...register('title', {
              required: ErrorMessageInput.inputRequire(NameInput.title),
              maxLength: {
                value: 50,
                message: ErrorMessageInput.max(50),
              },
            }),
          }}
          error={errors.title}
          messageError={errors.title?.message}
        />
      </div>

      <DoubleFormSpace>
        <div css={xw`mb-4`}>
          <Label id="label-reason" htmlFor="reason">
            {NameInput.reason}
          </Label>
          <Select
            id="reason"
            options={Reason}
            label={NameInput.reason}
            register={{
              ...register('reason', {
                required: ErrorMessageInput.inputRequire(NameInput.reason),
              }),
            }}
            error={errors.reason}
            messageError={errors.reason?.message}
          />
        </div>

        <div css={xw`mb-4`}>
          <Label id="label-type-space" htmlFor="type-space">
            {NameInput.typeSpace}
          </Label>
          <Select
            id="type-space"
            options={TypeSpace}
            label={NameInput.typeSpace}
            register={{
              ...register('typeSpace', {
                required: ErrorMessageInput.inputRequire(NameInput.typeSpace),
              }),
            }}
            error={errors.typeSpace}
            messageError={errors.typeSpace?.message}
          />
        </div>
      </DoubleFormSpace>

      <h2 css={xw`pt-10 pb-3 text-lg font-bold`}>Género preferido</h2>

      <div css={xw`grid grid-cols-1 sm:grid-cols-4`}>
        <Controller
          name="gender"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => {
            const gender = parseInt(value, 10);

            return (
              <>
                <Radio
                  name="man"
                  label="Hombre"
                  value={ERentalPlace.MAN}
                  onChange={onChange}
                  checked={gender === ERentalPlace.MAN}
                />

                <Radio
                  name="woman"
                  label="Mujer"
                  value={ERentalPlace.WOMAN}
                  onChange={onChange}
                  checked={gender === ERentalPlace.WOMAN}
                />

                <Radio
                  name="non-binary"
                  label="Non-binary"
                  value={ERentalPlace.NON_BINARY}
                  onChange={onChange}
                  checked={gender === ERentalPlace.NON_BINARY}
                />

                <Radio
                  name="no-preferences"
                  label="Sin preferencias"
                  value={ERentalPlace.NO_PREFERENCES}
                  onChange={onChange}
                  checked={gender === ERentalPlace.NO_PREFERENCES}
                />
              </>
            );
          }}
        />
      </div>

      <h2 css={xw`pt-11 pb-3 text-lg font-bold`}>Renta</h2>

      <div css={xw`grid grid-cols-1 sm:grid-cols-4 gap-5`}>
        <div css={xw`mb-4 col-span-2`}>
          <Label id="label-price" htmlFor="price">
            {NameInput.price}
          </Label>
          <Controller
            name="price"
            defaultValue=""
            control={control}
            rules={{
              required: ErrorMessageInput.inputRequire(NameInput.price),
              pattern: {
                value: rgxPrice,
                message: ErrorMessageInput.notNumber,
              },
              min: {
                value: 1,
                message: ErrorMessageInput.priceValid,
              },
            }}
            render={({ field: { onChange, onBlur, value = '' } }) => (
              <Input
                id="price"
                type="text"
                onBlur={onBlur}
                placeholder="$"
                onChange={({ target: { value: val } }) => {
                  return onChange(
                    rgxPrice.test(val) ? val : val.slice(0, val.length - 1),
                  );
                }}
                value={value}
                error={errors.price}
                messageError={errors.price?.message}
              />
            )}
          />
        </div>

        <div css={xw`mb-4`}>
          <Label id="label-time" htmlFor="time">
            Pago por
          </Label>
          <p css={xw`mt-3`}>Mes</p>
        </div>

        <div css={xw`mb-4`}>
          <Label
            id="label-availability"
            htmlFor="availability"
            css={xw`block mt-1 sm:mt-0`}
          >
            Disponibilidad
          </Label>
          <Controller
            name="availability"
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange, value = true } }) => (
              <Checkbox
                name="available"
                label="Disponible"
                onChange={onChange}
                checked={value}
              />
            )}
          />
        </div>
      </div>
    </div>
  </div>
);

export default BasicStep1;
