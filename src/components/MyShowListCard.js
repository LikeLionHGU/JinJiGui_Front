import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MyShowListCard.css";
import Swal from "sweetalert2";

import watch_icon from "../assets/watch_icon.svg";
import delete_icon from "../assets/delete_icon.svg";

function MyShowListCard({ title, order, applyPeople, maxPeople }) {
  const navigate = useNavigate();

  const handleWatchIconClick = () => {
    navigate(`/manager/holder`);
  };

  const handleDeleteIconClick = () => {
    Swal.fire({
      title: title + " 을(를) 삭제하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      customClass: {
        title: 'alert-title'
      }
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

export default MyShowListCard;
