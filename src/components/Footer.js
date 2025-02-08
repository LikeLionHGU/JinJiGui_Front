import React from "react";
import "../components/styles/Footer.css";

function Footer () {
  return (
    <div className="Footer">
      <hr className="Footer_Line"/>
      <div className="Footer_Container">
        <span className="Footer_Left">
          <ul>
            <li>LOGO</li>
            <li>COMPANY: MOBOGGA</li>
            <li>ADRESS: Jongno 3-gil, Jongno-gu, Seoul</li>
            <li>CALL: 010-8507-5949</li>
          </ul>
        </span>

        <div className="Footer_Right">
          <ul>
            <li>Company introduction</li>
            <li>Recruitment of talent</li>
            <li>Affiliate proposal</li>
            <li>Terms and Conditions of Use</li>
            <li>Personal Information Processing Policy</li>
            <li>Policy Customer Center</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;