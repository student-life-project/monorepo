import styled from '@emotion/styled';
import { FC } from 'react';

const Loader = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #2a96d6;
  animation: spin 1s ease infinite;
  border: 5px solid rgba(0, 0, 0, 0.1);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner: FC = () => <Loader />;

export default Spinner;
