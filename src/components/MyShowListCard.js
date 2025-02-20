import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MyShowListCard.css";
import Swal from "sweetalert2";

import watch_icon from "../assets/watch_icon.svg";
import delete_icon from "../assets/delete_icon.svg";

function MyShowListCard({
  title,
  order,
  applyPeople,
  maxPeople,
  showId,
  scheduleId,
}) {
  const navigate = useNavigate();

  const handleWatchIconClick = () => {
    navigate(`/manager/holder/${scheduleId}`);
  };

  const deleteShow = async () => {
    try {
      const response = await fetch(
        `https://jinjigui.info:443/manager/show/${scheduleId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            credentials: "include",
          },
        }
      );
    } catch (error) {
      console.error("Error delete show:", error);
    }
  };

  const handleDeleteIconClick = () => {
    Swal.fire({
      title: `${title} ${order}을(를) 삭제하시겠습니까?`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      customClass: {
        title: "alert-title",
      },
    }).then((result) => {
      if (result.value) {
        deleteShow();
        Swal.fire({
          title: "공연이 삭제되었습니다.",
          text: "잘못 삭제하셔도 저희는 복구시켜드릴 수 없습니다.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className="manager-showlist-cell">{title}</div>
      <div className="manager-showlist-cell">{order}</div>
      <div className="manager-showlist-cell">
        <span style={{ color: "#EB5A3C" }}>{applyPeople}</span>/{maxPeople}
      </div>
      <div className="manager-showlist-cell">
        <img
          className="function_icon"
          src={watch_icon}
          onClick={handleWatchIconClick}
          alt="명단보기"
        />
      </div>
      <div className="manager-showlist-cell">
        <img
          className="function_icon"
          src={delete_icon}
          onClick={handleDeleteIconClick}
          alt="삭제"
        />
      </div>
    </>
  );
}

export default MyShowListCard;
