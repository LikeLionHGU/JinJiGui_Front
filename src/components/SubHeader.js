import React from "react";
import { useNavigate } from "react-router";
import "../components/styles/SubHeader.css";
function SubHeader() {
  const navigate = useNavigate();

  const recentReservList = () => {
    navigate("/recent");
  };
  const updateProfile = () => {
    navigate("/update");
  };

  return (
    <div>
      <div className="SubHeader_Container">
        <div className="SubHeader_Left">
          <span className="SubHeader_Link" onClick={homeEnter}>LOGO</span>
        </div>

        <div className="SubHeader_Right">
          <span className="SubHeader_Link" onClick={homeEnter}>
            최근 예매내역
          </span>
          <span className="SubHeader_Link" onClick={loginEnter}>
            개인정보 수정
          </span>
        </div>
      </div>
      <hr className="SubHeader_Line" />
    </div>
  );
}

export default SubHeader;
