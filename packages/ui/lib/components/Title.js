import { css } from '@emotion/react';
import styled from '@emotion/styled';
const Title = styled.h1 `
  color: red;
  ${({ hasBorder }) => hasBorder &&
    css `
      border: solid 1px red;
    `}

  & > h2 {
    color: green;
  }
`;
export default Title;
//# sourceMappingURL=Title.js.map