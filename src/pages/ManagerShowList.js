import { useEffect, useState } from "react";
import "./styles/ManagerShowList.css";

import MyShowListCard from "../components/MyShowListCard";

function ManagerShowList() {
  const myShowList_data = [
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

  const [MyShowListCards, setMyShowListCards] = useState([]);

  const getMyShowListCards = async () => {
    // const response = await fetch(
    //   `공연관리 DB API`
    // );
    // const json = await response.json();
    setMyShowListCards(myShowList_data);
  };

  useEffect(() => {
    console.log(myShowList_data);
    getMyShowListCards();
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
              {MyShowListCards.map((show) => (
                <MyShowListCard
                  key={show.id}
                  title={show.title}
                  order={show.order}
                  applyPeople={show.applyPeople}
                  maxPeople={show.maxPeople}
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
