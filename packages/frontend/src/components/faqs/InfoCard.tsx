// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, useState } from 'react';

import Button from '@/components/common/Button';
import ClampedText from '@/components/common/ClampedText';

interface IInfoCad {
  body: string;
  link?: string;
  title: string;
  clampedLines: number;
}

const Title = styled.h2`
  ${xw`
    mb-4
    text-lg
    font-semibold
  `}
`;

const InfoCard: FC<IInfoCad> = ({ clampedLines, title, body, link }) => {
  const [showMore, setShowMore] = useState(false);

  const onClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <Title>{title}</Title>
      <ClampedText lines={clampedLines} noClamp={showMore}>
        {body}
      </ClampedText>
      {link ? (
        <Button BPrimary css={xw`mt-4`}>
          <a href={link}>Saber más</a>
        </Button>
      ) : (
        <Button BPrimary css={xw`mt-4`} onClick={onClick}>
          {!showMore ? 'Saber más' : 'Saber menos'}
        </Button>
      )}
    </div>
  );
};

export default InfoCard;
