import React from "react";
import SubHeader from "../components/SubHeader";
import login_logo from "../assets/login_logo.svg";
import "./styles/UpdateProfile.css";

function UpdateProfile() {
  return (
    <>
      <SubHeader />
      <div className="update-page-body">
        <div className="update-page-box">
          <div className="update-page-logo-box">
            <img src={login_logo} alt="서비스_로고" />
          </div>
          <div className="update-page-title-box">
            <div className="update-page-title">회원정보 수정</div>
          </div>
          <form className="update-page-content-box" onsubmit="return false;">
            <div className="update-page-content" id="update-my-name">
              <input type="text" placeholder="이름" />
            </div>
            <div className="update-page-content" id="update-my-phone">
              <input type="text" placeholder="전화번호" />
            </div>
            <div className="update-page-content" id="update-my-stdNum">
              <input type="text" placeholder="학번" />
            </div>
            <div className="update-page-saveButton-box" >
              <input
                type="submit"
                value="저장"
                // onClick={alert("저장되었습니다.")}
                className="update-page-saveButton"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
