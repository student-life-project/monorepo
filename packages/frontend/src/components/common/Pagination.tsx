import { css, Global } from '@emotion/react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import xw from 'xwind';

type TPagination = {
  pageCount: number;
  handlePageClick: (event: any) => void;
};

const Previous = () => (
  <FontAwesomeIcon
    icon={faAngleLeft}
    css={xw`h-8 w-8 mr-1 flex justify-center items-center rounded-full cursor-pointer`}
  />
);

const Next = () => (
  <FontAwesomeIcon
    icon={faAngleRight}
    css={xw`h-8 w-8 ml-1 flex justify-center items-center rounded-full cursor-pointer`}
  />
);

const Pagination: FC<TPagination> = ({ pageCount, handlePageClick }) => (
  <>
    <Global
      styles={css`
        .pagination {
          display: flex;
          flex-wrap: wrap;
          padding: 1rem 0.5rem;
          justify-content: center;
        }

        .page-item {
          height: 40px;
          display: flex;
          color: white;
          min-width: 40px;
          font-size: 1rem;
          color: #414140;
          font-weight: 500;
          border-radius: 50%;
          align-items: center;
          margin: auto 0.2rem;
          list-style-type: none;
          justify-content: center;
        }

        .active {
          color: white;
          background-color: #2a96d6;
        }
      `}
    />

    <ReactPaginate
      breakLabel="..."
      nextLabel={<Next />}
      pageCount={pageCount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      previousLabel={<Previous />}
      onPageChange={handlePageClick}
      pageClassName="page-item"
      previousClassName="page-item"
      nextClassName="page-item"
      breakClassName="page-item"
      containerClassName="pagination"
      activeClassName="active"
    />
  </>
);

export default Pagination;
