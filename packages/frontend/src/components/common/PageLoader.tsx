import { FC } from 'react';
import xw from 'xwind';

import Spinner from './Spinner';

const PageLoader: FC = () => (
  <div css={xw`w-full h-screen flex justify-center items-center`}>
    <Spinner large />
  </div>
);

export default PageLoader;
