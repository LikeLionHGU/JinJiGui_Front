import React from "react";
import "./styles/HolderListCard.css";

function HolderListCard({
  isDeposit,
  totalCost,
  name,
  stdNum,
  ticketNum,
  order,
  phoneNum,
}) {
  const getConfirmStatus = () => {
    return isDeposit ? <span>O</span> : <span>X</span>;
  };
  return (
    <>
      <div className="manager-holderlist-header">
        <input type="checkbox" />
      </div>
      <div className="manager-holderlist-header">{getConfirmStatus()}</div>
      <div className="manager-holderlist-header">{totalCost}</div>
      <div className="manager-holderlist-header">{name}</div>
      <div className="manager-holderlist-header">{stdNum}</div>
      <div className="manager-holderlist-header">{ticketNum}</div>
      <div className="manager-holderlist-header">{phoneNum}</div>
    </>
  );
}

export default HolderListCard;
