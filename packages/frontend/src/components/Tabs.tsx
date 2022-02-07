import { FC } from 'react';
import xw from 'xwind';

import Button from '@/components/Button';
import { Itab } from '@/types';

type TTabs = {
  items: Itab[];
};

const Tabs: FC<TTabs> = ({ items }) => (
  <div css={xw`flex flex-wrap justify-center pt-7 px-4`}>
    {items.map((item, index) => (
      <Button
        BPrimary
        type="button"
        key={item.text}
        css={xw`mb-3 mr-3`}
        onClick={() => item.handleTab(index)}
      >
        {item.text}
      </Button>
    ))}
  </div>
);

export default Tabs;
