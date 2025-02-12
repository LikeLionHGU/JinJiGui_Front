// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import ShowList from "./ShowList";
// import Card from "../components/Card";
// import axios from "axios";

// function Main() {
//   const [cards, setCards] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const sample_data = {
//     show_info: [
//       {
//         show: {
//           id: 1,
//           poster: "https://example.com/poster1.jpg",
//           title: "어스 공연",
//           startDate: "2025-03-01",
//           endDate: "2025-03-05",
//         },
//         club: {
//           name: "멋쟁이 사자처럼",
//           category: "뮤지컬",
//         },
//       },
//     ],
//   };

//   const getCards = async () => {
//     try {
//       const response = await axios.get(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count`
//       );

//       const showInfo = response.data.show_info || [];
//       const formattedCards = showInfo.map((info) => ({
//         id: info.show.id,
//         poster: info.show.poster,
//         title: info.show.title,
//         startDate: info.show.startDate,
//         endDate: info.show.endDate,
//         clubName: info.club.name,
//         category: info.club.category,
//       }));
//       setCards(formattedCards);
//     } catch (error) {
//       console.error("카드를 불러오지 못했습니다.", error);
//       setError("카드를 불러오지 못했습니다.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCards();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="wrap">
//       <div id="contents">
//         {cards.map((card) => (
//           <div key={card.id} className="card_list">
//             <Card
//               img_path={card.poster}
//               groupName={card.clubName}
//               category={card.category}
//               location={`${card.startDate} ~ ${card.endDate}`}
//               title={card.title}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Main;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

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
          poster: "https://example.com/poster1.jpg",
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
          poster: "https://example.com/poster2.jpg",
          title: "뮤지컬 공연",
          startDate: "2025-04-01",
          endDate: "2025-04-05",
        },
        club: {
          name: "멋쟁이 사자처럼",
          category: "연극",
        },
      },
    ],
  };

  const getCards = () => {
    try {
      // sample_data 사용
      const showInfo = sample_data.show_info || [];
      const formattedCards = showInfo.map((info) => ({
        id: info.show.id,
        poster: info.show.poster,
        title: info.show.title,
        startDate: info.show.startDate,
        endDate: info.show.endDate,
        clubName: info.club.name,
        category: info.club.category,
      }));
      setCards(formattedCards); // 상태 업데이트
    } catch (error) {
      console.error("카드를 불러오지 못했습니다.", error);
      setError("카드를 불러오지 못했습니다.");
    } finally {
      setLoading(false); // 로딩 상태를 false로 설정
    }
  };

  useEffect(() => {
    getCards(); // 컴포넌트 마운트 시 getCards 호출
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wrap">
      <div id="contents">
        <div id="showLists">
          {cards.map((card) => (
            <div key={card.id} className="card_list">
              <Card
                img_path={card.poster}
                groupName={card.clubName}
                category={card.category}
                location={`${card.startDate} ~ ${card.endDate}`}
                title={card.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
