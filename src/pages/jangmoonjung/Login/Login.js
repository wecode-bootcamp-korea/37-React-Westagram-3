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
  const goToMain = () => {
    if (!btnDisable) {
      navigate('/jangmoonjung/Main');
    }
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
