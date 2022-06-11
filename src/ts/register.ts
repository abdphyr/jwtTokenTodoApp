
export interface IReqRegister {
  fullName: string;
  username: string;
  password: string;
  phone: string | number;
}

export interface IResRegister {
  data: {
    data: number;
    error: {
      timestamp: Date,
      status: number;
      error: string;
      message: string;
      path: string;
    },
    success: boolean;
    totalCount: number;
  };
  status: number;
}