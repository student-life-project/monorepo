// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';

import { IBreadCrumb } from '@/types';

import Anchor from './Anchor';

interface IBreadCrumbs {
  items: IBreadCrumb[];
}

const ListContent = styled.ul`
  ${xw`
    flex
    pb-4
    px-4
    pt-20
    w-full
    border-b
    border-secondary-2
  `}
`;

const List = styled.li`
  ${xw`
    flex
    items-center
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    mx-4
    text-secondary-1
  `}
`;

const BreadCrumbs: FC<IBreadCrumbs> = ({ items }) => (
  <ListContent>
    {items.map((item, index) => (
      <List key={item.text}>
        <Link href={item.link}>
          <Anchor>{item.text}</Anchor>
        </Link>
        {index !== items.length - 1 && (
          <div>
            <Icon icon={faChevronRight} height="1rem" />
          </div>
        )}
      </List>
    ))}
  </ListContent>
);

export default BreadCrumbs;
