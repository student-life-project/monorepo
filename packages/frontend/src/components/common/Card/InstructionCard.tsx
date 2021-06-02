// eslint-disable-next-line simple-import-sort/imports
import { FC } from 'react';
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import Title from '../Title';

interface IInstructionCard {
  text: string;
  title: string;
  imgUrl: string;
  reverse?: boolean;
  stepsList?: string[];
  listBullet: FontAwesomeIconProps['icon'];
}

interface IInstructionCardContainer {
  reverse?: boolean;
}

const InstructionCardContainer = styled.div<IInstructionCardContainer>`
  ${xw`
    flex
    pb-10
    w-full
    flex-col
    lg:flex-row
    justify-between
    font-montserrat
    text-secondary-1
  `}

  ${(props) => props.reverse && xw`lg:flex-row-reverse`}
`;

const Img = styled.img`
  ${xw`
    h-60
    w-full
    m-auto
    md:w-2/4
    lg:block
    lg:h-auto
    lg:w-5/12
    bg-gray-400
    object-cover
  `}
`;

const Info = styled.div`
  ${xw`
    mt-10
    w-full
    h-full
    lg:w-7/12
  `}
`;

const Text = styled.p`
  ${xw`
    break-words
    text-justify
  `}
`;

const List = styled.li`
  ${xw`
    flex
    my-2
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    w-5
    h-5
    mr-1
    mt-0.5
    text-gray-400
  `}
`;

const InstructionCard: FC<IInstructionCard> = ({
  text,
  title,
  imgUrl,
  reverse,
  stepsList,
  listBullet,
}) => (
  <InstructionCardContainer reverse={reverse}>
    <Img src={imgUrl} alt={title} />
    <Info>
      <Title as="h2" css={xw`mb-4`}>
        {title}
      </Title>
      <Text>{text}</Text>
      <ul>
        {Boolean(stepsList?.length) &&
          stepsList?.map((step, index) => {
            const key = index;
            return (
              <List key={`step_${step}_${key}`}>
                <div>
                  <Icon icon={listBullet} />
                </div>
                <Text>{step}</Text>
              </List>
            );
          })}
      </ul>
    </Info>
  </InstructionCardContainer>
);

export default InstructionCard;
