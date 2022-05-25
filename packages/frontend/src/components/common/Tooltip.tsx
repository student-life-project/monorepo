import { FC, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

import { TTooltipType } from '@/types';

type TTooltip = {
  id: string;
  type: TTooltipType;
  children: React.ReactNode;
};

const Tooltip: FC<TTooltip> = ({ id, type, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <ReactTooltip id={id} type={type}>
          {children}
        </ReactTooltip>
      )}
    </>
  );
};

export default Tooltip;
