import { FC, useState } from 'react';
import xw from 'xwind';

import Button from '@/components/Button';
import ClampedText from '@/components/common/ClampedText';

interface IInfoCad {
  clampedLines: number;
  title: string;
  body: string;
}

const InfoCard: FC<IInfoCad> = ({ clampedLines, title, body }) => {
  const [showMore, setShowMore] = useState(false);

  const onClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <p css={xw`text-lg font-semibold mb-4`}>{title}</p>
      <ClampedText lines={clampedLines} noClamp={showMore}>
        {body}
      </ClampedText>
      <Button BPrimary css={xw`mt-4`} onClick={onClick}>
        {!showMore ? 'Saber más' : 'Saber menos'}
      </Button>
    </div>
  );
};

export default InfoCard;
