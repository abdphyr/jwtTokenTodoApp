import { FC, useState } from 'react';
import { useLogin } from '../../services';
import { useNavigate } from 'react-router-dom';
import AuthDetails from '../../ui/AuthDetails';
import { Loader } from '../../ui';

const Login: FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { mutateAsync, isLoading } = useLogin()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (username.length === 0 && password.length === 0) {
      alert("Please enter username and password")
    }
    mutateAsync({
      username,
      password
    }, {
      onSuccess(data) {
        navigate('/')
        localStorage.setItem('jwt', JSON.stringify(data.data.data.data))
        localStorage.setItem('userInfo', JSON.stringify(data.data.data.data))
        console.log(data);
        setUsername('')
        setPassword('')
      },
      onError(error) {
        navigate('/login')
        localStorage.removeItem('jwt')
        localStorage.removeItem('userInfo')
        console.log(error.message);
        setUsername('')
        setPassword('')
      }
    }
    )
  }
  if (isLoading) {
    return <Loader />
  }
  return (
    <AuthDetails
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      handleSubmitUser={handleSubmit}
    />
  );
};

export default Login;