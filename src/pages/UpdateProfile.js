import React from "react";
import SubHeader from "../components/SubHeader";
import login_logo from "../assets/login_logo.svg";
import "./styles/UpdateProfile.css";

function UpdateProfile() {
  const alertSave = () => {
    alert("저장되었습니다!");
  }

  return (
    <>
      <SubHeader />
      <div className="update-page-body">
        <div className="update-page-box">
          <div className="update-page-title-box">
            <div className="update-page-title">회원정보 수정</div>
          </div>
          <div className="update-page-content-box">
            <div className="update-page-content" id="update-my-name">
              <input type="text" placeholder="이름" required/>
            </div>
            <div className="update-page-content" id="update-my-phone">
              <input type="text" placeholder="전화번호" required/>
            </div>
            <div className="update-page-content" id="update-my-stdNum">
              <input type="text" placeholder="학번" required/>
            </div>
            <div className="update-page-saveButton-box">
              <button onClick={alertSave} className="update-page-saveButton">
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
