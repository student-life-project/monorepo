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

const QuestionContent = styled.div<IQuestionContainer>`
  ${xw`
    pb-4
    w-11/12
    flex-col
    border-b
    text-justify
    border-secondary-2
  `}

  ${(props) => props.noBorder && xw`border-b-0`}
`;

const List = styled.ul`
  ${xw`
    w-full
  `}
`;

const Item = styled.li`
  ${xw`
    mb-4
  `}
`;

const ItemButton = styled.button`
  ${xw`
    flex
    w-full
    focus:outline-none
  `}
`;

const Title = styled.h2`
  ${xw`
    mb-1
    font-semibold
  `}
`;

const ArrowContent = styled.div`
  ${xw`
    flex
    w-1/12
    my-auto
    items-center
    text-gray-400
    justify-center
  `}
`;

const ListQuestions: FC<IListQuestions> = ({ questions }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onClick = (index: number) => {
    setSelectedIndex((prevSelected) => (prevSelected !== index ? index : -1));
  };

  return (
    <List>
      {questions.map((question, index) => (
        <Item key={question.question}>
          <ItemButton type="button" onClick={() => onClick(index)}>
            <QuestionContent noBorder={index === questions.length - 1}>
              <Title>{question.question}</Title>
              <ClampedText lines={1} noClamp={index === selectedIndex}>
                {question.answer}
              </ClampedText>
            </QuestionContent>
            <ArrowContent>
              <FontAwesomeIcon
                icon={index !== selectedIndex ? faChevronDown : faChevronUp}
                height="1.5rem"
              />
            </ArrowContent>
          </ItemButton>
        </Item>
      ))}
    </List>
  );
};

export default ListQuestions;
