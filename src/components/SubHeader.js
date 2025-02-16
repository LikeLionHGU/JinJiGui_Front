import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../components/styles/SubHeader.css";

function SubHeader() {
  const location = useLocation();
  const activeStyle = {
    color: "#EB5A3C",
  };

  const isReservationActive = () => {
    return location.pathname === '/mypage/reservation' || location.pathname === '/mypage';
  };

  return (
    <div>
      <div className="SubHeader_Container">
        <div className="SubHeader_Left">
          <NavLink
            className="SubHeader_Link"
            style={() => (isReservationActive() ? activeStyle : {})}
            to="/mypage/reservation"
          >
            최근 예매내역
          </NavLink>
          <NavLink
            className="SubHeader_Link"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            to="/mypage/update"
          >
            개인정보 수정
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;