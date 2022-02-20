// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import Modal from '@/components/common/Modal';
import Select from '@/components/common/Select';
import { IFilters, IOption } from '@/types';

interface IFilterAndSort {
  sorts: IOption[];
  filters: IFilters;
}

const Container = styled.section`
  ${xw`
    flex
    pb-4
    px-4
    pt-20
    w-full
    border-b
    items-end
    font-montserrat
    border-secondary-2
  `}
`;

const DoubleFormSpace = styled.div`
  ${xw`
    grid
    gap-x-4
    grid-rows-2
    md:grid-rows-1
    md:grid-cols-2
  `}
`;

const FilterAndSort: FC<IFilterAndSort> = ({ sorts, filters }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <div css={xw`w-6/12 lg:w-80`}>
        <Select
          id="order"
          name="order"
          options={sorts}
          optionName="Ordenar por"
        />
      </div>

      <Button
        BPrimary
        type="button"
        onClick={openModal}
        css={xw`ml-5 w-6/12 lg:w-80 h-10`}
      >
        <span css={xw`mr-5`}>Filtar</span>
        <FontAwesomeIcon icon={faFilter} height="1rem" />
      </Button>

      {showModal && (
        <Modal title="Filtrar por:" close={closeModal}>
          <h2 css={xw`py-4 text-lg font-bold`}>Tipo de anuncio</h2>
          <div css={xw`flex flex-wrap flex-col`}>
            <div css={xw`flex flex-wrap items-start justify-start`}>
              {filters?.adType?.map((item) => {
                const value = Object.values(item)[0];

                return (
                  <div css={xw`w-full sm:w-1/2`} key={value}>
                    <Checkbox name={value} label={value} checked={false} />
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
                    <Checkbox name={value} label={value} checked={false} />
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
                    <Checkbox name={value} label={value} checked={false} />
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
                    <Checkbox name={value} label={value} checked={false} />
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
                    <Checkbox name={value} label={value} checked={false} />
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
                    <Checkbox name={value} label={value} checked={false} />
                  </div>
                );
              })}
            </div>
          </div>

          <DoubleFormSpace>
            <div css={xw`mt-5 sm:mb-2`}>
              <Button
                BSecondary
                type="button"
                css={xw`w-full`}
                onClick={closeModal}
              >
                Cancelar
              </Button>
            </div>

            <div css={xw`mt-5 sm:mb-2`}>
              <Button type="submit" FPrimary css={xw`w-full`}>
                Aplicar filtros
              </Button>
            </div>
          </DoubleFormSpace>
        </Modal>
      )}
    </Container>
  );
};

export default FilterAndSort;
