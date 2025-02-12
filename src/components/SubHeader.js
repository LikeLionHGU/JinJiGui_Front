import React from "react";
import { useNavigate } from "react-router";
import "../components/styles/SubHeader.css";
function SubHeader() {
  const navigate = useNavigate();

  const recentReservList = () => {
    navigate("/mypage/recent");
  };
  const updateProfile = () => {
    navigate("/mypage/update");
  };

  return (
    <div>
      <div className="SubHeader_Container">
        <div className="SubHeader_Left">
          <span className="SubHeader_Link" onClick={recentReservList}>
            최근 예매내역
          </span>
          <span className="SubHeader_Link" onClick={updateProfile}>
            개인정보 수정
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
