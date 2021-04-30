/* eslint-disable-next-line simple-import-sort/imports */
import xw from 'xwind';
import styled from '@emotion/styled';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface IInstructionCard {
  reverse?: boolean;
  title: string;
  text: string;
  stepsList?: string[];
  listBullet: FontAwesomeIconProps['icon'];
  imgUrl: string;
}

interface IInstructionCardContainer {
  reverse?: boolean;
}

const InstructionCardContainer = styled.div<IInstructionCardContainer>`
  ${xw`w-full flex justify-between font-montserrat`}
  ${(props) => props.reverse && xw`flex-row-reverse`}
`;

const InstructionCard: FC<IInstructionCard> = ({
  reverse,
  title,
  text,
  stepsList,
  listBullet,
  imgUrl,
}) => {
  return (
    <InstructionCardContainer reverse={reverse}>
      <img
        src={imgUrl}
        alt={title}
        css={xw`hidden lg:block w-4/12 lg:h-52 bg-gray-400`}
      />
      <div css={xw`w-full lg:w-7/12 h-full`}>
        <p css={xw`text-xl font-semibold`}>{title}</p>
        <p css={xw`break-words mt-4 text-justify`}>{text}</p>
        <ul>
          {Boolean(stepsList?.length) &&
            stepsList?.map((step) => (
              <li css={xw`flex my-2`}>
                <FontAwesomeIcon
                  icon={listBullet}
                  height="1.2rem"
                  css={xw`text-gray-400 mr-1`}
                />
                <p>{step}</p>
              </li>
            ))}
        </ul>
      </div>
    </InstructionCardContainer>
  );
};

export default InstructionCard;
