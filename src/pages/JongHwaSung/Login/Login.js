import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.3.201:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        } else {
          throw new Error('응답을 받을수 없음!');
        }
      })
      .catch(error => {
        // console.log(error);
        alert('로그인 실패');
      })
      .then(data => {
        // console.log(data);

        if (data.message === 'login success') {
          localStorage.setItem('TOKEN', data.token);
          alert('로그인 성공');
          navigate('/Main');
        }
      });
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPW = e => {
    setPw(e.target.value);
  };

  // const [inputValues, setInputValues] = useState({
  //   id: '',
  //   pw:'',
  // });

  // const handleInput = event => {
  //   const { name, value } = event.target;
  //   setInputValues({ ...inputValues, [name]: value });
  // };

  const check = id.includes('@') && pw.length >= 5;

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
              onChange={saveUserId}
            />
            <input
              className="password"
              name="pw"
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
            <Link to="#!">비밀번호를 잊어버리셨나요?</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
