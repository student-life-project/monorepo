import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';
import xw from 'xwind';

import Button from '@/components/Button';

interface IGetStartedCard {
  text: string;
  imgUrl: string;
  alt: string;
  linkUrl: string;
  buttonText: string;
  icon: FontAwesomeIconProps['icon'];
}

const GetStartedCard: FC<IGetStartedCard> = ({
  alt,
  imgUrl,
  text,
  buttonText,
  linkUrl,
  icon,
}) => {
  return (
    <div
      css={xw`grid grid-rows-2 w-full max-w-md h-64 shadow-xl rounded font-montserrat xs:grid-cols-2 xs:grid-rows-1 xs:h-52`}
    >
      <div
        css={xw`flex justify-center items-center w-full h-full order-2 xs:order-1`}
      >
        <div
          css={xw`flex flex-col justify-between w-full h-2/3 mx-4 text-center break-words text-sm`}
        >
          <FontAwesomeIcon
            icon={icon}
            height="2rem"
            css={xw`hidden xs:block text-gray-400`}
          />
          {text}
          <Link href={linkUrl}>
            <Button FPrimary small css={xw`mt-2 xs:mt-0`}>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
      <img
        css={xw`w-full h-full object-fill bg-gray-400 rounded-br rounded-tr order-1`}
        src={imgUrl}
        alt={alt}
      />
    </div>
  );
};

export default GetStartedCard;
