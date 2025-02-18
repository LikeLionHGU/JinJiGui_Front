import { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import MyReservCard from "../components/MyReservCard";
import "./styles/MyReservList.css";

function MyReservList() {
  const [myReservCards, setMyReservCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMyReservCards = async () => {
    console.log('getMyReservCards 함수 시작');
    try {
      console.log('로딩 상태 설정: true');
      setIsLoading(true);
      setError(null);
      
      console.log('API 요청 시작');
      const response = await fetch(
        `https://jinjigui.info:443/mypage/reservation`
      );
      console.log('API 응답 수신:', response.status);

      // if (!response.ok) {
      //   throw new Error('예매 내역을 불러오는데 실패했습니다.');
      // }

      console.log('응답 데이터 파싱 시작');
      const json = await response.json();
      console.log('파싱된 데이터:', json);

      // 데이터 검증 추가
      // if (!json || !json.user_reservation_list) {
      //   throw new Error('예매 내역 데이터 형식이 올바르지 않습니다.');
      // }

      console.log('예매 내역 데이터 설정:', json.user_reservation_list);
      setMyReservCards(json.user_reservation_list);

    } catch (err) {
      console.error('에러 발생:', err);
      setError(err.message);
      setMyReservCards([]); // 오류 시 빈 배열로 설정
    } finally {
      console.log('로딩 상태 설정: false');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log('useEffect 실행 - 초기 데이터 로딩');
    getMyReservCards();
  }, []);

  console.log('현재 상태:', {
    isLoading,
    error,
    reservationsCount: myReservCards.length
  });

  if (isLoading) {
    console.log('로딩 중 화면 렌더링');
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
    console.log('에러 화면 렌더링:', error);
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

  console.log('예매 내역 목록 렌더링:', myReservCards);
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
              myReservCards.map((myReservCard) => {
                console.log('예매 카드 렌더링:', myReservCard.ticketNumber);
                return (
                  <div
                    key={myReservCard.ticketNumber}
                    className="myreservlist-page-content"
                  >
                    <MyReservCard
                      img_path={myReservCard.poster}
                      id={myReservCard.show.id}
                      title={myReservCard.show.title}
                      order={myReservCard.schedule.order}
                      date={myReservCard.schedule.date}
                      time={myReservCard.schedule.time}
                      account={myReservCard.show.accountNumber}
                      ticketNum={myReservCard.ticketNumber}
                      totalCost={myReservCard.totalCost}
                      isDeposit={myReservCard.reservation.isDeposit}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReservList;