// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Fragment } from 'react';

import { IStep } from '@/types';

interface ISteps {
  steps: IStep[];
  stepCurrent: number;
}

interface IStepCC {
  completed: boolean;
  stepCurrent: boolean;
}

interface ILine {
  completed: boolean;
}

const Step = styled.div<IStepCC>`
  ${xw`
    w-10
    h-10
    flex
    mx-auto
    text-lg
    bg-gray-200
    items-center
    rounded-full
    text-gray-400
  `}

  ${({ stepCurrent }) => stepCurrent && xw`bg-primary opacity-50 text-white`}

  ${({ completed }) => completed && xw`bg-primary text-white`}
`;

const Line = styled.div<ILine>`
  ${xw`
    p-1
    m-1
    sm:m-5
    w-full
    rounded
    bg-gray-200
  `}

  ${({ completed }) => completed && xw`bg-primary opacity-50`}
`;

const Steps: FC<ISteps> = ({ steps, stepCurrent }) => (
  <section css={xw`flex pt-20 w-full font-montserrat`}>
    {steps &&
      steps?.map((step, index) => (
        <Fragment key={step.title}>
          <div css={xw`w-11/12`}>
            <div css={xw`relative mb-2`}>
              <Step
                completed={step.completed}
                stepCurrent={stepCurrent === index}
              >
                <FontAwesomeIcon
                  height="1.3rem"
                  icon={step.icon}
                  css={xw`w-full fill-current`}
                />
              </Step>
              <p css={xw`m-1 text-xs text-center md:text-sm text-secondary-1`}>
                {step.title}
              </p>
            </div>
          </div>

          {index !== steps.length - 1 && (
            <div css={xw`w-full flex items-center justify-center`}>
              <Line completed={step.completed} />
            </div>
          )}
        </Fragment>
      ))}
  </section>
);

export default Steps;
