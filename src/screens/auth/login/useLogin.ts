import {useState} from 'react';
import {notify} from '../../../constants/globalStyle';
import {useDispatch} from 'react-redux';
import { signInUser } from '../../../store/slices/authentication';
const initialState = {email: '', password: ''};
const useLogin = () => {
  const [loading, setisloading] = useState(false);
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (name: string, value: string): void => {
    setState(s => ({...s, [name]: value}));
  };
  const handleSubmite =async () => {
    const {email, password} = state;
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email) {
      return notify('plz Enter Email', ' formate like: abc@gmail.com', 'error');
    }
    if (!validRegex.test(email)) {
      return notify(
        'Invalid Email Format',
        ' formate like: abc@gmail.com',
        'error',
      );
    }
    if (password.length < 6) {
      return notify(
        'Invalid Password',
        'Password length minimum 6 character',
        'error',
      );
    }
    let userData = {email, password};
    
    setisloading(true);
    await dispatch(signInUser(userData) as any)
    setState(initialState);
    setisloading(false);
  };
  return {
    loading,
    setisloading,
    state,
    setState,
    handleChange,
    handleSubmite,
  };
};

export default useLogin;
