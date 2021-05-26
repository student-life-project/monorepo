/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC, memo } from 'react';

interface IClampedText {
  lines: number;
  noClamp?: boolean;
  children: React.ReactNode;
}

const ClampContainer = styled.p<IClampedText>`
  display: box;
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  line-clamp: ${(props) => (props.noClamp ? 'none' : props.lines)};
  -webkit-line-clamp: ${(props) => (props.noClamp ? 'none' : props.lines)};

  ${xw`
    break-words
    overflow-hidden
  `}
`;

const ClampedText: FC<IClampedText> = ({ lines, noClamp, children }) => (
  <ClampContainer lines={lines} noClamp={noClamp}>
    {children}
  </ClampContainer>
);

export default memo(ClampedText);
