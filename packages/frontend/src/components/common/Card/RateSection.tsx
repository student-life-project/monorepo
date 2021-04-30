import { faStar } from '@fortawesome/free-regular-svg-icons';
// import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

interface IRateSection {
  score: string;
  scoreCount: number;
}

const RateSection: FC<IRateSection> = ({ score, scoreCount }) => {
  return (
    <div css={xw`w-full flex text-sm my-3`}>
      <FontAwesomeIcon
        icon={faStar}
        height="1rem"
        css={xw`mr-1 text-gray-900 font-thin stroke-1`}
      />{' '}
      {parseFloat(score)} ({scoreCount} evaluaciones)
    </div>
  );
};

export default RateSection;
