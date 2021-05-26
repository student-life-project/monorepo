// eslint-disable-next-line simple-import-sort/imports
import { FC, memo } from 'react';
import xw from 'xwind';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import Button from '@/components/Button';

interface IGetStartedCard {
  alt: string;
  text: string;
  imgUrl: string;
  linkUrl: string;
  buttonText: string;
  icon: FontAwesomeIconProps['icon'];
}

const Container = styled.div`
  ${xw`
    grid
    h-96
    w-full
    border
    sm:h-64
    rounded
    sm:h-52
    max-w-md
    grid-rows-2
    sm:grid-rows-1
    sm:grid-cols-2
    font-montserrat
    border-secondary-2
  `}
`;

const Content = styled.div`
  ${xw`
    flex
    w-full
    h-full
    order-2
    sm:order-1
    items-center
    justify-center
  `}
`;

const Info = styled.div`
  ${xw`
    mx-4
    flex
    h-2/3
    w-full
    flex-col
    justify-between
  `}
`;

const Text = styled.p`
  ${xw`
    text-sm
    text-center
    break-words
  `}
`;

const Img = styled.img`
  ${xw`
    w-full
    h-full
    order-1
    rounded-tr
    rounded-br
    bg-gray-400
    object-cover
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${xw`
    block
    text-gray-400
  `}
`;

const GetStartedCard: FC<IGetStartedCard> = ({
  alt,
  icon,
  text,
  imgUrl,
  linkUrl,
  buttonText,
}) => (
  <Container>
    <Content>
      <Info>
        <Icon icon={icon} height="2rem" />
        <Text>{text}</Text>
        <Link href={linkUrl}>
          <Button FPrimary small>
            {buttonText}
          </Button>
        </Link>
      </Info>
    </Content>
    <Img src={imgUrl} alt={alt} />
  </Container>
);

export default memo(GetStartedCard);
