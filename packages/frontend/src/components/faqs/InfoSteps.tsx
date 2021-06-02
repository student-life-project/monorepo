// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import { FC } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IInfoStep } from '@/types';

interface IInfoSteps {
  steps: IInfoStep[];
}

const ContentSteps = styled.section`
  ${xw`
    flex
    px-4
    mb-12
    mx-auto
    flex-wrap
    container
    break-words
    text-justify
    text-secondary-1
  `}
`;

const ItemStep = styled.div`
  ${xw`
    flex
    pt-10
    pb-20
    mx-auto
    relative
    md:w-2/3
    sm:items-center
  `}
`;

const ContentLine = styled.div`
  ${xw`
    w-6
    flex
    h-full
    inset-0
    absolute
    items-center
    justify-center
  `}
`;

const Line = styled.div`
  ${xw`
    w-1
    h-full
    bg-secondary-2
    pointer-events-none
  `}
`;

const NumberStep = styled.div`
  ${xw`
    w-6
    h-6
    z-10
    mt-10
    sm:mt-0
    text-sm
    relative
    text-white
    bg-primary
    font-medium
    inline-flex
    items-center
    rounded-full
    flex-shrink-0
    justify-center
  `}
`;

const InfoContent = styled.div`
  ${xw`
    flex
    pl-6
    md:pl-8
    flex-col
    flex-grow
    items-start
    sm:flex-row
    sm:items-center
  `}
`;

const IconContent = styled.div`
  ${xw`
    w-24
    h-24
    inline-flex
    bg-blue-100
    items-center
    rounded-full
    text-primary
    flex-shrink-0
    justify-center
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    w-12
    h-12
  `}
`;

const InfoStep = styled.div`
  ${xw`
    mt-6
    sm:pl-6
    sm:mt-0
    flex-grow
  `}
`;

const Title = styled.h2`
  ${xw`
    mb-1
    text-xl
    font-medium
    text-gray-900
  `}
`;

const Text = styled.p`
  ${xw`
    leading-relaxed
  `}
`;

const InfoSteps: FC<IInfoSteps> = ({ steps }) => (
  <ContentSteps>
    {steps.map((step, index) => (
      <ItemStep key={`step_${step.title}`}>
        <ContentLine>
          <Line />
        </ContentLine>
        <NumberStep>{index + 1}</NumberStep>
        <InfoContent>
          <IconContent>
            <Icon icon={step.icon} />
          </IconContent>
          <InfoStep>
            <Title>{step.title}</Title>
            <Text>{step.text}</Text>
          </InfoStep>
        </InfoContent>
      </ItemStep>
    ))}
  </ContentSteps>
);

export default InfoSteps;
