import { FC } from 'react';
import xw from 'xwind';

type IStatus = {
  status: boolean;
  options: Array<string>;
};

const Status: FC<IStatus> = ({ status, options }) => {
  const [one, two] = options;
  const css = status
    ? xw`bg-green-200 py-1 px-2 rounded-md text-green-700`
    : xw`bg-red-200 py-1 px-2 rounded-md text-red-700`;

  return (
    <div css={css}>
      <p css={xw`font-bold`}>{status ? one : two}</p>
    </div>
  );
};

export default Status;
