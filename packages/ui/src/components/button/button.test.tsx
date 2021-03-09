import { fireEvent, render } from '@testing-library/react';

import Button, { Props } from '.';

describe('Button', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      children: <div>I am a button</div>,
      onClick: jest.fn(),
      disabled: false,
      type: 'submit',
      color: '',
      dataTestId: 'button',
    };
  });

  describe('actions', () => {
    it('triggers the callback when clicked', () => {
      const { getByTestId } = render(<Button {...props} />);
      const button = getByTestId('button');

      fireEvent.click(button);

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger the callback when clicked if the button is disabled', () => {
      props.disabled = true;
      const { getByTestId } = render(<Button {...props} />);
      const button = getByTestId('button');

      fireEvent.click(button);

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('render()', () => {
    it('renders a submit button', () => {
      const { container } = render(<Button {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('renders a reset button', () => {
      props.type = 'reset';

      const { container } = render(<Button {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
