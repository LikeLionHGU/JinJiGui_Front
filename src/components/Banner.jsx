import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/Banner.css";

const Banner = ({ banners, selectedIndex, setSelectedIndex }) => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const handleThumbnailClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(index); // 썸네일 클릭 시 해당 배너로 이동
    }
  };

  const handleBannerClick = (bannerId, index) => {
    if (index === selectedIndex) {
      // Only navigate if clicking the centered banner
      navigate(`/show/${bannerId}`);
    } else {
      // If clicking a dimmed banner, just center it
      setSelectedIndex(index);
      if (carouselRef.current) {
        carouselRef.current.moveTo(index);
      }
    }
  };

  return (
    <div id="banner">
      <Carousel
        className="custom-carousel"
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
        transitionTime={500} // 애니메이션 시간 설정
        swipeable={true} // 스와이프 허용
        emulateTouch={true} // 터치 움직임 허용
        useKeyboardArrows={true} // 키보드 화살표 사용 가능
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`banner-item ${index !== selectedIndex ? "dim" : ""}`} // dim 처리
            onClick={() => handleBannerClick(banner.id, index)} // 배너 클릭 시 중앙에 위치시키거나 상세 페이지로 이동
          >
            <img src={banner.poster} alt={`Banner ${banner.id}`} />
            {
              index === selectedIndex
              // && (
              //   <div className="banner-title">
              //     {banners[index]?.title || ""}
              //   </div>
              // )
            }
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
              onClick={() => handleThumbnailClick(index)} // 썸네일 클릭 시 해당 배너로 이동
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
