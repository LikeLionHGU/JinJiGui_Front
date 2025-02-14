import React from "react";
import SubHeader from "../components/SubHeader";
import "./styles/ManagerShowList.css";

function ManagerShowList() {
  return (
    <>
      <SubHeader />
      <div className="manager-showlist-body">
        <div className="manager-showlist-box">
          <div className="manager-showlist-title-box">
            <div className="manager-showlist-title">내 공연 관리</div>
          </div>
          <div className="manager-showlist-content-box">
            <div className="manager-showlist-content-header-box">
              <div className="manager-showlist-content-header">제목</div>
              <div className="manager-showlist-content-header">예매현황</div>
              <div className="manager-showlist-content-header">명단보기</div>
              <div className="manager-showlist-content-header">수정</div>
              <div className="manager-showlist-content-header">삭제</div>
            </div>
            <div className="manager-showlist-content-body-box">
              <div className="manager-showlist-content-body">
                우리 집에 왜 왔니?
              </div>
              <div className="manager-showlist-content-body">28/30</div>
              <button className="manager-showlist-content-body">
                명단보기
              </button>
              <button className="manager-showlist-content-body">수정</button>
              <button className="manager-showlist-content-body">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerShowList;
