import { baseUrl, mainHeader } from ".";
import { IReqRegister, IResRegister } from "../ts";
import { useMutation } from 'react-query';
import axios, { AxiosResponse, AxiosError } from 'axios';


const register = (data: IReqRegister) => {
  return axios.post<IResRegister, AxiosResponse<IResRegister>, IReqRegister>(`${baseUrl}/auth/register`,
    data,
    { headers: mainHeader }  
  )
}

export const useRegister = () => {
  return useMutation<AxiosResponse<IResRegister, any>, AxiosError, IReqRegister>(register)
}
