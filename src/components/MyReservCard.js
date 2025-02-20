import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MyReservCard.css";

function MyReservCard({
  img_path,
  id,
  title,
  order,
  date,
  time,
  account,
  ticketNum,
  totalCost,
  isDeposit,
}) {
  const navigate = useNavigate();

  const getDepositStatus = () => (
    <span className={`deposit-status ${isDeposit === true ? 'complete' : 'pending'}`}>
      {isDeposit === true ? '입금 완료' : '입금 전'}
    </span>
  );

  const handleShowDetail = () => {
    navigate(`/show/${id}`);
  };

  const formatCost = (cost) => {
    return parseInt(cost).toLocaleString() + '원';
  };

  const formatDateTime = (date, time) => {
    return `${date} | ${time}`;
  };

  return (
    <div className="myreserv-card">
      <div className="myreserv-poster-box">
        <img
          src={img_path}
          className="myreserv-poster"
          onClick={handleShowDetail}
          alt={`${title} 공연 포스터`}
        />
      </div>
      <div className="myreserv-detail-box">
        <div className="myreserv-detail-column detail-headers">
          <div className="myreserv-detail-header">공연명</div>
          <div className="myreserv-detail-header">회차</div>
          <div className="myreserv-detail-header">날짜 | 시간</div>
          <div className="myreserv-detail-header">입금 계좌</div>
          <div className="myreserv-detail-header">티켓 매수 | 총액</div>
          <div className="myreserv-detail-header">입금 상태</div>
        </div>
        <div className="myreserv-detail-column detail-contents">
          <div
            className="myreserv-detail-body show-title"
            onClick={handleShowDetail}
          >
            {title} ▶
          </div>
          <div className="myreserv-detail-body">{order}공</div>
          <div className="myreserv-detail-body">
            {formatDateTime(date, time)}
          </div>
          <div className="myreserv-detail-body">{account}</div>
          <div className="myreserv-detail-body">
            {ticketNum}매 | {formatCost(totalCost)}
          </div>
          <div className="myreserv-detail-body">{getDepositStatus()}</div>
        </div>
      </div>
    </div>
  );
}

export default MyReservCard;