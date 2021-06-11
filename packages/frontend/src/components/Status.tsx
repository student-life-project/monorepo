import { FC } from 'react';
import xw from 'xwind';

type IStatus = {
  status: boolean;
};

const Status: FC<IStatus> = ({ status }) => {
  const css = status
    ? xw`bg-green-200 py-1 px-2 rounded-md text-green-600`
    : xw`bg-red-200 py-1 px-2 rounded-md text-red-600`;

  return (
    <div css={css}>
      <p css={xw`font-bold`}>{status ? 'Disponible' : 'No disponible'}</p>
    </div>
  );
};

export default Status;
