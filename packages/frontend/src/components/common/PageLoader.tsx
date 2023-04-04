// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

import Spinner from './Spinner';

type TProps = {
  large?: boolean;
  contentHeight?: boolean;
};

const Content = styled.button<TProps>`
  ${xw`
    flex
    w-full
    h-screen
    items-center
    justify-center
  `}

  ${({ contentHeight }) => contentHeight && xw`h-full`}
`;

const PageLoader: FC<TProps> = ({ large, contentHeight }) => (
  <Content contentHeight={contentHeight}>
    <Spinner large={large} />
  </Content>
);

export default PageLoader;
