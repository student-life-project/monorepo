import styled from '@emotion/styled';
import { FC } from 'react';

type TProps = {
  large?: boolean;
};

const Loader = styled.div<TProps>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  animation: spin 1s ease infinite;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #2a96d6 !important;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ${({ large }) =>
    large &&
    `
      width: 100px;
      height: 100px;
      border-width: 10px;
    `}
`;

const Spinner: FC<TProps> = ({ large }) => <Loader large={large} />;

export default Spinner;
