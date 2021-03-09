import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import README from './README.md';
import Button from './index';
const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addParameters({
    readme: {
        content: README,
    },
});
stories.add('default', () => {
    const hasOnClick = boolean('Has onClick', true);
    return (_jsx(Button, Object.assign({ onClick: hasOnClick ? action('clicked') : undefined, color: color('Custom color', ''), disabled: boolean('Disabled', false) }, { children: text('Label', 'I am a button') }), void 0));
});
//# sourceMappingURL=button.stories.js.map