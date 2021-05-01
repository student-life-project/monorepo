/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

interface IClampedText {
  lines: number;
  noClamp?: boolean;
}

const ClampContainer = styled.p<IClampedText>`
  display: box;
  display: -webkit-box;
  line-clamp: ${(props) => (props.noClamp ? 'none' : props.lines)};
  box-orient: vertical;
  -webkit-line-clamp: ${(props) => (props.noClamp ? 'none' : props.lines)};
  -webkit-box-orient: vertical;
  ${xw`
    overflow-hidden
    break-words
  `}
`;

const ClampedText: FC<IClampedText> = ({ lines, noClamp, children }) => {
  return (
    <ClampContainer lines={lines} noClamp={noClamp}>
      {children}
    </ClampContainer>
  );
};

export default ClampedText;
