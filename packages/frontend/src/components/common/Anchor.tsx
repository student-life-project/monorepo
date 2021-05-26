// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';

const Anchor = styled.a`
  ${xw`
    text-center
    text-primary
    cursor-pointer
    hover:underline
  `}
`;

export default Anchor;
