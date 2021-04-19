import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import xw from 'xwind';

const MobileMenu: FC = () => {
  return (
    <div css={xw`flex justify-center text-gray-900 md:hidden`}>
      <button type="button">
        <FontAwesomeIcon icon={faBars} height="2.5rem" />
      </button>
    </div>
  );
};

export default MobileMenu;
