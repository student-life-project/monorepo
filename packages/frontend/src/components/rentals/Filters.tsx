// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IFilters } from '@/types';

import Button from '../common/Button';
import Checkbox from '../common/Checkbox';
import Modal from '../common/Modal';

const DoubleSpace = styled.div`
  ${xw`
    flex
    w-full
    sm:gap-10
    sm:flex-row
    justify-center
    flex-col-reverse
    sm:justify-between
  `}
`;

type TFilter = {
  filters: IFilters;
  closeModal: () => void;
};

const Filters: FC<TFilter> = ({ filters, closeModal }) => {
  // TODO: need to implement

  const { register, handleSubmit } = useForm({
    defaultValues: {
      adType: [],
      reason: [],
      gender: [],
      services: [],
      rules: [],
      security: [],
    },
    mode: 'all',
  });

  const onSubmit: SubmitHandler<TFilter> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Filtrar por:" close={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 css={xw`py-4 text-lg font-bold`}>Tipo de anuncio</h2>
        <div css={xw`flex flex-wrap flex-col`}>
          <div css={xw`flex flex-wrap items-start justify-start`}>
            {filters?.adType?.map((item) => {
              const value = Object.values(item)[0];

              return (
                <div css={xw`w-full sm:w-1/2`} key={value}>
                  <Checkbox
                    name={value}
                    label={value}
                    value={value}
                    register={{ ...register('adType') }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <h2 css={xw`py-4 text-lg font-bold`}>Motivo de la publicación</h2>
        <div css={xw`flex flex-wrap flex-col`}>
          <div css={xw`flex flex-wrap items-start justify-start`}>
            {filters?.reason?.map((item) => {
              const value = Object.values(item)[0];

              return (
                <div css={xw`w-full sm:w-1/2`} key={value}>
                  <Checkbox
                    name={value}
                    label={value}
                    value={value}
                    register={{ ...register('reason') }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <h2 css={xw`py-4 text-lg font-bold`}>Género preferido</h2>
        <div css={xw`flex flex-wrap flex-col`}>
          <div css={xw`flex flex-wrap items-start justify-start`}>
            {filters?.gender?.map((item) => {
              const value = Object.values(item)[0];

              return (
                <div css={xw`w-full sm:w-1/2`} key={value}>
                  <Checkbox
                    name={value}
                    label={value}
                    value={value}
                    register={{ ...register('gender') }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <h2 css={xw`py-4 text-lg font-bold`}>Servicios</h2>
        <div css={xw`flex flex-wrap flex-col`}>
          <div css={xw`flex flex-wrap items-start justify-start`}>
            {filters?.services?.map((item) => {
              const value = Object.values(item)[0];

              return (
                <div css={xw`w-full sm:w-1/2`} key={value}>
                  <Checkbox
                    name={value}
                    label={value}
                    value={value}
                    register={{ ...register('services') }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <h2 css={xw`py-4 text-lg font-bold`}>Reglas</h2>
        <div css={xw`flex flex-wrap flex-col`}>
          <div css={xw`flex flex-wrap items-start justify-start`}>
            {filters?.rules?.map((item) => {
              const value = Object.values(item)[0];

              return (
                <div css={xw`w-full sm:w-1/2`} key={value}>
                  <Checkbox
                    name={value}
                    label={value}
                    value={value}
                    register={{ ...register('rules') }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <h2 css={xw`py-4 text-lg font-bold`}>Seguridad</h2>
        <div css={xw`flex flex-wrap flex-col mb-10`}>
          <div css={xw`flex flex-wrap items-start justify-start`}>
            {filters?.security?.map((item) => {
              const value = Object.values(item)[0];

              return (
                <div css={xw`w-full sm:w-1/2`} key={value}>
                  <Checkbox
                    name={value}
                    label={value}
                    value={value}
                    register={{ ...register('security') }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <DoubleSpace>
          <div css={xw`mt-5 sm:mb-2 w-full`}>
            <Button
              BSecondary
              type="button"
              css={xw`w-full`}
              onClick={closeModal}
            >
              Cancelar
            </Button>
          </div>

          <div css={xw`mt-5 sm:mb-2 w-full`}>
            <Button type="submit" FPrimary css={xw`w-full`}>
              Aplicar filtros
            </Button>
          </div>
        </DoubleSpace>
      </form>
    </Modal>
  );
};

export default Filters;
