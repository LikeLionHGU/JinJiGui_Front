import "./styles/Filter.css";

export const Filter = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <div>
      <div className="filter-container">
        <button
          type="button"
          className="all cate"
          onClick={() => setSelectedCategory("all")}
        >
          전체
        </button>
        <button
          type="button"
          className="band cate"
          onClick={() => setSelectedCategory("밴드")}
        >
          밴드
        </button>
        <button
          type="button"
          className="dance cate"
          onClick={() => setSelectedCategory("춤")}
        >
          춤
        </button>
        <button
          type="button"
          className="acappella cate"
          onClick={() => setSelectedCategory("아카펠라")}
        >
          아카펠라
        </button>
        <button
          type="button"
          className="theater cate"
          onClick={() => setSelectedCategory("연극")}
        >
          연극
        </button>
        <button
          type="button"
          className="hiphop cate"
          onClick={() => setSelectedCategory("힙합")}
        >
          힙합
        </button>
        <button
          type="button"
          className="instroment cate"
          onClick={() => setSelectedCategory("악기연주")}
        >
          악기연주
        </button>
        <button
          type="button"
          className="etc cate"
          onClick={() => setSelectedCategory("기타")}
        >
          기타
        </button>
      </div>
    </div>
  );
};
