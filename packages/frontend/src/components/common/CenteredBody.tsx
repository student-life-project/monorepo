/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';

const CenteredBody = styled.section`
  ${xw`
    container h-screen flex flex-col items-center justify-center mx-auto font-montserrat break-words
  `}
`;

export default CenteredBody;
