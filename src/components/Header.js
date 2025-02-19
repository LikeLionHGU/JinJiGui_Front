import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import "../components/styles/Header.css";
import main_logo from "../assets/main_logo.svg";
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
    alert("로그아웃 되었습니다!");
    navigate("/");
  };

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

        {userInfo ? (
          <div className="Header_Right">
            {manager && (
              <NavLink className="Header_Link" to="/manager">
                <span>내 공연 관리</span>
              </NavLink>
            )}
            <span className="Header_Link" onClick={homeEnter}>
              홈
            </span>
            <span className="Header_Link" onClick={logoutEnter}>
              로그아웃
            </span>
            <NavLink className="Header_Link" to="/mypage/reservation">
              <span>마이페이지</span>
            </NavLink>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Header;
