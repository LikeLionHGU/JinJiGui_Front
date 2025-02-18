import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HolderListCard from "../components/HolderListCard";
import "./styles/HolderList.css";
import Swal from "sweetalert2";

function HolderList() {
  const holderList_data = [
    {
      isDeposit: true,
      totalCost: 4500,
      name: "강병찬",
      stdNum: 22100100,
      ticketNum: 1,
      phoneNum: "010-1234-1234",
    },
    {
      isDeposit: false,
      totalCost: 105000,
      name: "김시온",
      stdNum: 22188134,
      ticketNum: 50,
      phoneNum: "010-3453-3214",
    },
    {
      isDeposit: true,
      totalCost: 50000,
      name: "한규호",
      stdNum: 22143533,
      ticketNum: 10,
      phoneNum: "010-2134-5467",
    },
    {
      isDeposit: false,
      totalCost: 13500,
      name: "이지원",
      stdNum: 22156789,
      ticketNum: 3,
      phoneNum: "010-8765-4321",
    },
    {
      isDeposit: true,
      totalCost: 27000,
      name: "박민수",
      stdNum: 22167890,
      ticketNum: 6,
      phoneNum: "010-5678-1234",
    },
    {
      isDeposit: true,
      totalCost: 9000,
      name: "정유진",
      stdNum: 22178901,
      ticketNum: 2,
      phoneNum: "010-9012-3456",
    },
    {
      isDeposit: false,
      totalCost: 31500,
      name: "최서연",
      stdNum: 22189012,
      ticketNum: 7,
      phoneNum: "010-3456-7890",
    },
    {
      isDeposit: true,
      totalCost: 18000,
      name: "송현우",
      stdNum: 22190123,
      ticketNum: 4,
      phoneNum: "010-7890-1234",
    },
    {
      isDeposit: false,
      totalCost: 22500,
      name: "임수진",
      stdNum: 22123456,
      ticketNum: 5,
      phoneNum: "010-4567-8901",
    },
    {
      isDeposit: true,
      totalCost: 36000,
      name: "윤도현",
      stdNum: 22134567,
      ticketNum: 8,
      phoneNum: "010-6789-0123",
    },
  ];

  const navigate = useNavigate();

  const handleDeleteButtonClick = () => {
    Swal.fire({
      title: holderList_data.name + " 을(를) 삭제하시겠습니까?",
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
        navigate(`/manager/holder`);
      }
    });
  };

  const [HolderListCards, setHolderListCards] = useState([]);

  const getHolderListCards = async () => {
    // const response = await fetch(
    //   `예매자명단 DB API`
    // );
    // const json = await response.json();
    setHolderListCards(holderList_data);
  };

  useEffect(() => {
    console.log(holderList_data);
    getHolderListCards();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="manager-holderlist-body">
        <div className="manager-holderlist-box">
          <div className="manager-holderlist-title-box">
            <div className="manager-holderlist-title">예매명단관리</div>
          </div>
          <div className="manager-holderlist-button-box">
            <div className="manager-holderlist-confirmButton">
              입금여부 확정하기
            </div>
            <div
              className="manager-holderlist-deleteButton"
              onClick={handleDeleteButtonClick}
            >
              삭제하기
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
                  key={holder.name}
                  isDeposit={holder.isDeposit}
                  totalCost={holder.totalCost}
                  name={holder.name}
                  stdNum={holder.stdNum}
                  ticketNum={holder.ticketNum}
                  phoneNum={holder.phoneNum}
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
