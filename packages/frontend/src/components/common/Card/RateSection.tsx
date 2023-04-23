// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface IRateSection {
  likes: number;
}

const Content = styled.div`
  ${xw`
    flex
    my-3
    w-full
    items-center
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    mr-1
    stroke-1
    font-thin
    text-primary
  `}
`;

const Text = styled.p`
  ${xw`
    text-sm
    text-secondary-1
  `}
`;

const RateSection: FC<IRateSection> = ({ likes }) => (
  <Content>
    <Icon icon={faThumbsUp as IconProp} height="1rem" />
    <Text>{likes} Me gusta</Text>
  </Content>
);

export default RateSection;
