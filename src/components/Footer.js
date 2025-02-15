import React from "react";
import "../components/styles/Footer.css";
import main_logo from "../assets/main_logo.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_Space"></div>
      <div className="Footer_Container">
        <span className="Footer_Content">회사명: MOBOGGA | 연락처: 010-1234-1234</span>
        <span className="Footer_Content">
          주소: 경상북도 포항시 북구 흥해읍 한동로 558, 한동대학교
        </span>
        <img className="Footer_Content" src={main_logo} alt="로고 이미지" />
      </div>
    </div>
  );
}

export default Footer;
