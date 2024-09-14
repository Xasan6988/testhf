import React from 'react';
import { useInput } from '../../hooks/input';
import { useAppDispatch } from '../../hooks/redux';
import { login } from '../../store/actions/appActions';
import './AuthForm.css';

const AuthForm = () => {

  const loginInput = useInput('');
  const passwordInput = useInput('');

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (loginInput.value && passwordInput.value) {
      dispatch(login({
        login: loginInput.value,
        password: passwordInput.value
      }));
    } else {
      alert('Заполните все поля');
    }
  }

  const enterHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className='authform'>
      <label htmlFor="login" onKeyDown={enterHandler}>
        <p>Войти в систему</p>
        <input type="text" {...loginInput} placeholder='Введите ваш логин' />
        <input type="password" {...passwordInput} placeholder='Введите ваш пароль' />
        <button className="submit" onClick={handleSubmit}>Войти</button>
      </label>
    </div>
  );

}

export default AuthForm;
