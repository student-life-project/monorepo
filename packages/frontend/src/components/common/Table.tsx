import NextLink from 'next/link';
import { FC } from 'react';
import DataTable from 'react-data-table-component';
import xw from 'xwind';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Title from '@/components/common/Title';

type TTable = {
  data: Array<any>;
  columns: Array<any>;
  header: any;
};

const customStyles = {
  headCells: {
    style: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      fontSize: '0.875rem',
    },
  },
};

const paginationOptions = {
  selectAllRowsItem: true,
  rangeSeparatorText: 'de',
  selectAllRowsItemText: 'Todo',
  rowsPerPageText: 'Filas por página',
};

const HeaderTable = ({ values }) => (
  <section css={xw`py-10 flex flex-col w-full sm:flex-row sm:justify-between`}>
    <Title css={xw`my-0`}>{values.title}</Title>

    <div css={xw`flex flex-col sm:flex-row`}>
      {values.search && (
        <Input
          required
          type="text"
          id={`search-${values.title.toLowerCase()}`}
          placeholder={`Buscar ${values.title.toLowerCase()}`}
          css={xw`w-full lg:w-80 h-10 my-5 sm:my-0 sm:mx-5`}
        />
      )}

      {values.link && (
        <NextLink href={values.link}>
          <Button type="button" FPrimary css={xw`w-full lg:w-80 h-10`}>
            {values.textLink}
          </Button>
        </NextLink>
      )}
    </div>
  </section>
);

const Table: FC<TTable> = ({ data, columns, header }) => (
  <>
    <HeaderTable values={header} />
    <DataTable
      noHeader
      pagination
      data={data}
      fixedHeader
      highlightOnHover
      columns={columns}
      customStyles={customStyles}
      fixedHeaderScrollHeight="600px"
      paginationComponentOptions={paginationOptions}
    />
  </>
);

export default Table;
