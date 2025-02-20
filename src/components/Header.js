import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../components/styles/Header.css";
import main_logo from "../assets/main_logo.svg";
import Swal from "sweetalert2";
// import { useRecoilValue } from "recoil";
// import { sessionState } from "../atom/atom";

function Header() {
  // eslint-disable-next-line
  // const [notLoggedIn, setNotLoggedIn] = useState(false);
  // eslint-disable-next-line
  const [manager, setManager] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = sessionStorage.getItem("serverResponse");
  const userAuth = sessionStorage.getItem("serverResponse:Authority");

  const activeStyle = {
    color: "#EB5A3C",
  };

  // const isLoginActive = () => {
  //   return location.pathname === "/login" || location.pathname === "/";
  // };

  // const sessionValue = useRecoilValue(sessionState);

  useEffect(() => {
    // console.log("sessionValue", sessionValue);
    // console.log("sessionState", sessionState);
    if (userAuth === "1" || userAuth === "2") {
      setManager(true);
      const parsedUserInfo = JSON.parse(userInfo);
      if (parsedUserInfo.isManager) {
        setManager(true);
      }
    }
  }, [userAuth, userInfo]);

  const logoutEnter = () => {
    sessionStorage.clear();
    Swal.fire({
      title: "로그아웃 되었습니다!",
      text: "다음에 또 놀러오세요~",
      icon: "success",
    }).then(async (result) => {
      if (result.value) {
        window.location.reload();
      }
    });
    navigate("/");
  };

  const loginEnter = () => {
    navigate("/login");
    window.location.reload();
  };

  const homeEnter = () => {
    navigate("/");
    window.location.reload();
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
            id="main-logo"
            src={main_logo}
            alt="로고 이미지"
            onClick={homeEnter}
          />
        </div>

        {userInfo ? (
          <div className="Header_Right">
            {manager && (
              <NavLink
                className="Header_Link"
                style={({ isActive }) => (isActive ? activeStyle : {})}
                to="/manager"
              >
                <span>내 공연 관리</span>
              </NavLink>
            )}
            <NavLink
              className="Header_Link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/"
            >
              <span>홈</span>
            </NavLink>
            <span className="Header_Link" onClick={logoutEnter}>
              로그아웃
            </span>
            <NavLink
              className="Header_Link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/mypage"
            >
              <span>마이페이지</span>
            </NavLink>
          </div>
        ) : (
          <div className="Header_Right">
            <NavLink
              className="Header_Link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/"
            >
              <span>홈</span>
            </NavLink>
            <NavLink
              className="Header_Link"
              style={({ isActive }) => (isActive ? activeStyle : {})}
              to="/login"
            >
              <span>로그인</span>
            </NavLink>
            <span className="Header_Link" onClick={loginEnter}>
              회원가입
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
