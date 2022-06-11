import { FC, useState } from 'react';
import { IStudent } from '../ts';
import styled from 'styled-components';

interface CreateEditProps {
  student?: Omit<IStudent, "id">;
  handleSubmitStudent: (student: Omit<IStudent, "id">, e: React.FormEvent) => void;
}

const CreateEdit: FC<CreateEditProps> = ({ student, handleSubmitStudent }) => {
  const [fullName, setFullName] = useState(student ? String(student.fullName) : '')
  const [universityName, setUniversityName] = useState(student ? String(student.universityName) : '')
  const [entranceYear, setEntranceYear] = useState(student ? String(student.entranceYear) : '')
  const [graduationYear, setGraduationYear] = useState(student ? String(student.graduationYear) : '')
  const [faculty, setFaculty] = useState(student ? String(student.faculty) : '')
  const [speciality, setSpeciality] = useState(student ? String(student.speciality) : '')
  const [studyType, setStudyType] = useState(student ? String(student.studyType) : '')
  const [academicType, setAcademicType] = useState(student ? String(student.academicType) : '')
  const [diplomaSerial, setDiplomaSerial] = useState(student ? String(student.diplomaSerial) : '')
  const [diplomaRegistrationNumber, setDiplomaRegistrationNumber] = useState(student ? String(student.diplomaRegistrationNumber) : '')
  const [givenDate, setGivenDate] = useState(student ? String(student.givenDate) : '')
  const [academicLevel, setAcademicLevel] = useState(student ? String(student.academicLevel) : '')
  const [appendixNumber, setAppendixNumber] = useState(student ? String(student.appendixNumber) : '')
  const [organizationId, setOrganizationId] = useState(student ? Number(student.organizationId) : 0)

  const st = {
    fullName, universityName, entranceYear, graduationYear, faculty,
    speciality, studyType, academicType, academicLevel, diplomaSerial,
    diplomaRegistrationNumber, givenDate, appendixNumber, organizationId
  }
  return (
    <Form fullName={fullName} onSubmit={(e) => handleSubmitStudent(st, e)}>
      <FormBody>
        <div>
          <FormItem>
            <Label clr={fullName.length > 0 && fullName.length < 4} htmlFor="fullName">FullName</Label>
            <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} id='fullName' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={universityName.length > 0 && universityName.length < 4} htmlFor="universityName">UniversityName</Label>
            <TextField value={universityName} onChange={(e) => setUniversityName(e.target.value)} id='universityName' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={entranceYear.length > 0 && entranceYear.length < 4} htmlFor="entranceYear">EntranceYear</Label>
            <TextField value={entranceYear} onChange={(e) => setEntranceYear(e.target.value)} id='entranceYear' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={graduationYear.length > 0 && graduationYear.length < 4} htmlFor="graduationYear">graduationYear</Label>
            <TextField value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} id='graduationYear' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={faculty.length > 0 && faculty.length < 4} htmlFor="faculty">faculty</Label>
            <TextField value={faculty} onChange={(e) => setFaculty(e.target.value)} id='faculty' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={speciality.length > 0 && speciality.length < 4} htmlFor="speciality">speciality</Label>
            <TextField value={speciality} onChange={(e) => setSpeciality(e.target.value)} id='speciality' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={studyType.length > 0 && studyType.length < 4} htmlFor="studyType">studyType</Label>
            <TextField value={studyType} onChange={(e) => setStudyType(e.target.value)} id='studyType' type='text' />
          </FormItem>
        </div>
        <div>
          <FormItem>
            <Label clr={academicType.length > 0 && academicType.length < 4} htmlFor="academicType">academicType</Label>
            <TextField value={academicType} onChange={(e) => setAcademicType(e.target.value)} id='academicType' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={academicLevel.length > 0 && academicLevel.length < 4} htmlFor="academicLevel">academicLevel</Label>
            <TextField value={academicLevel} onChange={(e) => setAcademicLevel(e.target.value)} id='academicLevel' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={diplomaSerial.length > 0 && diplomaSerial.length < 4} htmlFor="diplomaSerial">diplomaSerial</Label>
            <TextField value={diplomaSerial} onChange={(e) => setDiplomaSerial(e.target.value)} id='diplomaSerial' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={diplomaRegistrationNumber.length > 0 && diplomaRegistrationNumber.length < 4} htmlFor="diplomaRegistrationNumber">diplomaRegistrationNumber</Label>
            <TextField value={diplomaRegistrationNumber} onChange={(e) => setDiplomaRegistrationNumber(e.target.value)} id='diplomaRegistrationNumber' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={givenDate.length > 0 && givenDate.length < 4} htmlFor="givenDate">givenDate</Label>
            <TextField value={givenDate} onChange={(e) => setGivenDate(e.target.value)} id='givenDate' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={appendixNumber.length > 0 && appendixNumber.length < 4} htmlFor="appendixNumber">appendixNumber</Label>
            <TextField value={appendixNumber} onChange={(e) => setAppendixNumber(e.target.value)} id='appendixNumber' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={!!organizationId && organizationId.toString().length < 1} htmlFor="organizationId">organizationId</Label>
            <TextField value={organizationId} onChange={(e) => setOrganizationId(Number(e.target.value))} id='organizationId' type='number' />
          </FormItem>
        </div>
      </FormBody>
      <Submit
        disabled={
          fullName.length < 4 || faculty.length < 4 || speciality.length < 4 ||
          universityName.length < 4 || studyType.length < 4 || academicType.length < 4 ||
          entranceYear.length < 4 || graduationYear.length < 4 || academicLevel.length < 4 ||
          diplomaSerial.length < 4 || diplomaRegistrationNumber.length < 4 ||
          givenDate.length < 4 || appendixNumber.length < 1 || !organizationId
        }
        type='submit'
        value={student ? 'Save' : "Create"}
      />
    </Form>
  );
};

export default CreateEdit;

const TextField = styled('input')`
    height: 20px;
    font-size: 14px;
    padding: 5px;
    border: 1px solid #ebe9f4;
    border-radius: 5px;
    outline: none;
    &:focus{
      border: 1px solid #c2b9e9;
      outline: none;
    }
`
const Submit = styled('input')`
  margin-top: 10px;
  width: 100%;
  height: 30px;
  background-color: ${p => p.disabled ? '#7383be' : '#113dd9'};
  border-radius:5px;
  border: none;
  outline: none;
  cursor: ${p => p.disabled ? "not-allowed" : "pointer"};
  color: #fff;
  font-size: 16px;
`
const FormItem = styled('div')`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`
const Label = styled('label') <{ clr?: boolean }>`
  color:${p => p.clr ? 'red' : 'black'};
  font-weight: 600;
`

const Form = styled('form') <{ fullName: string | undefined }>`
  @media (min-width: 290px) {
    padding: 10px;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    margin: 10px;
  }
  @media (min-width: 576px){
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
  };
`
const FormBody = styled('div')`
  @media (min-width: 290px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & > div {
      width: 48%;
    }
  }
`