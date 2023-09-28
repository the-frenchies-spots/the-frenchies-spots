import React, { useContext, useState } from "react";

import { mutations, queries } from "@frenchies-spots/gql";
import { useMutation, useLazyQuery } from "@apollo/client";

import type {
  UserEntity,
  SignResponse,
  SignInInput,
  SignUpInput,
  LogoutResponse,
  MutationSignUpArgs,
  MutationSignInArgs,
  ProfileEntity,
  MutationUpdateProfileArgs,
  ProfileInput,
} from "@frenchies-spots/gql";

const TOKEN_STORAGE_KEY = process.env.NEXT_PUBLIC_TOKEN_STORAGE_KEY || "";

import useStorage from "./use-storage";
import { AuthContext } from "@/context";
import { getFuncOrThrow } from "../utils/get-func-or-throw";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export const useInitAuth = () => {
  const [user, setUser] = useState<UserEntity>();

  const router = useRouter();

  const [signUp, { loading: signupLoading }] = useMutation<
    { signUp: SignResponse },
    MutationSignUpArgs
  >(mutations.signUp);

  const [signIn, { loading: signinLoading }] = useMutation<
    { signIn: SignResponse },
    MutationSignInArgs
  >(mutations.signIn);

  const [deleteAccount, { loading: deleteLoading }] = useMutation<{
    deleteAccount: boolean;
  }>(mutations.deleteAccount);

  const [getLoginUser] = useLazyQuery<{
    getLoginUser: UserEntity;
  }>(queries.getLoginUser, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache",
  });

  const [signOut, { loading: signoutLoading }] = useMutation<LogoutResponse>(
    mutations.logout
  );

  const { value: tokenStorage, updateValue: updateToken } =
    useStorage(TOKEN_STORAGE_KEY);

  const authentification = (user: UserEntity | undefined, token?: string) => {
    if (token) updateToken(token);
    if (user) setUser(user);
  };

  const handleSignUp = async (signUpInput: SignUpInput): Promise<void> => {
    const signUpPromess = new Promise((resolve, reject) => {
      signUp({ variables: { signUpInput } })
        .then((signResponse) => {
          authentification(
            signResponse?.data?.signUp?.user,
            signResponse?.data?.signUp?.refreshToken
          );
          resolve(signResponse);
          router.push("/welcome");
        })
        .catch((error) => {
          reject(error);
          console.error(error);
        });
    });

    toast.promise(signUpPromess, {
      loading: "Connexion en cours...",
      success: <b>{`Création de compte réussie !`}</b>,
      error: <b>Une erreur est survenue !</b>,
    });
  };

  const handleSignIn = async (signInInput: SignInInput): Promise<void> => {
    const signInPromess = new Promise((resolve, reject) => {
      signIn({ variables: { signInInput } })
        .then((signResponse) => {
          authentification(
            signResponse?.data?.signIn?.user,
            signResponse?.data?.signIn?.refreshToken
          );
          resolve(signResponse);
          router.push("/spots");
        })
        .catch((error) => {
          reject(error);
          console.error(error);
        });
    });

    toast.promise(signInPromess, {
      loading: "Connexion...",
      success: <b>{`Bon retour parmis nous !`}</b>,
      error: <b>Email ou mot de passe incorrect !</b>,
    });
  };

  const handleAuthByToken = async (): Promise<boolean> => {
    return getLoginUser()
      .then((logUserResponse) => {
        authentification(logUserResponse.data?.getLoginUser);
        return true;
      })
      .catch(() => {
        handleSignOut();
        return false;
      });
  };

  const handleSignOut = async (): Promise<void> => {
    signOut()
      .then(() => {
        setUser(undefined);
        updateToken("");
      })
      .catch(console.log);
  };

  const handleDeleteAccount = async (): Promise<void> => {
    const deleteAccountPromess = new Promise((resolve, reject) => {
      deleteAccount()
        .then(() => {
          setUser(undefined);
          updateToken("");
          router.push("/sign-in");
          resolve(true);
        })
        .catch((error) => {
          reject(error);
          console.error(error);
        });
    });

    toast.promise(deleteAccountPromess, {
      loading: "Suppression...",
      success: <b>{`Votre compte à été supprimer !`}</b>,
      error: <b>Une erreur est survenue !</b>,
    });
  };

  return {
    token: tokenStorage,
    user,
    loading: signupLoading || signinLoading || signoutLoading || deleteLoading,
    setUser,
    onDeleteAccount: handleDeleteAccount,
    onSignUp: handleSignUp,
    onSignIn: handleSignIn,
    refresh: handleAuthByToken,
    onSignOut: handleSignOut,
  };
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Sorry but no context found.");
  }
  return ctx;
};

export const useAuth = () => {
  const {
    currentUser,
    loading,
    processSignUp,
    processSignIn,
    processSignOut,
    processDeleteAccount,
    refresh,
    setUser,
  } = useAuthContext();

  const [updateProfile] = useMutation<
    { updateProfile: UserEntity },
    MutationUpdateProfileArgs
  >(mutations.updateProfile, {
    refetchQueries: [queries.getLoginUser, queries.profiles],
  });

  const handleUpdateProfile = (profileInput: ProfileInput) => {
    return updateProfile({ variables: { profileInput } });
  };

  const handleRefresh = async (): Promise<boolean> => {
    if (typeof refresh === "function") {
      return refresh();
    }
    return false;
  };

  return {
    user: currentUser,
    profile: currentUser?.profile,
    loading: loading,
    refresh: handleRefresh,
    setUser: getFuncOrThrow(setUser),
    onSignUp: getFuncOrThrow(processSignUp),
    onSignIn: getFuncOrThrow(processSignIn),
    onSignOut: getFuncOrThrow(processSignOut),
    onDeleteAccount: getFuncOrThrow(processDeleteAccount),
    onUpdateProfile: handleUpdateProfile,
  };
};
