// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
// import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EOrder } from '@student_life/common';
// import { FC, useState } from 'react';
import { FC } from 'react';

import { IFilters, IOption } from '@/types';

// import Button from '../common/Button';
import Select from '../common/Select';
// import Filters from './Filters';

interface IFilterAndSort {
  sorts: IOption[];
  filters: IFilters;
  totalPlaces: number;
  setItemsPerPage: (total: number) => void;
  onChangeSort: (sortBy: string, order: EOrder) => void;
  onChangeFilters: (filters: Record<string, string>[]) => void;
}

const ITEMS = [10, 20, 30, 40, 50];

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

const FilterAndSort: FC<IFilterAndSort> = ({
  sorts,
  // filters,
  totalPlaces,
  setItemsPerPage,
  onChangeSort,
}) => {
  let items: Record<string, number>[] = [];
  // const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => {
  //   setShowModal(!showModal);
  // };

  const handleItemsPerPage = ({ target }) => {
    const total = parseInt(target.value, 10);
    setItemsPerPage(total);
  };

  const handleOnChangeSort = ({ target }) => {
    const selectedSortGroup = target.value;

    //! ORDER LIKES WILL NOT BE DEVELOPED
    // if (selectedSortGroup === 'Mejor calificación') {
    //   onChangeSort('score', EOrder.asc);
    // }

    if (selectedSortGroup === 'Menor precio') {
      onChangeSort('price', EOrder.asc);
    }

    if (selectedSortGroup === 'Mayor precio') {
      onChangeSort('price', EOrder.desc);
    }
  };

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= totalPlaces; i += 10) {
    if (ITEMS.includes(i)) {
      items = [...items, { [i]: i }];
    }

    if (ITEMS[ITEMS.length - 1] === i) {
      break;
    }
  }

  if (items.length === 0) {
    items = [{ '10': 10 }, { '20': 20 }, { '30': 30 }];
  }

  return (
    <Container>
      <div css={xw`w-4/12 lg:w-40`}>
        <Select
          id="order"
          name="order"
          // ! ORDER LIKES WILL NOT BE DEVELOPED
          options={sorts.slice(1)}
          optionName="Ordenar por"
          onChange={handleOnChangeSort}
        />
      </div>

      <div css={xw`ml-5 w-20`}>
        <Select
          id="order"
          name="order"
          options={items}
          optionName="Ver"
          onChange={handleItemsPerPage}
        />
      </div>

      {/* <Button
        BPrimary
        type="button"
        onClick={handleShowModal}
        css={xw`ml-5 w-4/12 lg:w-40 h-10`}
      >
        <span css={xw`mr-5`}>Filtar</span>
        <FontAwesomeIcon icon={faFilter} height="1rem" />
      </Button>

      {showModal && <Filters filters={filters} closeModal={handleShowModal} />} */}
    </Container>
  );
};

export default FilterAndSort;
