import React, { useState } from 'react';
import './Login.scss';
// import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function LoginSung() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/JongHwaSung/Main');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPW = e => {
    setPw(e.target.value);
  };
  const check = id.includes('@') && pw.length > 5;

  return (
    <div>
      <main>
        <div className="login-form">
          <div className="mainLogo">
            <h1>Westagram</h1>
          </div>
          <form>
            <input
              className="userName"
              id="userName"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={saveUserId}
            />
            <input
              className="password"
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPW}
            />
          </form>

          <button
            className="loginBtn"
            id="loginBtn"
            disabled={check ? false : true}
            onClick={goToMain}
          >
            로그인
          </button>

          <div className="links">
            <a href="#">비밀번호를 잊어버리셨나요?</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginSung;
