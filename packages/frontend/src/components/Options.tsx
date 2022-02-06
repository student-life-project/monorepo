// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';
import { FC, useState } from 'react';

type IOptions = {
  children: any;
};

const Menu = styled.ul`
  ${xw`
    w-40
    z-50
    mr-20
    top-0
    border
    right-0
    bg-white
    absolute
    rounded-sm
  `}
`;

const Item = styled.li`
  ${xw`
    p-4
    flex
    w-full
    text-sm
    border-b
    font-semibold
    cursor-pointer
    hover:bg-blue-100
  `}
`;

const renderItem = (child, index) => {
  if (child.type === 'button') {
    return (
      <Item key={index} onClick={child.props.onClick}>
        {child.props.children}
      </Item>
    );
  }

  if (child.type === 'a') {
    return (
      <NextLink key={index} href={child.props.href}>
        <Item>{child.props.children}</Item>
      </NextLink>
    );
  }

  return null;
};

const Options: FC<IOptions> = ({ children }) => {
  const [show, setshow] = useState(false);

  const handleShowOptions = () => {
    setshow((state) => !state);
  };

  return (
    <div>
      <button
        type="button"
        css={xw`py-3 px-4 text-gray-400`}
        onClick={handleShowOptions}
      >
        <FontAwesomeIcon icon={faEllipsisV} height="1.2rem" />
      </button>

      {show && <Menu>{children && children.map(renderItem)}</Menu>}
    </div>
  );
};

export default Options;
