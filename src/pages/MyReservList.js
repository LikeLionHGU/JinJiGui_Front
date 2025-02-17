import { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import MyReservCard from "../components/MyReservCard";
import "./styles/MyReservList.css";

function MyReservList() {
  const [myReservCards, setMyReservCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMyReservCards = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `https://jinjigui.info:443/myPage/reservation/`
      );

      // if (!response.ok) {
      //   throw new Error('예매 내역을 불러오는데 실패했습니다.');
      // }

      const json = await response.json();

      // 데이터 검증 추가
      // if (!json || !json.user_reservation_list) {
      //   throw new Error('예매 내역 데이터 형식이 올바르지 않습니다.');
      // }

      setMyReservCards(json.user_reservation_list);
    } catch (err) {
      setError(err.message);
      setMyReservCards([]); // 오류 시 빈 배열로 설정
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMyReservCards();
  }, []);

  if (isLoading) {
    return (
      <>
        <SubHeader />
        <div className="myreservlist-page-body">
          <div className="myreservlist-page-box">
            <div className="loading-spinner">로딩 중...</div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SubHeader />
        <div className="myreservlist-page-body">
          <div className="myreservlist-page-box">
            <div className="error-message">
              error: {error}
              <button onClick={getMyReservCards} className="retry-button">
                다시 시도
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SubHeader />
      <div className="myreservlist-page-body">
        <div className="myreservlist-page-box">
          <div className="myreservlist-page-title-box">
            <div className="myreservlist-page-title">공연 예매내역</div>
          </div>
          <div className="myreservlist-page-content-box">
            {myReservCards && myReservCards.length === 0 ? (
              <div className="no-reservations">예매 내역이 없습니다.</div>
            ) : (
              myReservCards?.map((myReservCard) => (
                <div
                  key={myReservCard?.ticketNumber}
                  className="myreservlist-page-content"
                >
                  <MyReservCard
                    img_path={myReservCard?.poster}
                    id={myReservCard?.show?.id}
                    title={myReservCard?.show?.title}
                    order={myReservCard?.schedule?.order}
                    date={myReservCard?.schedule?.date}
                    time={myReservCard?.schedule?.time}
                    account={myReservCard?.show?.accountNumber}
                    ticketNum={myReservCard?.ticketNumber}
                    totalCost={myReservCard?.totalCost}
                    isDeposit={myReservCard?.reservation?.isDeposit}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReservList;
