import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

function LoginRa() {
  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const isValidId = inputValues.id.includes('@');
  const isValidPw = inputValues.pw.length >= 5;
  const isAllValid = isValidPw && isValidId;

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/rayong/Main');
  };

  return (
    <main className="login">
      <div className="wrapper">
        <section className="logo-text">Westagram</section>
        <form id="inputBox">
          <div className="input-box">
            <input
              onChange={handleInput}
              name="id"
              type="text"
              placeholder="@가 포함된 이메일 주소를 입력하세요!"
              autoComplete="username"
            />
            <input
              onChange={handleInput}
              name="pw"
              type="password"
              placeholder="비밀번호는 다섯글자 이상입니다."
              autoComplete="current-password"
            />
          </div>
          <div className="btn-box">
            <button id="loginBtn" onClick={goToMain} disabled={!isAllValid}>
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
