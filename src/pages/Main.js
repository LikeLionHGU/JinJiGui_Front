import React, { useEffect, useState } from "react";

import Banner from "../components/Banner";
import ShowLists from "../components/ShowList";
import axios from "axios";

import "../components/styles/Main.css";
import "../components/styles/Banner.css";

function Main() {
  const [cards, setCards] = useState([]);
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getCards = async () => {
    try {
      const response = await axios.get(`https://jinjigui.info:443/main`);

      console.log("API 호출 성공:", response.data);

      const showInfo = response.data.show_info || []; // 응답 데이터가 비어있거나 null일 때 대비
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
      console.error("API 호출 실패:", error.message);
      if (error.response) {
        console.error("응답 데이터:", error.response.data);
        console.error("응답 상태 코드:", error.response.status);
      }
      setError("카드를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const getBanners = async () => {
    try {
      const response = await axios.get(`https://jinjigui.info:443/main`);

      console.log("API 호출 성공:", response.data);
      const showInfo = response.data.show_info || [];
      const formattedBanners = showInfo.map((info) => ({
        id: info.show.id,
        poster: info.show.poster,
      }));
      console.log(showInfo);
      setBanners(formattedBanners);
    } catch (error) {
      console.error("배너를 불러오지 못했습니다.", error);
      setError("배너를 불러오지 못했습니다.");
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
    getBanners();
    getCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="wrap">
      <div id="contents">
        <Banner
          banners={banners}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div id="list-text">
          <p> 전체 공연 목록</p>
        </div>
        <ShowLists cards={cards} />
      </div>
    </div>
  );
}

export default Main;
