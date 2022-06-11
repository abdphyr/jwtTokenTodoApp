import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { baseUrl } from '.';
import { client } from "./axios";
import { IReqCreateStudent, IResCreateStudent, IResDeleteStudent } from "../ts";
import { IResGetStudent, IResGetStudents } from '../ts';
import { IReqUpdateStudent, IResUpdateStudent } from '../ts';

// CREATE STUDENT
const createStudent = (data: IReqCreateStudent) => {
  return client.post<IResCreateStudent, AxiosResponse<IResCreateStudent>, IReqCreateStudent>(
    baseUrl + "/student/create",
    data
  )
}
export const useCreateStudent = () => {
  return useMutation<AxiosResponse<IResCreateStudent>, AxiosError, IReqCreateStudent>(createStudent)
}
//END

//GET STUDENTS
const getStudents = () => {
  return client.post<IResGetStudents>(
    baseUrl + "/student/list"
  )
}
export const useGetStudents = () => {
  return useQuery<AxiosResponse<IResGetStudents>, AxiosError>('students', getStudents)
}
//END

// GET STUDENT
const getStudent = (id: number) => {
  return client.get<IResGetStudent>(
    baseUrl + `/student/get/${id}`
  )
}
export const useGetStudent = (id: number) => {
  return useQuery<AxiosResponse<IResGetStudent>, AxiosError>(['students', id], () => getStudent(id)
  )
}
//END

// UPDATE STUDENT
const updateStudent = (data: IReqUpdateStudent) => {
  return client.post<IResUpdateStudent, AxiosResponse<IResUpdateStudent>, IReqUpdateStudent>(
    baseUrl + "/student/update",
    data
  )
}
export const useUpdateStudent = () => {
  return useMutation<AxiosResponse<IResUpdateStudent>, AxiosError, IReqUpdateStudent>(updateStudent)
}
// END

// DELETE STUDENT
const deleteStudent = (id: number) => {
  return client.delete<IResDeleteStudent>(
    baseUrl + `/student/delete/${id}`
  )
}
export const useDeleteStudent = () => {
  return useMutation<AxiosResponse<IResDeleteStudent>, AxiosError, number>(deleteStudent)
}
// END