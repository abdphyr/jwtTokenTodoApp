import { FC } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components'
import { CreateEdit } from '../../ui';
import { useCreateStudent } from '../../services';
import { IStudent } from '../../ts';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../ui';


const CreateStudent: FC = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { mutateAsync, isLoading, isError, error } = useCreateStudent()

  const handleCreateStudent = (data: Omit<IStudent, "id">, e: React.FormEvent) => {
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

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <MainSC>
      <CreateEdit handleSubmitStudent={handleCreateStudent} />
    </MainSC>
  );
};

export default CreateStudent;

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