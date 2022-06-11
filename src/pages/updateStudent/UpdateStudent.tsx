import { FC } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components'
import { CreateEdit } from '../../ui';
import { useUpdateStudent, useGetStudent } from '../../services';
import { IStudent } from '../../ts';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../ui';

const UpdateStudent: FC = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: student, isLoading } = useGetStudent(Number(id))
  const { mutateAsync, isError, error, isLoading: upLoading } = useUpdateStudent()

  const handleUpdateStudent = (data: Omit<IStudent, "id">, e: React.FormEvent) => {
    e.preventDefault()
    mutateAsync(data, {
      onSuccess: (data) => {
        navigate('/')
        queryClient.invalidateQueries('students')
        console.log(data);
      },
      onError: (error) => {
        alert(error.message)
        console.log(error.message);
      }
    })
  }
  if (upLoading || isLoading) {
    return <Loader />
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <MainSC>
      <CreateEdit handleSubmitStudent={handleUpdateStudent} student={student?.data.data.data} />
    </MainSC>
  );
};

export default UpdateStudent;

const MainSC = styled('div')`
  @media (min-width: 290px){
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 1100px;
    margin: 0 auto;
    padding-top: 50px;
  }
`