import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearSessionToken, setSessionToken } from '@/store/actions/session';

export const useSetSessionToken = (sessionToken: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionToken) {
      dispatch(setSessionToken(sessionToken));
    }

    return () => {
      dispatch(clearSessionToken());
    };
  }, [sessionToken, dispatch]);
};
