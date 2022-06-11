import { FC, useEffect } from 'react';
import './main.css';
import { useNavigate } from 'react-router-dom';
import RootRoute from './routes/RootRoute';

const App: FC = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('userInfo')
  const jwt = localStorage.getItem("jwt")
  // localStorage.removeItem('jwt')
  // localStorage.removeItem('userInfo')
  // console.log(user, jwt);
  useEffect(() => {
    if (!user) {
      navigate('/register')
    }
  }, [])
  return (
    <div className="app">
      <RootRoute user={user} />
    </div>
  );
}

export default App;
