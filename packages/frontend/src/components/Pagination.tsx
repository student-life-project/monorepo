// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';
import xw from 'xwind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination: FC = () => (
  <div css={xw`flex flex-col items-center my-12`}>
    <div css={xw`flex`}>
      <FontAwesomeIcon
        icon={faAngleLeft}
        css={xw`h-8 w-8 mr-1 flex justify-center items-center rounded-full cursor-pointer`}
      />

      <div css={xw`flex h-8 font-medium rounded-full `}>
        <div
          css={xw`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full`}
        >
          1
        </div>
        <div
          css={xw`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full`}
        >
          ...
        </div>
        <div
          css={xw`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full`}
        >
          3
        </div>
        <div
          css={xw`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-primary text-white`}
        >
          4
        </div>
        <div
          css={xw`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full`}
        >
          5
        </div>
        <div
          css={xw`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full`}
        >
          ...
        </div>
        <div
          css={xw`w-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in  rounded-full`}
        >
          15
        </div>
        <div
          css={xw`w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-pink-600 text-white`}
        >
          4
        </div>
      </div>

      <FontAwesomeIcon
        icon={faAngleRight}
        css={xw`h-8 w-8 ml-1 flex justify-center items-center rounded-full cursor-pointer`}
      />
    </div>
  </div>
);

export default Pagination;
