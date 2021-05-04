import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';
import xw from 'xwind';

import { IBreadCrumb } from '@/types';

interface IBreadCrumbs {
  items: IBreadCrumb[];
}

const BreadCrumbs: FC<IBreadCrumbs> = ({ items }) => {
  return (
    <ul css={xw`w-full flex pb-4 shadow px-4`}>
      {items.map((item, index) => (
        <li key={item.text} css={xw`flex items-center`}>
          <Link href={item.link}>
            <a
              css={xw`mr-2 text-blue-600 hover:text-blue-800 cursor-pointer text-center`}
            >
              {item.text}
            </a>
          </Link>
          {index !== items.length - 1 && (
            <FontAwesomeIcon
              icon={faChevronRight}
              height="1rem"
              css={xw`mx-4`}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
