import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../components/Banner";
import ShowLists from "../components/ShowList";
import { Filter } from "../components/Filter";

import "./styles/Main.css";
import "../components/styles/Banner.css";
import Loading from "./loading";

function Main() {
  const [cards, setCards] = useState([]);
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all"); // state의 기본값은 전체보기(all)

  const getCards = async () => {
    try {
      const response = await axios.get(`https://jinjigui.info:443/main`);

      console.log("API 호출 성공:", response.data);

      const showInfo = response.data.show_info || []; // 응답 데이터가 비어있거나 null일 때 대비
      const formattedCards = showInfo.map((info) => ({
        id: info?.show?.id || null,
        poster: info?.show?.poster || "",
        title: info?.show?.title || "제목 없음",
        startDate: info?.show?.startDate || "",
        endDate: info?.show?.endDate || "",
        clubName: info?.show?.clubName || "이름 없음",
        category: info?.show?.category || "카테고리 없음",
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
      const response = await axios.get(`https://jinjigui.info:443/main/banner`);

      console.log("API 호출 성공:", response.data);
      const showInfo = response.data.show_info || [];
      const formattedBanners = showInfo.map((info) => ({
        id: info.show.id,
        poster: info.show.poster,
        title: info.show.title, // 제목 정보 추가
      }));
      console.log("banner", formattedBanners);

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

  const filteredList =
    selectedCategory === "all"
      ? cards
      : cards.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    getBanners();
    getCards();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="wrap">
      <div id="contents">
        <Banner
          id={banners.id}
          banners={banners}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div id="list-text">
          <p> 전체 공연 목록</p>
        </div>
        <Filter
          setSelectedCategory={setSelectedCategory} // setState 전달
          selectedCategory={selectedCategory} // state 전달
        />
        <div id="show-list">
          <ShowLists cards={filteredList} />
        </div>
      </div>
    </div>
  );
}

export default Main;
