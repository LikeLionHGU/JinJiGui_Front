import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HolderListCard from "../components/HolderListCard";
import excel_icon from "../assets/excel_icon.png";
import "./styles/HolderList.css";
import Swal from "sweetalert2";

function HolderList() {
  const navigate = useNavigate();
  const { scheduleId } = useParams();
  const [HolderListCards, setHolderListCards] = useState([]);
  // const [HolderCSV, setHolderCSV] = useState([]);
  const [selectedHolders, setSelectedHolders] = useState({});

  const getHolderListCards = async () => {
    try {
      const response = await fetch(
        `https://jinjigui.info:443/manager/holder/${scheduleId}`
      );
      const json = await response.json();
      setHolderListCards(json.reservation_list);

      // 초기 선택 상태 설정
      const initialSelected = {};
      json.reservation_list.forEach((holder) => {
        initialSelected[holder.reservation.id] = false;
      });
      setSelectedHolders(initialSelected);
    } catch (error) {
      console.error("Error fetching holder list:", error);
    }
  };

  const downloadCSV = async () => {
    try {
      const response = await fetch(
        `https://jinjigui.info:443/manager/holder/${scheduleId}`
      );
      const json = await response.json();
      const jsonData = JSON.stringify(json.csv_json);
      let arrData = JSON.parse(jsonData);
      console.log(arrData);

      let CSV = "";
      // CSV += "전체 예매 명단 목록" + "\r\n\n";
      // CSV += `${json.title} ${json.order} 예매 명단 목록` + "\r\n\n";

      let row = "";
      const arrKey = [
        "순번",
        "입금 확인",
        "총 금액",
        "학번",
        "이름",
        "매수",
        "전화번호 ",
      ];
      for (let index in arrKey) {
        row += arrKey[index] + ",";
      }
      row = row.substring(0, row.length - 1);
      row = row.slice(0, -1);
      CSV += row + "\r\n";

      for (let i = 0; i < arrData.length; i++) {
        let row = i + 1 + ", ";
        for (let index in arrData[i]) {
          row += arrData[i][index] + ",";
        }
        row = row.substring(0, row.length - 1);
        row.slice(0, row.length - 1);
        CSV += row + "\r\n";
      }

      let uri = "data:text/csv;charset=utf-8,\uFEFF" + encodeURI(CSV);
      let link = document.createElement("a");
      link.href = uri;
      link.style = "visibility:hidden";
      // link.download = "전체 예매 명단.csv"
      link.download = json.title + " " + json.order + "공 예매 명단.csv";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error fetching holder list:", error);
    }
  };

  const handleCheckboxChange = (id, isChecked) => {
    setSelectedHolders((prev) => ({
      ...prev,
      [id]: isChecked,
    }));
  };

  const handleConfirmDepositClick = async () => {
    // 선택된 예약 ID 배열 생성
    const selectedIds = Object.keys(selectedHolders)
      .filter((id) => selectedHolders[id])
      .map((id) => parseInt(id));

    if (selectedIds.length === 0) {
      Swal.fire({
        title: "선택된 예약이 없습니다",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    try {
      // 입금 확인 API 요청 - 형식에 맞게 변환
      const requestBody = selectedIds.map((id) => ({ reservationId: id }));

      const response = await fetch(
        `https://jinjigui.info:443/manager/holder/save`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            credentials: "include",
          },
          body: JSON.stringify(requestBody),
        }
      );

      console.log(requestBody);

      if (response.ok) {
        Swal.fire({
          title: "입금 확인 처리가 완료되었습니다",
          icon: "success",
          confirmButtonText: "확인",
        }).then(() => {
          // 목록 다시 불러오기
          getHolderListCards();
        });
      } else {
        throw new Error("Server responded with an error");
      }
    } catch (error) {
      console.error("Error confirming deposits:", error);
      Swal.fire({
        title: "입금 확인 처리 중 오류가 발생했습니다",
        icon: "error",
        confirmButtonText: "확인",
      });
    }
  };

  const handleCancelDepositClick = async () => {
    // 선택된 예약 ID 배열 생성
    const selectedIds = Object.keys(selectedHolders)
      .filter((id) => selectedHolders[id])
      .map((id) => parseInt(id));

    if (selectedIds.length === 0) {
      Swal.fire({
        title: "선택된 예약이 없습니다",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    try {
      // 입금 확인 API 요청 - 형식에 맞게 변환
      const requestBody = selectedIds.map((id) => ({ reservationId: id }));
      console.log(requestBody);

      const response = await fetch(
        `https://jinjigui.info:443/manager/holder/cancel`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            credentials: "include",
          },
          body: JSON.stringify(requestBody),
        }
      );

      console.log(requestBody);

      if (response.ok) {
        Swal.fire({
          title: "입금 확인 처리가 취소되었습니다",
          icon: "success",
          confirmButtonText: "확인",
        }).then(() => {
          // 목록 다시 불러오기
          getHolderListCards();
        });
      } else {
        throw new Error("Server responded with an error");
      }
    } catch (error) {
      console.error("Error confirming deposits:", error);
      Swal.fire({
        title: "입금 확인 처리 중 오류가 발생했습니다",
        icon: "error",
        confirmButtonText: "확인",
      });
    }
  };

  const handleDeleteButtonClick = () => {
    const selectedIds = Object.keys(selectedHolders)
      .filter((id) => selectedHolders[id])
      .map((id) => parseInt(id));

    if (selectedIds.length === 0) {
      Swal.fire({
        title: "선택된 예약이 없습니다",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    Swal.fire({
      title: "선택한 예약을 삭제하시겠습니까?",
      text: "이 작업은 되돌릴 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      customClass: {
        title: "alert-title",
      },
    }).then(async (result) => {
      if (result.value) {
        try {
          // 삭제 API 요청 - 형식에 맞게 변환
          const requestBody = selectedIds.map((id) => ({ reservationId: id }));

          const response = await fetch(
            `https://jinjigui.info:443/manager/holder/delete`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                credentials: "include",
              },
              body: JSON.stringify(requestBody),
            }
          );

          if (response.ok) {
            Swal.fire({
              title: "예약이 삭제되었습니다",
              icon: "success",
              confirmButtonText: "확인",
            }).then(() => {
              // 목록 다시 불러오기
              getHolderListCards();
            });
          } else {
            throw new Error("Server responded with an error");
          }
        } catch (error) {
          console.error("Error deleting reservations:", error);
          Swal.fire({
            title: "예약 삭제 중 오류가 발생했습니다",
            icon: "error",
            confirmButtonText: "확인",
          });
        }
      }
    });
  };

  useEffect(() => {
    if (scheduleId) {
      getHolderListCards();
    }
  }, [scheduleId]);

  return (
    <>
      <div className="manager-holderlist-body">
        <div className="manager-holderlist-box">
          <div className="manager-holderlist-title-box">
            <div className="manager-holderlist-title">예매명단관리</div>
          </div>
          <div className="manager-holderlist-button-box">
            <div className="manager-holderlist-button-left-box">
              <div
                type="primary"
                className="manager-holderlist-exportButton"
                onClick={downloadCSV}
              >
                  <img
                    src={excel_icon}
                    height={20}
                    style={{"marginRight": "5px"}}
                    className="manager-holderlist-excel-icon"
                  />
                전체 명단 CSV 추출
              </div>
            </div>
            <div className="manager-holderlist-button-right-box">
              <div
                className="manager-holderlist-confirmButton"
                onClick={handleConfirmDepositClick}
              >
                입금여부 확정
              </div>
              <div
                className="manager-holderlist-cancelButton"
                onClick={handleCancelDepositClick}
              >
                입금여부 취소
              </div>
              <div
                className="manager-holderlist-deleteButton"
                onClick={handleDeleteButtonClick}
              >
                삭제
              </div>
            </div>
          </div>
          <div className="manager-holderlist-content-box">
            <div className="manager-holderlist-header-box">
              <div className="manager-holderlist-header"></div>
              <div className="manager-holderlist-header">입금 확인</div>
              <div className="manager-holderlist-header">총 금액</div>
              <div className="manager-holderlist-header">이름</div>
              <div className="manager-holderlist-header">학번</div>
              <div className="manager-holderlist-header">매수</div>
              <div className="manager-holderlist-header">전화번호</div>
            </div>
            <div className="manager-holderlist-content">
              {HolderListCards.map((holder) => (
                <HolderListCard
                  key={holder.primary}
                  id={holder.reservation.id}
                  isDeposit={holder.reservation.isDeposit}
                  totalCost={holder.totalCost}
                  name={holder.user.name}
                  stdNum={holder.user.stdNumber}
                  ticketNum={holder.reservation.ticketNumber}
                  phoneNum={holder.user.phoneNumber}
                  isSelected={selectedHolders[holder.reservation.id] || false}
                  onCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HolderList;
