import { FC } from 'react';
import styled from 'styled-components';
import { useGetStudent } from '../../services';
import { useParams } from 'react-router-dom';
import { Loader } from '../../ui';

const DetailStudent: FC = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetStudent(Number(id))

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <MainSC>
        <div>
          <div><span>FullName: </span>{data && data.data.data.data.fullName}</div>
          <div><span>UniversityName: </span>{data && data.data.data.data.universityName}</div>
          <div><span>EntranceYear: </span>{data && data.data.data.data.entranceYear}</div>
          <div><span>GraduationYear: </span>{data && data.data.data.data.graduationYear}</div>
          <div><span>Faculty: </span>{data && data.data.data.data.faculty}</div>
          <div><span>Speciality: </span>{data && data.data.data.data.speciality}</div>
          <div><span>StudyType: </span>{data && data.data.data.data.speciality}</div>
        </div>
        <div>
          <div><span>AcademicType: </span>{data && data.data.data.data.academicType}</div>
          <div><span>DiplomaSerial: </span>{data && data.data.data.data.diplomaSerial}</div>
          <div><span>DiplomaRegistrationNumber: </span>{data && data.data.data.data.diplomaRegistrationNumber}</div>
          <div><span>GivenDate: </span>{data && data.data.data.data.givenDate}</div>
          <div><span>AcademicLevel: </span>{data && data.data.data.data.academicLevel}</div>
          <div><span>AppendixNumber: </span>{data && data.data.data.data.appendixNumber}</div>
          <div><span>OrganizationId: </span>{data && data.data.data.data.organizationId}</div>
        </div>
      </MainSC>
    </>
  );
};

export default DetailStudent;

const MainSC = styled('div')`
@media (min-width: 290px){
  margin: 0 20px;
  display: flex;
  flex-direction: flex-start;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  margin-top: 20px;
  border-radius: 20px;
  & > div {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      height: 40px;
      border-bottom: 1px solid #ccc;
      div {
        width: 60%;
      }
      span {
        width: 40%;
        font-weight: 600;
        color: #777dd0;
      }
    }
  }
}
@media (min-width: 576px) {
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 20px;
  padding: 30px;
  & > div {
    width: 48%;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      height: 40px;
      div {
        width: 60%;
      }
      span {
        width: 40%;
        font-weight: 600;
        color: #777dd0;
      }
    }
  }
}
`