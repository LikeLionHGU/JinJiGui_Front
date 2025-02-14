import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import axios from "axios";
import "../components/styles/Main.css";

function Main() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const sample_data = {
    show_info: [
      {
        show: {
          id: 1,
          poster:
            "https://i.namu.wiki/i/7kU78ZkCv1RYH2qYYi4Q_bjobolAhAMcc73yTyfrm6gE-GE8Bf5b5DxP0kPb97hcMA5-GtnK9gbM8xBY2Z5qIA.webp",
          title: "어스 공연",
          startDate: "2025-03-01",
          endDate: "2025-03-05",
        },
        club: {
          name: "멋쟁이 사자처럼",
          category: "뮤지컬",
        },
      },
      {
        show: {
          id: 2,
          poster:
            "https://stqnq5ux4599.edge.naverncp.com/data2/content/image/2023/10/12/.cache/512/202310120969480.jpg",
          title: "에픽하이",
          startDate: "2025-12-16",
          endDate: "2025-12-17",
        },
        club: {
          name: "에픽하이",
          category: "콘서트",
        },
      },
      {
        show: {
          id: 3,
          poster: "https://cdn.hankyung.com/photo/202410/01.38224314.1.jpg",
          title: "2NE1",
          startDate: "2025-12-3",
          endDate: "2025-12-8",
        },
        club: {
          name: "2NE1",
          category: "콘서트",
        },
      },
      {
        show: {
          id: 4,
          poster: "https://cdn.hankyung.com/photo/202410/01.38224314.1.jpg",
          title: "2NE1",
          startDate: "2025-12-3",
          endDate: "2025-12-8",
        },
        club: {
          name: "2NE1",
          category: "콘서트",
        },
      },
    ],
  };

  const getCards = async () => {
    try {
      const response = await axios.get(REACT_APP_MAIN_API).then(() => {
        console.log("API 호출 성공:", response.data);
      }); // 응답 데이터 확인
      const showInfo = response.data || []; // 응답 데이터가 비어있거나 null일 때 대비
      const formattedCards = showInfo.map((info) => ({
        id: info.show.id,
        poster: info.show.poster,
        title: info.show.title,
        startDate: info.show.startDate,
        endDate: info.show.endDate,
        clubId: info.club.id,
        clubName: info.club.name,
        category: info.club.category,
      }));
      setCards(formattedCards);
    } catch (error) {
      console.error("API 호출 실패:", error);
      setError("카드를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  // const getCards = () => {
  //   try {
  //     const showInfo = sample_data.show_info || [];
  //     const formattedCards = showInfo.map((info) => ({
  //       id: info.show.id,
  //       poster: info.show.poster,
  //       title: info.show.title,
  //       startDate: info.show.startDate,
  //       endDate: info.show.endDate,
  //       clubName: info.club.name,
  //       category: info.club.category,
  //     }));
  //     console.log(showInfo);
  //     setCards(formattedCards);
  //   } catch (error) {
  //     console.error("카드를 불러오지 못했습니다.", error);
  //     setError("카드를 불러오지 못했습니다.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    getCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wrap">
      <div id="contents">
        <div id="banner"></div>
        <div id="list-text">
          <p> 전체 공연 목록</p>
        </div>
        <div id="showLists">
          {cards.map((card) => (
            <div key={card.id} className="card_list">
              <Card
                img_path={card.poster}
                clubName={card.clubName}
                startDate={card.startDate}
                endDate={card.endDate}
                title={card.title}
                category={card.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
