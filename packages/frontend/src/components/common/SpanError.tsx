// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

type TSpanError = {
  children: React.ReactNode;
};

const Span = styled.span`
  ${xw`
    mt-1
    flex
    text-xs
    font-medium
    items-center
    text-red-500
    tracking-wide
  `}
`;

const SpanError: FC<TSpanError> = ({ children }) => <Span>{children}</Span>;

export default SpanError;
