import React from "react";
import "../components/styles/Footer.css";
import main_logo from "../assets/main_logo.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_Space"></div>
      <div className="Footer_Container">
        <img
          className="Footer_Content"
          src={main_logo}
          width={200}
          alt="로고 이미지"
        />
        <span className="Footer_Content">
          **공연 생성 및 예매 관리를 위한 동아리 관리자 승급 문의는
          22100130@handong.ac.kr로 연락바랍니다.
        </span>
        <span className="Footer_Content">
          회사명: MOBOGGA(모보까) | 연락처: ‭010-9543-8893‬ | 주소: 경상북도
          포항시 북구 흥해읍 한동로 558, 한동대학교
        </span>
        <span className="Footer_Content">
          Copyright ⓒ MOBOGGA. ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  );
}

export default Footer;
