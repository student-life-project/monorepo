// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Select from '../Select';
import Modal from '../Modal';

type IFilterAndSort = {
  sorts: Array;
  filters: Array;
};

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
        <Select name="order" id="order">
          <option value="" selected>
            Ordenar por
          </option>
          {sorts.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.name}
            </option>
          ))}
        </Select>
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
          <div css={xw`flex flex-wrap`}>
            <div css={xw`flex flex-wrap items-start justify-start`}>
              {filters.adType.map((item) => (
                <div css={xw`w-full sm:w-1/2`} key={item.key}>
                  <Checkbox name={item.key} label={item.key} checked={false} />
                </div>
              ))}
            </div>
          </div>

          <h2 css={xw`py-4 text-lg font-bold`}>Género preferido</h2>
          <div css={xw`flex flex-wrap`}>
            <div css={xw`flex flex-wrap items-start justify-start`}>
              {filters.preferredGenre.map((item) => (
                <div css={xw`w-full sm:w-1/2`} key={item.key}>
                  <Checkbox name={item.key} label={item.key} checked={false} />
                </div>
              ))}
            </div>
          </div>

          <h2 css={xw`py-4 text-lg font-bold`}>Servicios</h2>
          <div css={xw`flex flex-wrap`}>
            <div css={xw`flex flex-wrap items-start justify-start`}>
              {filters.services.map((item) => (
                <div css={xw`w-full sm:w-2/6`} key={item.key}>
                  <Checkbox name={item.key} label={item.key} checked={false} />
                </div>
              ))}
            </div>
          </div>

          <h2 css={xw`py-4 text-lg font-bold`}>Reglas de la vivienda</h2>
          <div css={xw`flex flex-wrap`}>
            <div css={xw`flex flex-wrap items-start justify-start`}>
              {filters.rules.map((item) => (
                <div css={xw`w-full sm:w-2/6`} key={item.key}>
                  <Checkbox name={item.key} label={item.key} checked={false} />
                </div>
              ))}
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
