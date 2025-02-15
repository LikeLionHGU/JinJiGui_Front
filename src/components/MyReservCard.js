import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MyReservCard.css";

function MyReservCard({
  img_path,
  title,
  order,
  date,
  time,
  place,
  account,
  ticketNum,
  totalCost,
  isDeposit,
}) {
  const getDepositStatus = () => {
    return isDeposit ? (
      <span style={{ color: "blue" }}>입금 완료</span>
    ) : (
      <span style={{ color: "red" }}>입금 전</span>
    );
  };
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/show/${title}`);
  };

  return (
    <>
      <div className="myreserv-card">
        <div className="myreserv-poster-box">
          <img src={img_path} id="myreserv-poster" alt="show_poster" />
        </div>
        <div className="myreserv-detail-box">
          <div className="myreserv-detail-column" id="myreserv-detail-left-box">
            <div className="myreserv-detail-header">공연명</div>
            <div className="myreserv-detail-header">회차</div>
            <div className="myreserv-detail-header">날짜 | 시간</div>
            <div className="myreserv-detail-header">장소</div>
            <div className="myreserv-detail-header">입금 계좌</div>
            <div className="myreserv-detail-header">티켓 매수 | 총액</div>
            <div className="myreserv-detail-header">입금 상태</div>
          </div>
          <div
            className="myreserv-detail-column"
            id="myreserv-detail-right-box"
          >
            <div
              className="myreserv-detail-body"
              id="myreserv-show-title"
              onClick={handleTitleClick}
              style={{ cursor: "pointer" }}
            >
              {title} ▶
            </div>
            <div className="myreserv-detail-body">{order}공</div>
            <div className="myreserv-detail-body">
              {date} | {time}
            </div>
            <div className="myreserv-detail-body">{place}</div>
            <div className="myreserv-detail-body">{account}</div>
            <div className="myreserv-detail-body">
              {ticketNum}매 | {totalCost}원
            </div>
            <div className="myreserv-detail-body">{getDepositStatus()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReservCard;
