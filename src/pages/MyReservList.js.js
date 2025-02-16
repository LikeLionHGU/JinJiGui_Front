import { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import MyReservCard from "../components/MyReservCard";
import "./styles/MyReservList.css";

import oasis from "../assets/temp/oasis.jpg"
import day6 from "../assets/temp/day6.jpg"
import lucy from "../assets/temp/lucy.jpg"

function MyReservList() {
  const myReservList_data = [
    {
      img_path: oasis,
      title: "오아시스 내한 공연",
      order: "1",
      date: "2025-05-03",
      time: "17:00",
      place: "학관 104호",
      account: "123-1234-1234-12",
      ticketNum: "1",
      totalCost: "4500",
      isDeposit: true,
    },
    {
      img_path: day6,
      title: "데이식스 연말 콘서트",
      order: "8",
      date: "2025-05-05",
      time: "20:00",
      place: "야외공연장",
      account: "134-1234-1235-54",
      ticketNum: "10",
      totalCost: "45000",
      isDeposit: false,
    },
    {
      img_path: lucy,
      title: "루시 겨울 콘서트",
      order: "4",
      date: "2025-05-14",
      time: "21:00",
      place: "그레이스홀",
      account: "234-1234-1356-23",
      ticketNum: "5",
      totalCost: "25000",
      isDeposit: false,
    },
  ];

  const [myReservCards, setMyReservCards] = useState([]);

  const getMyReservCards = async () => {
    // const response = await fetch(
    //   `최근예매내역 DB API`
    // );
    // const json = await response.json();
    setMyReservCards(myReservList_data);
  };

  useEffect(() => {
    console.log(myReservList_data);
    getMyReservCards();
  }, []);

  return (
    <>
      <SubHeader />
      <div className="myreservlist-page-body">
        <div className="myreservlist-page-box">
          <div className="myreservlist-page-title-box">
            <div className="myreservlist-page-title">공연 예매내역</div>
          </div>
          <div className="myreservlist-page-content-box">
            {myReservCards.map((myReservCard) => (
              <div className="myreservlist-page-content">
                <MyReservCard
                  img_path={myReservCard.img_path}
                  title={myReservCard.title}
                  order={myReservCard.order}
                  date={myReservCard.date}
                  time={myReservCard.time}
                  place={myReservCard.place}
                  account={myReservCard.account}
                  ticketNum={myReservCard.ticketNum}
                  totalCost={myReservCard.totalCost}
                  isDeposit={myReservCard.isDeposit}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReservList;
