/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import ClampedText from '@/components/common/ClampedText';
import { IQuestionAnswer } from '@/types';

interface IListQuestions {
  questions: IQuestionAnswer[];
}

interface IQuestionContainer {
  noBorder?: boolean;
}

const QuestionContainer = styled.div<IQuestionContainer>`
  ${xw`
    w-11/12 flex-col pb-4 border-b border-gray-400 text-left
  `}
  ${(props) => props.noBorder && xw`border-b-0`}
`;

const ListQuestions: FC<IListQuestions> = ({ questions }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onClick = (index: number) => {
    setSelectedIndex((prevSelected) => (prevSelected !== index ? index : -1));
  };

  return (
    <ul css={xw`w-full`}>
      {questions.map((question, index) => {
        return (
          <li css={xw`mb-4`} key={question.question}>
            <button
              type="button"
              css={xw`flex w-full focus:outline-none`}
              onClick={() => onClick(index)}
            >
              <QuestionContainer noBorder={index === questions.length - 1}>
                <p css={xw`font-semibold mb-1`}>{question.question}</p>
                <ClampedText lines={1} noClamp={index === selectedIndex}>
                  {question.answer}
                </ClampedText>
              </QuestionContainer>
              <div
                css={xw`flex items-center justify-center w-1/12 text-gray-400 my-auto`}
              >
                <FontAwesomeIcon
                  icon={index !== selectedIndex ? faChevronDown : faChevronUp}
                  height="1.5rem"
                />
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListQuestions;
