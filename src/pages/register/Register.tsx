import { FC, useState } from 'react';
import { useRegister } from '../../services';
import { useNavigate } from 'react-router-dom';
import AuthDetails from '../../ui/AuthDetails';
import { Loader } from '../../ui';

const Login: FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const { mutateAsync, isLoading } = useRegister()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (username.length === 0 && password.length === 0) {
      alert("Please enter username and password")
    }
    mutateAsync({
      username,
      password,
      fullName,
      phone
    }, {
      onSuccess(data) {
        navigate('/')
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data.data.data))
        setUsername('')
        setPassword('')
        setFullName('')
        setPhone('')
      },
      onError(error) {
        navigate('/register')
        console.log(error.message);
        localStorage.removeItem("userInfo")
        setUsername('')
        setPassword('')
        setFullName('')
        setPhone('')
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
      fullName={fullName}
      phone={phone}
      setUsername={setUsername}
      setPassword={setPassword}
      setFullName={setFullName}
      setPhone={setPhone}
      handleSubmitUser={handleSubmit}
    />
  );
};

export default Login;