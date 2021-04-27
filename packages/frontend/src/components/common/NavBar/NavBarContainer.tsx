import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutAction } from '@/store/actions/user';
import { isUserAuthenticated } from '@/store/selectors/user';

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

  const onLogoutClick = () => {
    dispatch(logoutAction());
    router.push('/');
  };

  return (
    <NavBar
      isLogedIn={isUserAutenticated}
      onLogoutClick={onLogoutClick}
      allowLogin={allowLogin}
      allowPublish={allowPublish}
      allowRegister={allowRegister}
      allowRequest={allowRequest}
    />
  );
};

export default NavBarContainer;
