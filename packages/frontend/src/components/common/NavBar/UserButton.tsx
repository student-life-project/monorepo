import { faUser } from '@fortawesome/free-solid-svg-icons';
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
        icon={faUser}
        height={height || '1.2rem'}
        css={xw`mr-1 border border-gray-900 rounded-full bg-gray-200`}
      />{' '}
      {children}
    </button>
  );
};

export default UserButton;
