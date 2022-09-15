import { useRouter } from 'next/router';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutAction } from '@/store/actions/users';
import { isUserAuthenticated, userSelector } from '@/store/selectors/user';

import NavBar from './NavBar';

interface INavBarContainer {
  allowLoginRegister?: boolean;
  allowRental?: boolean;
  allowRequest?: boolean;
}

const NavBarContainer: FC<INavBarContainer> = ({
  allowLoginRegister,
  allowRental,
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
      user={userData}
      allowLoginRegister={allowLoginRegister}
      allowRequest={allowRequest}
      onLogoutClick={onLogoutClick}
      isLogedIn={isUserAutenticated}
      allowRental={allowRental}
    />
  );
};

export default NavBarContainer;
