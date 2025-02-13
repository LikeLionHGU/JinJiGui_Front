import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../components/styles/Header.css";
import main_logo from "../assets/main_logo.svg";

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
          <img
            className="Header_Link"
            src={main_logo}
            alt="로고 이미지"
            onClick={homeEnter}
          />
        </div>

        {notLoggedIn ? (
          <div className="Header_Right">
            <span className="Header_Link" onClick={homeEnter}>
              홈
            </span>
            <span className="Header_Link" onClick={loginEnter}>
              로그인
            </span>
            <span>회원가입</span>
          </div>
        ) : manager ? (
          <div className="Header_Right">
            <span className="Header_Link" onClick={loginEnter}>
              관리자 페이지
            </span>
            <span className="Header_Link" onClick={homeEnter}>
              홈
            </span>
            <span>로그아웃</span>
            <span>마이페이지</span>
          </div>
        ) : (
          <div className="Header_Right">
            <span className="Header_Link" onClick={homeEnter}>
              홈
            </span>
            <span className="Header_Link" onClick={loginEnter}>
              로그아웃
            </span>
            <span>마이페이지</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
