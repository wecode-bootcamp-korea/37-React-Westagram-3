import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main');
  };

  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");

  // const saveUserId = (e) =>{
  //   setId(e.target.value)
  // }

  // const saveUserPW = (e) =>{
  //   setPw(e.target.value)
  // }

  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const check = inputValues.id.includes('@') && inputValues.pw.length >= 5;

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
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
            />
            <input
              className="password"
              name="pw"
              type="password"
              placeholder="비밀번호"
              onChange={handleInput}
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
            <Link to="#!">비밀번호를 잊어버리셨나요?</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
