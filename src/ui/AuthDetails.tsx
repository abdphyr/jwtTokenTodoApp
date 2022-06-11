import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface AuthDetailsProps {
  username: string;
  password: string;
  fullName?: string;
  phone?: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setFullName?: React.Dispatch<React.SetStateAction<string>>;
  setPhone?: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitUser: React.FormEventHandler<HTMLFormElement>;
}

const AuthDetails: FC<AuthDetailsProps> = (props) => {
  const navigate = useNavigate()
  const { username, password, fullName, phone } = props
  const { setUsername, setPassword, setFullName, setPhone } = props
  const { handleSubmitUser } = props
  const isRegister = typeof fullName === 'string' && typeof phone === 'string' && setFullName && setPhone
  return (
    <MainSC>
      <div>
        <Form fullName={fullName} onSubmit={handleSubmitUser}>
          {isRegister
            &&
            <>
              <FormItem>
                <Label clr={fullName.length > 0 && fullName.length < 3} htmlFor="fullName">Fullname</Label>
                <TextField value={fullName} onChange={(e) => setFullName(e.target.value)} id='fullName' />
              </FormItem>
              <FormItem>
                <Label clr={phone.length > 0 && phone.length < 7} htmlFor="phone">Phone</Label>
                <TextField value={phone} onChange={(e) => setPhone(e.target.value)} id='phone' />
              </FormItem>
            </>
          }
          <FormItem>
            <Label clr={username.length > 0 && username.length < 4} htmlFor="username">Username</Label>
            <TextField value={username} onChange={(e) => setUsername(e.target.value)} id='username' type='text' />
          </FormItem>
          <FormItem>
            <Label clr={password.length > 0 && password.length < 8} htmlFor="password">Password</Label>
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} id='password' type='password' />
          </FormItem>
          {isRegister ?
            <Submit
              disabled={!(username.length >= 4 && fullName.length >= 3 && password.length >= 8 && phone.length >= 7)}
              type='submit' value='Register' />
            :
            <Submit
              disabled={!(username.length >= 4 && password.length >= 8)}
              type='submit' value='Login' />
          }
        </Form>
        <div style={{ textAlign: 'center' }}>
          {isRegister ?
            <AuthNavigate onClick={() => navigate('/login')}>
              Login
            </AuthNavigate>
            :
            <AuthNavigate onClick={() => navigate('/register')}>
              Register
            </AuthNavigate>
          }
        </div>
      </div>
    </MainSC>
  );
};

export default AuthDetails;

const AuthNavigate = styled('button')`
  border: none;
  outline: none;
  background-color: transparent;
  color: #113dd9;
  font-size: 14px;
  cursor: pointer;
  `
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
`
const Form = styled('form') <{ fullName: string | undefined }>`
  @media (max-width: 576px){
    width: 260px;
    padding: 10px;
  };
  width: 400px;
  height: ${p => p.fullName ? 300 : 240};
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
`
const MainSC = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`