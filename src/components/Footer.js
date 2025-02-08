import React from "react";
import "../components/styles/Footer.css";

function Footer () {
  return (
    <div className="Footer">
      <hr className="Footer_Line"/>
      <div className="Footer_Container">
        <div className="Footer_Left">
          <span>LOGO</span>
          <span>COMPANY: MOBOGGA</span>
          <span>ADRESS: Jongno 3-gil, Jongno-gu, Seoul</span>
          <span>CALL: 010-8507-5949</span>
        </div>

        <div className="Footer_Right">
          <span>Company introduction</span>
          <span>Recruitment of talent</span>
          <span>Affiliate proposal</span>
          <span>Terms and Conditions of Use</span>
          <span>Personal Information Processing Policy</span>
          <span>Policy Customer Center</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;