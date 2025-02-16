import React from "react";
import "./styles/AddInfo.css";

function UpdateProfile() {
  const alertSave = () => {
    alert("저장되었습니다!");
  };

  return (
    <>
      <div className="add-page-body">
        <div className="add-page-box">
          <div className="add-page-title-box">
            <div className="add-page-title">추가정보 기입</div>
          </div>
          <div className="add-page-content-box">
            <div className="add-page-content" id="add-my-name">
              <input type="text" placeholder="이름" required />
            </div>
            <div className="add-page-content" id="add-my-phone">
              <input type="text" placeholder="전화번호" required />
            </div>
            <div className="add-page-content" id="add-my-stdNum">
              <input type="text" placeholder="학번" required />
            </div>
            <span className="agree_box">
              <p className="agree_word">개인정보 수집 동의하기</p>
              <input type="checkbox" className="agree_check"></input>
            </span>
            <div className="add-page-saveButton-box">
              <button onClick={alertSave} className="add-page-saveButton">
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
