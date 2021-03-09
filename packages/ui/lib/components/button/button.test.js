import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { fireEvent, render } from '@testing-library/react';
import Button from '.';
describe('Button', () => {
    let props;
    beforeEach(() => {
        props = {
            children: _jsx("div", { children: "I am a button" }, void 0),
            onClick: jest.fn(),
            disabled: false,
            type: 'submit',
            color: '',
            dataTestId: 'button',
        };
    });
    describe('actions', () => {
        it('triggers the callback when clicked', () => {
            const { getByTestId } = render(_jsx(Button, Object.assign({}, props), void 0));
            const button = getByTestId('button');
            fireEvent.click(button);
            expect(props.onClick).toHaveBeenCalledTimes(1);
        });
        it('does not trigger the callback when clicked if the button is disabled', () => {
            props.disabled = true;
            const { getByTestId } = render(_jsx(Button, Object.assign({}, props), void 0));
            const button = getByTestId('button');
            fireEvent.click(button);
            expect(props.onClick).toHaveBeenCalledTimes(0);
        });
    });
    describe('render()', () => {
        it('renders a submit button', () => {
            const { container } = render(_jsx(Button, Object.assign({}, props), void 0));
            expect(container.firstChild).toMatchSnapshot();
        });
        it('renders a reset button', () => {
            props.type = 'reset';
            const { container } = render(_jsx(Button, Object.assign({}, props), void 0));
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});
//# sourceMappingURL=button.test.js.map