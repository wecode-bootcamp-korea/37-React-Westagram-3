import React from 'react';
import '../Login/Login.scss';
// import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function LoginRa() {
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
              id="inputId"
              type="text"
              placeholder="@가 포함된 이메일 주소를 입력하세요!"
              autoComplete="username"
            />
            <input
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
            {/* <Link to='/Main'><button id="loginBtn">로그인</button></Link> */}
            {/* <button disabled id="loginBtn">로그인</button> */}
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
