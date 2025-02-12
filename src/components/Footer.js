import React from "react";
import "../components/styles/Footer.css";
import main_logo from "../assets/main_logo.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_Space"></div>
      <div className="Footer_Container">
        <img className="Footer_Content" src={main_logo} alt="로고 이미지" />
        <span className="Footer_Content">회사명: MOBOGGA</span>
        <span className="Footer_Content">
          주소: 경상북도 포항시 북구 흥해읍 한동로 558, 한동대학교
        </span>
        <span className="Footer_Content">연락처: [대장님 전화번호]</span>
      </div>
    </div>
  );
}

export default Footer;
