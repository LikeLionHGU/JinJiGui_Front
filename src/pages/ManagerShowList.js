import { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import "./styles/ManagerShowList.css";

import HolderListCard from "../components/HolderListCard";

function ManagerShowList() {
  const holderList_data = [
    {
      title: "오아시스 내한 공연",
      order: "1",
      applyPeople: "25",
      maxPeople: "30",
    },
    {
      title: "데이식스 연말 콘서트",
      order: "3",
      applyPeople: "45",
      maxPeople: "50",
    },
    {
      title: "루시 겨울 콘서트",
      order: "2",
      applyPeople: "20",
      maxPeople: "40",
    },
  ];

  const [holderListCards, setHolderListCards] = useState([]);

  const getHolderListCards = async () => {
    // const response = await fetch(
    //   `공연관리 DB API`
    // );
    // const json = await response.json();
    setHolderListCards(holderList_data);
  };

  useEffect(() => {
    console.log(holderList_data);
    getHolderListCards();
  }, []);

  return (
    <>
      <div className="manager-showlist-body">
        <div className="manager-showlist-box">
          <div className="manager-showlist-title-box">
            <div className="manager-showlist-title">내 공연 관리</div>
          </div>
          <div className="manager-showlist-createButton-box">
            <div className="manager-showlist-createButton">
              새로운 공연 추가하기
            </div>
          </div>
          <div className="manager-showlist-content-box">
            <div className="manager-showlist-header-box">
              <div className="manager-showlist-header">공연명</div>
              <div className="manager-showlist-header">회차</div>
              <div className="manager-showlist-header">예매현황</div>
              <div className="manager-showlist-header">명단보기</div>
              <div className="manager-showlist-header">삭제</div>
            </div>
            <div className="manager-showlist-content">
              {holderListCards.map((holderListCard) => (
                <HolderListCard
                  title={holderListCard.title}
                  order={holderListCard.order}
                  applyPeople={holderListCard.applyPeople}
                  maxPeople={holderListCard.maxPeople}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerShowList;
