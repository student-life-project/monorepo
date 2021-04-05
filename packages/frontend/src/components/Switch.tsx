import { memo } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';

type ISwitch = {
  name?: string;
  label?: string;
  checked: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Container = styled.label`
  ${xw`
    my-1
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

  ${({ disabled }) => disabled && xw`bg-gray-100 cursor-not-allowed`}
`;

const Span = styled.label`
  ${xw`
    h-6 
    block
    bg-gray-100 
    rounded-full 
    cursor-pointer
    overflow-hidden 
  `}
`;

const Switch: React.FC<ISwitch> = ({ name, label, checked, ...props }) => (
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

export default memo(Switch);
