import { useEffect, useState } from "react";
import "./styles/ManagerShowList.css";
import MyShowListCard from "../components/MyShowListCard";

function ManagerShowList() {
  const [MyShowListCards, setMyShowListCards] = useState([]); // 여기가 문제였습니다

  const getMyShowListCards = async () => {
    try {
      const response = await fetch(`https://jinjigui.info:443/manager/show`);
      const json = await response.json();
      setMyShowListCards(json.my_show_list); // json.my_show_list 데이터를 저장
    } catch (error) {
      console.error("Error fetching show list:", error);
    }
  };

  useEffect(() => {
    getMyShowListCards();
  }, []);

  return (
    <div className="manager-showlist-body">
      <div className="manager-showlist-box">
        <div className="manager-showlist-title-box">
          <div className="manager-showlist-title">공연 관리</div>
        </div>
        <div className="manager-showlist-createButton-box">
          <div className="manager-showlist-createButton">
            새로운 공연 추가하기
          </div>
        </div>
        <div className="manager-showlist-content-box">
          <div className="manager-showlist-header-box">
            <div className="manager-showlist-header">제목</div>
            <div className="manager-showlist-header">회차</div>
            <div className="manager-showlist-header">예매현황</div>
            <div className="manager-showlist-header">명단보기</div>
            <div className="manager-showlist-header">삭제</div>
          </div>
          <div className="manager-showlist-content">
            {MyShowListCards?.map((show) =>
              show.schedule.map((schedule, index) => (
                <MyShowListCard
                  key={`${show.id}-${index}`}
                  title={show.title}
                  order={`${index + 1}공`}
                  applyPeople={schedule.applyPeople}
                  maxPeople={schedule.maxPeople}
                  showId={show.id}
                  scheduleId={schedule.scheduleId}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerShowList;
