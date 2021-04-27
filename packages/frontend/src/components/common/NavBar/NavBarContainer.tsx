import { EUserType } from '@student_life/common';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutAction } from '@/store/actions/user';
import { isUserAuthenticated, userSelector } from '@/store/selectors/user';

import NavBar from './NavBar';

interface INavBarContainer {
  allowLogin?: boolean;
  allowPublish?: boolean;
  allowRegister?: boolean;
  allowRequest?: boolean;
}

const NavBarContainer: FC<INavBarContainer> = ({
  allowLogin,
  allowPublish,
  allowRegister,
  allowRequest,
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
      isLogedIn={isUserAutenticated}
      onLogoutClick={onLogoutClick}
      allowLogin={allowLogin}
      allowPublish={
        (!isUserAutenticated && allowPublish) ||
        userData.type === EUserType.OWNER
      }
      allowRegister={allowRegister}
      allowRequest={allowRequest}
      user={userData}
    />
  );
};

export default NavBarContainer;
