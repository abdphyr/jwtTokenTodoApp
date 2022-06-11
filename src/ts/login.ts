export interface IReqLogin {
  username: string;
  password: string;
}

export interface IResLogin {
  data: {
    data: {
      accessTokenExpiry: number;
      refreshTokenExpiry: number;
      issuedAt: number;
      accessToken: string;
      refreshToken: string;
    },
    error: {
      timestamp: Date,
      status: number;
      error: string;
      message: string;
      path: string;
    },
    success: boolean;
    totalCount: number;
  },
  status: number;
}