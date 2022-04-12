// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';

const ButtonLink = styled.button`
  ${xw`
    flex
    text-left
    text-primary
    cursor-pointer
    hover:underline
  `}
`;

export default ButtonLink;
