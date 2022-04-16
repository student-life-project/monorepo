// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

const Content = styled.div`
  ${xw`
    flex
    w-full
    sm:gap-10
    sm:flex-row
    justify-center
    flex-col-reverse
    sm:justify-between
  `}
`;

type TDoubleSpace = {
  classNames?: string;
  children: React.ReactNode;
};

const DoubleSpace: FC<TDoubleSpace> = ({ classNames, children }) => (
  <Content css={classNames}>{children}</Content>
);

export default DoubleSpace;
