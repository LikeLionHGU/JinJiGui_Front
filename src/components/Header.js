import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../components/styles/Header.css";
import main_logo from "../assets/main_logo.svg";

function Header() {
  // eslint-disable-next-line
  const [notLoggedIn, setNotLoggedIn] = useState(true);
  // eslint-disable-next-line
  const [manager, setManager] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = sessionStorage.getItem("serverResponse");

    if (userInfo) {
      setNotLoggedIn(false);

      // 사용자 정보에서 관리자 여부를 확인하는 로직 (예시)
      const parsedUserInfo = JSON.parse(userInfo);
      if (parsedUserInfo.isManager) {
        setManager(true);
      }
    }
  }, []);

  const loginEnter = () => {
    navigate("/login");
  };
  const homeEnter = () => {
    navigate("/");
  };
  // const myPage = () => {
  //   navigate("/mypage");
  // };
  // const ManagerPage = () => {
  //   navigate("/manager");
  // };

  // 마이페이지 경로 체크 함수
  // eslint-disable-next-line
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
            <NavLink className="Header_Link" to="/">
              <span>홈</span>
            </NavLink>
            <span className="Header_Link" onClick={loginEnter}>
              로그인
            </span>
            <span className="Header_Link" onClick={loginEnter}>
              회원가입
            </span>
          </div>
        ) : manager ? (
          <div className="Header_Right">
            <NavLink className="Header_Link" to="/manager">
              <span>내 공연 관리</span>
            </NavLink>
            <NavLink className="Header_Link" to="/">
              <span>홈</span>
            </NavLink>
            <span>로그아웃</span>
            <NavLink className="Header_Link" to="/mypage">
              <span>마이페이지</span>
            </NavLink>
          </div>
        ) : (
          <div className="Header_Right">
            <span className="Header_Link" onClick={homeEnter}>
              홈
            </span>
            <span className="Header_Link">로그아웃</span>
            <NavLink className="Header_Link" to="/mypage/reservation">
              <span>마이페이지</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
