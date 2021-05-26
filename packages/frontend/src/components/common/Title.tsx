/* eslint-disable-next-line simple-import-sort/imports */
import { memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

const Title = styled.h1`
  ${xw`
    my-12
    text-3xl
    font-medium
    text-secondary-1
  `}
`;

export default memo(Title);
