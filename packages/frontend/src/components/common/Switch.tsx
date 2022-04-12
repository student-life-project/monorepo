// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

type TSwitch = {
  name?: string;
  label?: React.ReactChild | string;
  checked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Container = styled.label`
  ${xw`
    my-1
    flex
    items-center
  `}
`;

const Content = styled.label`
  ${xw`
    w-10
    mr-2
    ease-in
    relative
    transition
    select-none
    duration-200
    align-middle
    inline-block
  `}
`;

const Label = styled.label`
  ${xw`
    ml-2
    text-gray-700
  `}
`;

const Input = styled.input`
  ${xw`
    w-6
    h-6
    block
    absolute
    bg-white
    border-4
    focus:ring-1
    rounded-full
    cursor-pointer
    appearance-none
    checked:right-0
    focus:outline-none
    checked:bg-blue-600
    focus:border-blue-300
  `}

  ${({ disabled }) => disabled && xw`bg-gray-300 cursor-not-allowed`}
`;

const Span = styled.label`
  ${xw`
    h-6
    block
    bg-gray-300
    rounded-full
    cursor-pointer
    overflow-hidden
  `}
`;

const Switch: FC<TSwitch> = ({ name, label, checked, ...props }) => (
  <Container>
    <Content>
      <Input id={name} type="checkbox" checked={checked} {...props} />
      <Span />
    </Content>

    <Label id={`label-${name}`} htmlFor={name}>
      {label}
    </Label>
  </Container>
);

export default Switch;
