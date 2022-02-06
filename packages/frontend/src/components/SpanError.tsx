// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';

const Span = styled.span`
  ${xw`
    mt-1 
    ml-1
    flex 
    text-xs 
    font-medium 
    items-center
    text-red-500 
    tracking-wide
  `}
`;

const SpanError = ({ children }) => <Span>{children}</Span>;

export default SpanError;
