import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import DataTable from 'react-data-table-component';
import xw from 'xwind';

import Button from './Button';
import Input from './Input';
import Spinner from './Spinner';
import Title from './Title';

type THeaderTable = {
  values: {
    title: string;
    search: boolean;
    link: string;
    textLink: string;
    onChange: ({ target }: any) => void;
  };
};

type TTable = {
  data: Array<any>;
  loading: boolean;
  columns: Array<any>;
  header: any;
  linkRow: string;
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

const HeaderTable: FC<THeaderTable> = ({ values }) => (
  <section css={xw`py-10 flex flex-col w-full sm:flex-row sm:justify-between`}>
    <Title css={xw`my-0`}>{values.title}</Title>

    <div css={xw`flex flex-col sm:flex-row`}>
      {values.search && (
        <Input
          required
          type="text"
          onChange={values.onChange}
          id={`search-${values.title.toLowerCase()}`}
          css={xw`w-full lg:w-80 h-10 my-5 sm:my-0 sm:mx-5`}
          placeholder={`Buscar ${values.title.toLowerCase()}`}
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

const Table: FC<TTable> = ({ data, loading, columns, header, linkRow }) => {
  const router = useRouter();

  const handleRowClicked = (row) => {
    router.push(`${linkRow}${row._id}`);
  };

  return (
    <>
      <HeaderTable values={header} />
      <DataTable
        noHeader
        pagination
        data={data}
        fixedHeader
        highlightOnHover
        columns={columns}
        onRowClicked={handleRowClicked}
        customStyles={customStyles}
        fixedHeaderScrollHeight="600px"
        progressPending={loading}
        progressComponent={<Spinner />}
        paginationComponentOptions={paginationOptions}
        noDataComponent="No hay registros para mostrar"
      />
    </>
  );
};

export default Table;
