import React from "react";
import SubHeader from "../components/SubHeader";
import login_logo from "../assets/login_logo.svg"
import "./styles/UpdateProfile.css"

function UpdateProfile () {
  return (
    <>
      <SubHeader />
      <div className="update-page-body">
        <div className="update-page-box">
          <div className="update-page-logo-box">
            <img src={login_logo} alt="서비스_로고"/>
          </div>
          <div className="update-page-title-box">
            <div className="update-page-title">
              회원정보 수정
            </div>
          </div>
          <div className="update-page-content-box">
            <div className="update-page-content">

            </div>
            <div className="update-page-content">
              
            </div>
            <div className="update-page-content">
              
            </div>

          </div>
          <div className="update-page-saveButton-box">

          </div>

        </div>
      </div>
    </>
  )
}

export default UpdateProfile;