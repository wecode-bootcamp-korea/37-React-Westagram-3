import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 라용의 컴포넌트
import LoginRa from './pages/rayong/Login/Login';
import MainRa from './pages/rayong/Main/Main';

// 성종화의 컴포넌트
import LoginSung from './pages/JongHwaSung/Login/Login';
import MainSung from './pages/JongHwaSung/Main/Main';

// 장문정의 컴포넌트
import LoginJang from './pages/jangmoonjung/Login/Login';
import MainJang from './pages/jangmoonjung/Main/Main';

// 홍지수의 컴포넌트
import LoginHong from './pages/jisuhong/Login/Login';
import MainHong from './pages/jisuhong/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRa />} />
        <Route path="/rayong/Main" element={<MainRa />} />
        <Route path="/JongHwaSung/Login" element={<LoginSung />} />
        <Route path="/JongHwaSung/Main" element={<MainSung />} />
        <Route path="/jangmoonjung/Login" element={<LoginJang />} />
        <Route path="/jangmoonjung/Main" element={<MainJang />} />
        <Route path="/jisuhong/Login" element={<LoginHong />} />
        <Route path="/jisuhong/Main" element={<MainHong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
