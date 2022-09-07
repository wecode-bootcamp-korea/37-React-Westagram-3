import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginJang() {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const [btnDisable, setBtnDisable] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const validationTest = () => {
    if (inputValue.id.includes('@') && inputValue.pw.length > 5) {
      setIsActive(true);
      setBtnDisable(false);
    } else {
      setIsActive(false);
      setBtnDisable(true);
    }
  };
  const navigate = useNavigate();
  // const goToMain = e => {
  //   e.preventDefault();
  //   if (!btnDisable) {
  //     navigate('/jangmoonjung/Main');
  //   }
  // };
  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.3.201:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputValue.id,
        password: inputValue.pw,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === 'login success') {
          localStorage.setItem('TOKEN', data.token);
          alert('로그인 성공');
          navigate('/jangmoonjung/Main');
          return;
        }
        alert('로그인 실패');
      });
  };

  return (
    <main className="login">
      <article className="container">
        <h1 className="logo">Westagram</h1>
        <form className="form">
          <input
            name="id"
            onChange={e => {
              handleInput(e);
              validationTest();
            }}
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            name="pw"
            onChange={e => {
              handleInput(e);
              validationTest();
            }}
            className="pw"
            type="password"
            placeholder="비밀번호"
          />
          <button
            disabled={btnDisable}
            onClick={goToMain}
            type="button"
            className={isActive ? 'btnActive' : 'btnUnactive'}
          >
            로그인
          </button>
        </form>
        <span className="validation" />
        <div className="find">비밀번호를 잊으셨나요?</div>
      </article>
    </main>
  );
}

export default LoginJang;
