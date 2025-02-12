import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../components/styles/Header.css";
function Header() {
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [manager, setManager] = useState(true);

  const navigate = useNavigate();

  const loginEnter = () => {
    navigate("/login");
  };
  const homeEnter = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="Header_Container">
        <div className="Header_Left">
          <span onClick={homeEnter}>LOGO</span>
        </div>

        {notLoggedIn ? (
          <div className="Header_Right">
            <span onClick={homeEnter}>홈</span>
            <span onClick={loginEnter}>로그인</span>
            <span>회원가입</span>
          </div>
        ) : manager ? (
          <div className="Header_Right">
            <span onClick={loginEnter}>관리자 페이지</span>
            <span onClick={homeEnter}>홈</span>
            <span>로그아웃</span>
            <span>마이페이지</span>
          </div>
        ) : (
          <div className="Header_Right">
            <span onClick={homeEnter}>홈</span>
            <span onClick={loginEnter}>로그아웃</span>
            <span>마이페이지</span>
          </div>
        )}
      </div>
      <hr className="Header_Line" />
    </div>
  );
}

export default Header;
