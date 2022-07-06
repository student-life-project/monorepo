// eslint-disable-next-line simple-import-sort/imports
import xw from 'xwind';
import styled from '@emotion/styled';
import { FC } from 'react';

type TImg = {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
};

type TAvatar = {
  alt: string;
  url: string;
} & TImg;

const Img = styled.img<TImg>`
  ${xw`
    bg-gray-400
    rounded-full
  `}

  ${({ small }) => small && xw`w-10 h-10`}

  ${({ medium }) => medium && xw`w-32 h-32`}

  ${({ large }) => large && xw`w-52 h-52 sm:w-48 sm:h-48 mb-5`}
`;

const Avatar: FC<TAvatar> = ({ alt, url, small, medium, large }) => {
  return (
    <>
      <Img alt={alt} src={url} small={small} medium={medium} large={large} />
    </>
  );
};

export default Avatar;
