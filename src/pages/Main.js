import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ShowList from "./ShowList";
import Card from "../components/Card";
import axios from "axios";

function Main() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCards = async () => {
    try {
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count`
      );

      const showInfo = response.data.show_info || [];
      const formattedCards = showInfo.map((info) => ({
        id: info.show.id,
        poster: info.show.poster,
        title: info.show.title,
        startDate: info.show.startDate,
        endDate: info.show.endDate,
        clubName: info.club.name,
        category: info.club.category,
      }));
      setCards(formattedCards);
    } catch (error) {
      console.error("카드를 불러오지 못했습니다.", error);
      setError("카드를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wrap">
      <div id="contents">
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
  );
}

export default Main;
