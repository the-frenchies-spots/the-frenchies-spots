import React from 'react';
import { useState } from 'react';
import {
  User,
  SignUpRequestParameters,
  LoginRequestParameters,
  LoginRequestResult,
  LogoutRequestResult
} from '@frenchies-spots/types';
import {
  SIGN_UP_MUTATION,
  SIGN_IN_MUTATION,
  AUTH_BY_TOKEN_QUERY,
  SIGN_OUT_MUTATION
} from '@frenchies-spots/graphql';
import { TOKEN_STORAGE_KEY } from '@frenchies-spots/utils';
import { useMutation, useLazyQuery } from '@apollo/client';
import useStorage from './use-storage';

type UseAuth = {
  token: string | undefined;
  user: User | undefined;
  onSignUp: (params: SignUpRequestParameters) => Promise<void>;
  onLogin: (params: LoginRequestParameters) => Promise<void>;
  sessionLogin: () => Promise<void>;
  onSignOut: () => Promise<void>;
};

const useAuth = (): UseAuth => {
  const [user, setUser] = useState<User>();

  const [signUp] = useMutation<LoginRequestResult>(SIGN_UP_MUTATION);
  const [signIn] = useMutation<LoginRequestResult>(SIGN_IN_MUTATION);
  const [authByToken] = useLazyQuery<LoginRequestResult>(
    AUTH_BY_TOKEN_QUERY
  );
  const [signOut] = useMutation<LogoutRequestResult>(SIGN_OUT_MUTATION);

  const { value: tokenStorage, updateValue: updateToken } =
    useStorage(TOKEN_STORAGE_KEY);
  const authentification = (result: { data: LoginRequestResult }) => {
    const { data } = result;
    const id = data?.user?.id;
    const profileId = data?.user?.profile?.id;
    const pseudo = data?.user?.profile.pseudo;
    const token = data?.user?.token;
    const photoUrl = data?.user?.profile.photoUrl;
    const gamePoint = data?.user?.profile.gamePoint;
    if (id && profileId && token && pseudo && gamePoint !== undefined) {
      updateToken(token);
      setUser({ id, profileId, pseudo, photoUrl, gamePoint });
      console.log('Successfully logged in');
    }
  };

  const handleSignUp = async (
    params: SignUpRequestParameters
  ): Promise<void> => {
    signUp({ variables: { ...params } })
      .then((logUserResult) => {
        authentification(logUserResult as { data: LoginRequestResult });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignIn = async (
    params: LoginRequestParameters
  ): Promise<void> => {
    signIn({ variables: { ...params } })
      .then((logUserResult) => {
        authentification(logUserResult as { data: LoginRequestResult });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAuthByToken = async (): Promise<void> => {
    authByToken()
      .then((logUserResult) => {
        authentification(logUserResult as any);
      })
      .catch((error) => {
        handleSignOut();
        console.error(error);
      });
  };

  const handleSignOut = async (): Promise<void> => {
    signOut();
    updateToken('');
    setUser(undefined);
  };

  return {
    token: tokenStorage,
    user,
    onSignUp: handleSignUp,
    onLogin: handleSignIn,
    sessionLogin: handleAuthByToken,
    onSignOut: handleSignOut
  };
};

export default useAuth;
