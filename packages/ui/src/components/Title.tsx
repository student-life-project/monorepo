import React from 'react';
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ITitle {
    hasBorder: boolean;
}

const Title = styled.h1<ITitle>`
color: red;
${({hasBorder}) => hasBorder && css`border: solid 1px red;`}

& > h2 {
    color: green;
}
`

export default Title
