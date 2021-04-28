import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

interface IUserButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  height?: string;
}

const UserButton: FC<IUserButton> = ({ onClick, children, height }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      css={xw`flex items-center focus:outline-none`}
    >
      <FontAwesomeIcon
        icon={faUserCircle}
        height={height || '1.2rem'}
        css={xw`mr-1 text-gray-900 font-thin stroke-1`}
      />{' '}
      {children}
    </button>
  );
};

export default UserButton;
