import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HolderListCard.css";
import Swal from "sweetalert2";

import watch_icon from "../assets/watch_icon.svg";
import delete_icon from "../assets/delete_icon.svg";

function HolderListCard({ title, order, applyPeople, maxPeople }) {
  const navigate = useNavigate();

  const handleWatchIconClick = () => {
    navigate(`/show/${title}`);
  };

  const handleDeleteIconClick = () => {
    Swal.fire({
      title: title + " 을(를) 삭제하시겠습니까???",
      text: "삭제하시면 다시 복구시킬 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.value) {
        navigate(`/show/${title}`);
      }
    });
  };

  return (
    <>
      <div className="manager-showlist-header">{title}</div>
      <div className="manager-showlist-header">{order}</div>
      <div className="manager-showlist-header">
        <span style={{ color: "#EB5A3C" }}>{applyPeople}</span>/{maxPeople}
      </div>
      <div className="manager-showlist-header">
        <img className="function_icon" src={watch_icon} onClick={handleWatchIconClick} alt="명단보기" />
      </div>
      <div className="manager-showlist-header">
        <img className="function_icon" src={delete_icon} onClick={handleDeleteIconClick} alt="삭제" />
      </div>
    </>
  );
}

export default HolderListCard;
