import { EUserType } from '@student_life/common';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutAction } from '@/store/actions/user';
import { isUserAuthenticated, userSelector } from '@/store/selectors/user';

import NavBar from './NavBar';

interface INavBarContainer {
  allowLogin?: boolean;
  allowRental?: boolean;
  allowRequest?: boolean;
  allowRegister?: boolean;
}

const NavBarContainer: FC<INavBarContainer> = ({
  allowLogin,
  allowRental,
  allowRequest,
  allowRegister,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isUserAutenticated = useSelector(isUserAuthenticated);
  const userData = useSelector(userSelector);

  const onLogoutClick = () => {
    dispatch(logoutAction());
    router.push('/');
  };

  return (
    <NavBar
      user={userData}
      allowLogin={allowLogin}
      allowRequest={allowRequest}
      onLogoutClick={onLogoutClick}
      allowRegister={allowRegister}
      isLogedIn={isUserAutenticated}
      allowRental={allowRental}
    />
  );
};

export default memo(NavBarContainer);
