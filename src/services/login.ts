import { baseUrl, mainHeader } from ".";
import { IReqLogin, IResLogin } from "../ts";
import { useMutation } from 'react-query';
import axios, { AxiosResponse, AxiosError } from 'axios';


const login = (data: IReqLogin) => {
  return axios.post<IResLogin, AxiosResponse<IResLogin>, IReqLogin>(`${baseUrl}/auth/token`,
    data,
    { headers: mainHeader }
  )
}

export const useLogin = () => {
  return useMutation<AxiosResponse<IResLogin, any>, AxiosError, IReqLogin>(login)
}
