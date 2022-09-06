import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginHong() {
  const [idInput, setUsername] = useState('');
  const [pwInput, setPassword] = useState('');

  const saveUserId = event => setUsername(event.target.value);

  const saveUserPw = event => setPassword(event.target.value);

  const isInputValid = idInput.includes('@') && pwInput.length >= 5;

  const navigate = useNavigate();
  const goTomain = () => {
    navigate('/jisuhong/Main');
  };

  return (
    <body>
      <div className="box">
        <div className="loginLogo">
          <h1 className="logoText">Westagram</h1>
        </div>

        <div className="loginWrapper">
          <input
            classame="username"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="pw"
            ype="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
        </div>

        <div className="buttonWrapper">
          <button
            className={isInputValid ? 'login_button' : 'login_buttonDisabled'}
            onClick={goTomain}
            disabled={isInputValid ? false : true}
          >
            로그인
          </button>
        </div>

        <div className="findPassword">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </body>
  );
}

export default LoginHong;
