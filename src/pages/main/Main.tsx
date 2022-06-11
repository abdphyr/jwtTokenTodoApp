import { FC } from 'react';
import styled from 'styled-components'
import { useGetStudents, useDeleteStudent } from '../../services';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { Loader } from '../../ui';


const Main: FC = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { data, isLoading, isFetching, error: getErr, isError: isGetErr } = useGetStudents()
  const { mutateAsync: deleteStudent, isLoading: deleting, error: delErr, isError: isDelErr, isSuccess } = useDeleteStudent()

  const handleDeleteStudent = (id: number) => {
    deleteStudent(id, {
      onSuccess: (data) => {
        queryClient.invalidateQueries('students')
        console.log(data);
      },
      onError: (error) => {
        alert(error.message)
        console.log(error.message);
      }
    })
  }
  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('jwt')
    navigate('/login')
  }
  if (isGetErr){
    return <div>{getErr.message}</div>
  }
  if (isDelErr){
    return <div>{delErr.message}</div>
  }
  if (isLoading || deleting) {
    return <Loader />
  }

  return (
    <MainSC>
      <HeaderSC>
        <CreateStudentButtonSC onClick={() => navigate('/student/create')}>
          Add student
        </CreateStudentButtonSC>
        <LogoutButtonSC onClick={handleLogout}>
          Logout
        </LogoutButtonSC>
      </HeaderSC>
      {data && data.data.data.data.map(student => (
        <StudentSC key={student.id} >
          <StudentInfoSC>
            <div>{student.fullName && student.fullName.slice(0, 25)}...</div>
            <div>{student.universityName && student.universityName.slice(0, 25)}...</div>
            <div>{student.faculty && student.faculty.slice(0, 25)}...</div>
          </StudentInfoSC>
          <ControlButtonsSC>
            <ViewButtonSC onClick={() => navigate(`/student/get/${student.id}`)}>
              View
            </ViewButtonSC>
            <UpdateButtonSC onClick={() => navigate(`/student/update/${student.id}`)}>
              Update
            </UpdateButtonSC>
            <DeleteButtonSC onClick={() => handleDeleteStudent(student.id)}>
              Delete
            </DeleteButtonSC>
          </ControlButtonsSC>
        </StudentSC>
      ))}
    </MainSC>
  );
};

export default Main;

const LogoutButtonSC = styled('button')`
  @media (min-width: 290px){
    width: 100px;
    height: 40px;
    background-color: blue;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  @media (min-width: 576px){
    width: 200px;
  }
`
const CreateStudentButtonSC = styled('button')`
  @media (min-width: 290px){
    width: 100px;
    height: 40px;
    background-color: blue;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
  cursor: pointer;
  }
  @media (min-width: 576px){
    width: 200px;
  }
`
const HeaderSC = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const MainSC = styled('div')`
  @media (min-width: 290px){
    margin: 0 auto;
    padding: 20px;
  }
  @media (min-width: 1200px) {
    width: 1100px;
    padding-top: 50px;
  }
`
const StudentSC = styled('div')`
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  margin: 20px 0; 
  display: flex;
  align-items: center;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StudentInfoSC = styled('div')`
  display: flex;
  align-items: center;
  @media (min-width: 290px){
    width: 50%;
    div {
      width: 100%;
      overflow-x: auto;
      padding: 0 5px;
    }
    div:nth-child(1){
      width: 100%;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 11px;
    }
     div:nth-child(2), div:nth-child(3) {
      display: none;
    }
  }
  @media (min-width: 576px) {
    width: 100%;
    div:nth-child(1){
      font-size: 16px;
    }
    div:nth-child(2), div:nth-child(3) {
      display: block;
    }
    div {
      width: 33%;
    }
  }
`
const ControlButtonsSC = styled('div')`
  @media (min-width: 290px){
    width: 50%;
    display: flex;
    align-items: center;
  }
  @media (min-width: 576px){
    width: 30%;
  }
`
const ViewButtonSC = styled('button')`
  @media (min-width: 290px){
    width: 50px;
    height: 25px;
    margin-left: 5px;
    font-size: 11px;
    border: none;
    outline:none;
    background-color: #ccc;
    border-radius: 10px;
    cursor: pointer;
    z-index: 100;
  }
  @media (min-width: 576px){
    width: 70px;
    font-size: 16px;
    height: 30px;
    margin-left: 20px;
  }
`
const UpdateButtonSC = styled('button')`
   @media (min-width: 290px){
    width: 50px;
    height: 25px;
    margin-left: 5px;
    font-size: 11px;
    border: none;
    outline:none;
    background-color: yellow;
    border-radius: 10px;
    cursor: pointer;
    z-index: 100;
  }
  @media (min-width: 576px){
    width: 70px;
    font-size: 16px;
    height: 30px;
    margin-left: 20px;
  }
`
const DeleteButtonSC = styled('button')`
   @media (min-width: 290px){
    width: 50px;
    height: 25px;
    margin-left: 5px;
    font-size: 11px;
    border: none;
    outline:none;
    background-color: red;
    border-radius: 10px;
    cursor: pointer;
    z-index: 100;
  }
  @media (min-width: 576px){
    width: 70px;
    font-size: 16px;
    height: 30px;
    margin-left: 20px;
  }
`