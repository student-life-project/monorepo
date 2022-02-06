/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';

const CenteredBody = styled.section`
  ${xw`
    flex
    mx-auto
    h-screen
    flex-col
    container
    break-words
    items-center
    justify-center
    font-montserrat
    text-secondary-1
  `}
`;

export default CenteredBody;
