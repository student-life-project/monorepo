import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import styled from '@emotion/styled';
const ButtonStyled = styled.button `
  color: ${({ color, theme }) => {
    var _a;
    return color || ((_a = theme.colors) === null || _a === void 0 ? void 0 : _a.primary);
}};
  background-color: white;
  border-width: 1;
  border-color: ${({ color, theme }) => { var _a; return color || ((_a = theme.colors) === null || _a === void 0 ? void 0 : _a.primary); }};
  padding: 15px 32px;
  transition: all 250ms;

  &:not([disabled])&:hover {
    color: white;
    background-color: ${({ color, theme }) => { var _a; return color || ((_a = theme.colors) === null || _a === void 0 ? void 0 : _a.primary); }};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    opacity: 0.3;
    cursor: unset;
  }

  & label {
    font-weight: bold;
  }
`;
const Button = ({ children, onClick = () => 'empty', disabled = false, type = 'submit', color = '', dataTestId = 'button', }) => {
    const handleClick = () => {
        if (!disabled && onClick)
            onClick();
    };
    const rootProps = {
        color,
        type,
        onClick: handleClick,
        disabled,
        'data-testid': dataTestId,
    };
    return (_jsx(ButtonStyled, Object.assign({}, rootProps, { children: _jsx("span", { children: children }, void 0) }), void 0));
};
export default Button;
//# sourceMappingURL=index.js.map