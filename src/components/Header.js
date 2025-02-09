import React from "react";
import { useNavigate } from "react-router";
import "../components/styles/Header.css"
function Header () {

  const navigate = useNavigate();

  const loginEnter = () => {
    navigate('/login')
  };
  const homeEnter = () => {
    navigate('/')
  };

  return (
    <div>
      <div className="Header_Container">

      <div className="Header_Left">
          <span onClick={homeEnter}>LOGO</span>
        </div>
        
        <div className="Header_Right">
          <span onClick={homeEnter}>홈</span>
          <span onClick={loginEnter}>로그인</span>
          <span>회원가입</span>
        </div>
      </div>
      <hr className="Header_Line"/>
    </div>
  )
}

export default Header;