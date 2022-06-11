import { useLogin } from "./login"
import { useRegister } from "./register"
import {
  useCreateStudent, useGetStudents,
  useGetStudent, useUpdateStudent, useDeleteStudent
} from './student';

const baseUrl = "https://online-excel-heroku.herokuapp.com"

const mainHeader = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export {
  baseUrl, mainHeader,
  useLogin, useRegister,
  useCreateStudent, useGetStudents,
  useGetStudent, useUpdateStudent, 
  useDeleteStudent
}