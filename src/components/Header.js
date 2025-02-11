import React from "react";
import { useNavigate } from "react-router";
import "../components/styles/Header.css";
function Header() {
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
          <span className="Header_Link" onClick={homeEnter}>LOGO</span>
        </div>

        <div className="Header_Right">
          <span className="Header_Link" onClick={homeEnter}>
            홈
          </span>
          <span className="Header_Link" onClick={loginEnter}>
            로그인
          </span>
          <span className="Header_Link" onClick={loginEnter}>
            회원가입
          </span>
        </div>
      </div>
      <hr className="Header_Line" />
    </div>
  );
}

export default Header;
