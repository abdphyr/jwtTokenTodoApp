import { FC, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Main, Register, CreateStudent, DetailStudent, UpdateStudent } from '../pages';


const RootRoute: FC<{ user: string | null }> = ({ user }) => {
  return (
    <div>
      <Routes>
        {user ?
          <Fragment>
            <Route path='/' element={<Main />} />
            <Route path='/student/create' element={<CreateStudent />} />
            <Route path='/student/get/:id' element={<DetailStudent />} />
            <Route path='/student/update/:id' element={<UpdateStudent />} />
            <Route path='*' element={<div>Not found</div>} />
          </Fragment>
          :
          <Fragment>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Fragment>
        }
        <Route path='*' element={<Register />} />
      </Routes>
    </div>
  );
};

export default RootRoute;