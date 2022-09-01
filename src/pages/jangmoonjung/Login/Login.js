import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginJang() {
  // 입력 데이터 저장
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  function saveUserId(event) {
    setIdValue(event.target.value);
  }
  function saveUserPw(event) {
    setPwValue(event.target.value);
  }
  // 로그인 버튼 활성화
  const [btnDisable, setBtnDisable] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const validationTest = () => {
    if (idValue.includes('@') && pwValue.length > 5) {
      setIsActive(true);
      setBtnDisable(false);
    } else {
      setIsActive(false);
      setBtnDisable(true);
    }
  };
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
            onChange={e => {
              saveUserId(e);
              validationTest();
            }}
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={e => {
              saveUserPw(e);
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
