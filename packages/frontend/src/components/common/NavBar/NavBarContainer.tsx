import { WithPageAuthRequiredProps } from '@auth0/nextjs-auth0';
import { EUserType } from '@student_life/common';
import { useRouter } from 'next/router';
import { ComponentType, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserData, logoutAction } from '@/store/actions/users';
import { tokenSessionSelector } from '@/store/selectors/session';
import { userSelector } from '@/store/selectors/user';
import { IUserAuth0 } from '@/types';
import withAuth from '@/utils/WithAuth';

import NavBar from './NavBar';

interface INavBarContainer {
  allowLoginRegister?: boolean;
  allowRental?: boolean;
  allowRequest?: boolean;
  user: IUserAuth0;
}

const NavBarContainer: FC<INavBarContainer> = ({
  allowLoginRegister,
  allowRental,
  allowRequest,
  user = null,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const tokenSession = useSelector(tokenSessionSelector);
  const userData = useSelector(userSelector);

  useEffect(() => {
    if (tokenSession) {
      dispatch(fetchUserData());
    }
  }, [tokenSession, dispatch]);

  const onLogoutClick = () => {
    dispatch(logoutAction());
    router.push('/');
  };

  return (
    <NavBar
      user={{
        id: userData?._id,
        firstName: user?.name || '',
        phoneNumber: userData?.phoneNumber,
        email: user?.email || '',
        birthDate: userData?.birthDate,
        password: userData?.password,
        messages: userData?.messages || [], // IMessage
        photo: {
          id: '',
          name: '',
          location: '',
          url: user?.picture || '',
        },
        type: user?.type as unknown as EUserType,
        reports: [], // IReport
      }}
      allowLoginRegister={allowLoginRegister}
      allowRequest={allowRequest}
      onLogoutClick={onLogoutClick}
      isLogedIn={Boolean(user || tokenSession)}
      allowRental={allowRental}
    />
  );
};

export default withAuth(
  NavBarContainer as unknown as ComponentType<WithPageAuthRequiredProps>,
) as unknown as FC<Omit<INavBarContainer, 'user'>>;
