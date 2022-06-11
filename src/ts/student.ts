export interface IStudent {
  id: number;
  fullName: string;
  universityName: string;
  entranceYear: string;
  graduationYear: string;
  faculty: string;
  speciality: string;
  studyType: string;
  academicType: string;
  diplomaSerial: string;
  diplomaRegistrationNumber: string;
  givenDate: string;
  academicLevel: string;
  appendixNumber: string;
  organizationId: number
}

export interface IReqCreateStudent extends Omit<IStudent, "id"> {};

export interface IResCreateStudent {
  data: {
    data: number;
    error: {
      timestamp: Date;
      status: number;
      error: string;
      message: string;
      path: string
    };
    success: boolean;
    totalCount: number
  };
  status: number
}

export interface IResGetStudent {
  data: {
    data: IStudent;
    success: true;
    totalCount: number;
  };
  status: number;
}

export interface IResGetStudents {
  data: {
    data: IStudent[]
  }
}

export interface IReqUpdateStudent extends Omit<IStudent, "id"> {}
export interface IResUpdateStudent {
  data: {
    data: number,
    success: boolean,
    totalCount: number
  },
  status: number
}

export interface IResDeleteStudent {
  data: {
    data: boolean,
    success: boolean,
    totalCount: number
  },
  status: number
}