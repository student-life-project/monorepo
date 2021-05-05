/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';

const Anchor = styled.a`
  ${xw`
    text-blue-600
    hover:text-blue-800
    cursor-pointer
    text-center
  `}
`;

export default Anchor;
