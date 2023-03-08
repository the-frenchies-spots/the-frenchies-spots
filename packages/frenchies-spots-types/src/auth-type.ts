export interface LoginRequestParameters {
  email: string;
  password: string;
}

export interface SignUpRequestParameters {
  pseudo: string;
  email: string;
  password: string;
}

export interface LoginRequestResult {
  user: {
    id: string;
    token: string;
    profile: {
      id: string;
      pseudo: string;
      gamePoint: number;
      photoUrl: string;
    };
  };
}

export interface LogoutRequestResult {
  signOut: boolean;
}
