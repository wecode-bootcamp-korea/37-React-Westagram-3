import React from 'react';
import '../Login/Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginRa() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/rayong/Main');
  };

  const [userId, setUserId] = useState('');
  const [userPW, setUserPW] = useState('');

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const saveUserPw = event => {
    setUserPW(event.target.value);
  };

  return (
    <main className="login">
      <div className="wrapper">
        <section className="logo-text">Westagram</section>
        <form id="inputBox">
          <div className="input-box">
            <input
              onChange={saveUserId}
              id="inputId"
              type="text"
              placeholder="@가 포함된 이메일 주소를 입력하세요!"
              autoComplete="username"
            />
            <input
              onChange={saveUserPw}
              id="inputPw"
              type="password"
              placeholder="비밀번호는 다섯글자 이상입니다."
              autoComplete="current-password"
            />
          </div>
          <div className="btn-box">
            <button id="loginBtn" onClick={goToMain}>
              로그인
            </button>
          </div>
        </form>
        <p className="info">
          <a href="#!">비밀번호를 잊으셨나요?</a>
        </p>
      </div>
    </main>
  );
}

export default LoginRa;
