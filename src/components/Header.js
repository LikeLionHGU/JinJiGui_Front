import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../components/styles/Header.css";
import main_logo from "../assets/main_logo.svg";

function Header() {
  const [notLoggedIn, setNotLoggedIn] = useState(true);
  const [manager, setManager] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const loginEnter = () => {
    navigate("/login");
  };
  const homeEnter = () => {
    navigate("/");
  };
  const myPage = () => {
    navigate("/mypage");
  };
  const ManagerPage = () => {
    navigate("/manager");
  };

  const activeStyle = {
    color: "#EB5A3C",
  };

  // 마이페이지 경로 체크 함수
  const isMyPageActive = () => {
    return location.pathname.startsWith("/mypage");
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
            <NavLink
              className="Header_Link"
              style={({ isActive }) =>
                isActive ? activeStyle : { color: "white" }
              }
              to="/"
            >
              <span>홈</span>
            </NavLink>
            <span className="Header_Link" onClick={loginEnter}>
              로그인
            </span>
            <span>회원가입</span>
          </div>
        ) : manager ? (
          <div className="Header_Right">
            <NavLink
              className="Header_Link"
              style={({ isActive }) => (isActive ? activeStyle : {color: "white"})}
              to="/manager"
            >
              <span>내 공연 관리</span>
            </NavLink>
            <NavLink
              className="Header_Link"
              style={({ isActive }) =>
                isActive ? activeStyle : { color: "white" }
              }
              to="/"
            >
              <span>홈</span>
            </NavLink>
            <span>로그아웃</span>
            <NavLink
              className="Header_Link"
              style={() =>
                isMyPageActive() ? activeStyle : { color: "white" }
              }
              to="/mypage"
            >
              <span>마이페이지</span>
            </NavLink>
          </div>
        ) : (
          <div className="Header_Right">
            <span className="Header_Link" onClick={homeEnter}>
              홈
            </span>
            <span className="Header_Link" onClick={loginEnter}>
              로그아웃
            </span>
            <NavLink
              className="Header_Link"
              style={() =>
                isMyPageActive() ? activeStyle : { color: "white" }
              }
              to="/mypage"
            >
              <span>마이페이지</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
