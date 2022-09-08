import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

function LoginRa() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    id: '',
    pw: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const login = e => {
    e.preventDefault();
    fetch('http://westagram-signup.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        id: userInput.id,
        password: userInput.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => alert(error))
      .then(data => {
        if (data.token) {
          localStorage.setItem('TOKEN', data.token);
          alert('로그인 성공');
          navigate('/rayong/Main');
        } else {
          alert('로그인 실패');
        }
      });
  };
  // id : skdyds888@naver.com
  // password : 1111111

  const isValidId = userInput.id.includes('@');
  const isValidPw = userInput.pw.length >= 5;
  const isAllValid = isValidPw && isValidId;

  // const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/rayong/Main');
  // };

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
            <button id="loginBtn" onClick={login} disabled={!isAllValid}>
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
