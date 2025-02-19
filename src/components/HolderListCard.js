import React from "react";
import "./styles/HolderListCard.css";

function HolderListCard({
  id,
  isDeposit,
  totalCost,
  name,
  stdNum,
  ticketNum,
  phoneNum,
  isSelected,
  onCheckboxChange,
}) {
  const handleCheckboxChange = (e) => {
    onCheckboxChange(id, e.target.checked);
  };

  const color = () => {
    if(isDeposit === "X") {
      return <span style={{color: "#EB5A3C"}}>X</span>;
    }
    else {
      return <span style={{color: "white"}}>O</span>;
    }
  }
  return (
    <>
      <div className="manager-holderlist-header">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="manager-holderlist-header">{color()}</div>
      <div className="manager-holderlist-header">
        {totalCost.toLocaleString()}원
      </div>
      <div className="manager-holderlist-header">{name}</div>
      <div className="manager-holderlist-header">{stdNum}</div>
      <div className="manager-holderlist-header">{ticketNum}</div>
      <div className="manager-holderlist-header">{phoneNum}</div>
    </>
  );
}

export default HolderListCard;
