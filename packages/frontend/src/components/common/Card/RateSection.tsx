// eslint-disable-next-line simple-import-sort/imports
import { faStar } from '@fortawesome/free-regular-svg-icons';
// import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

interface IRateSection {
  score: string;
  scoreCount: number;
}

const Content = styled.div`
  ${xw`
    flex
    my-3
    w-full
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    mr-1
    stroke-1
    font-thin
    text-gray-400
  `}
`;

const Text = styled.p`
  ${xw`
    text-sm
    text-secondary-1
  `}
`;

const RateSection: FC<IRateSection> = ({ score, scoreCount }) => (
  <Content>
    <Icon icon={faStar} height="1rem" />
    <Text>
      {parseFloat(score)} ({scoreCount} evaluaciones)
    </Text>
  </Content>
);

export default RateSection;
