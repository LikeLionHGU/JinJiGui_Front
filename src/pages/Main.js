import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Card from "../components/Card";
import axios from "axios";
import "../components/styles/Main.css";
import "../components/styles/carousel.css";

function Main() {
  const [cards, setCards] = useState([]);
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);

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
            "https://cdn.discordapp.com/attachments/1331500701808988244/1339862820443000853/IMG_6870.jpg?ex=67b0ecbd&is=67af9b3d&hm=c880832131772a86969d434a8208377496f7e9db107b44a33cf1a7eb7109f046&g",
          title: "무도회",
          startDate: "2024-11-23",
          endDate: "2024-11-24",
        },
        club: {
          name: "MIC",
          category: "댄스",
        },
      },
      {
        show: {
          id: 3,
          poster:
            "https://cdn.discordapp.com/attachments/1331500701808988244/1339862820820615199/IMG_6871.jpg?ex=67b0ecbd&is=67af9b3d&hm=717c4b5ab530a2c1f2a6805f566436ca2ca30a92d42a90bde651bbcc6509d090&",
          title: "THE GOSPEL: Who we are",
          startDate: "2023-11-24",
          endDate: "2023-11-24",
        },
        club: {
          name: "PITCH PIPE",
          category: "콘서트",
        },
      },
      {
        show: {
          id: 4,
          poster:
            "https://cdn.discordapp.com/attachments/1331500701808988244/1339862821202034718/IMG_6872.jpg?ex=67b0ecbe&is=67af9b3e&hm=3bcbda92ed0a10ccf0ee4ed9654063f3a52ad1f6e7a299a7ee062e1ad530b39f&",
          title: "행복한 가족",
          startDate: "2023-05-18",
          endDate: "2023-05-20",
        },
        club: {
          name: "어메이징 스토리",
          category: "연극",
        },
      },
      {
        show: {
          id: 5,
          poster:
            "https://cdn.discordapp.com/attachments/1331500701808988244/1339862821495771209/IMG_6873.jpg?ex=67b0ecbe&is=67af9b3e&hm=adad7ae74f938f846cffe8affa23a7353c5adf7bbf6b1b980edb346ae08dba82&",
          title: "Re:quid",
          startDate: "2024-11-15",
          endDate: "2024-11-16",
        },
        club: {
          name: "Repuid",
          category: "밴드",
        },
      },
      {
        show: {
          id: 6,
          poster:
            "https://cdn.discordapp.com/attachments/1331500701808988244/1339862821806145536/IMG_6874.jpg?ex=67b0ecbe&is=67af9b3e&hm=ded56ca10196628a41b0c4bd211e6fe61c6d9424ee5629739a89a505589ec55f&",
          title: "Nostalgia: Ebenezer",
          startDate: "2024-11-3",
          endDate: "2024-11-4",
        },
        club: {
          name: "God's Fellows",
          category: "콘서트",
        },
      },
      {
        show: {
          id: 7,
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

  const handleThumbnailClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(index); // 썸네일 클릭 시 해당 배너로 이동
    }
  };

  const handleBannerClick = (index) => {
    setSelectedIndex(index); // 클릭한 배너의 인덱스를 중앙으로 설정
  };
  return (
    <div className="wrap">
      <div id="contents">
        <div id="banner">
          <Carousel
            ref={carouselRef}
            autoPlay
            infiniteLoop
            interval={2000}
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            centerMode
            centerSlidePercentage={33.3} // 화면에 3개 보이도록 설정
            selectedItem={selectedIndex}
            onChange={(index) => setSelectedIndex(index)}
          >
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`banner-item ${
                  index !== selectedIndex ? "dim" : ""
                }`} // dim 처리
                onClick={() => handleBannerClick(index)} // 클릭 시 중앙으로 이동
              >
                <img src={banner.poster} alt={`Banner ${banner.id}`} />
              </div>
            ))}
          </Carousel>
          <div id="thumbnail-container">
            <div className="thumbnail-list">
              {banners.map((banner, index) => (
                <img
                  key={banner.id}
                  src={banner.poster}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-item"
                  onClick={() => handleThumbnailClick(index)} // 클릭 시 배너 이동
                />
              ))}
            </div>
          </div>
        </div>
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
