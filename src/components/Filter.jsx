import "./styles/Filter.css";

export const Filter = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <>
      <div className="category-box">
        <button
          type="button"
          id="all"
          onClick={() => setSelectedCategory("all")}
        >
          전체
        </button>
        <button
          type="button"
          id="band"
          onClick={() => setSelectedCategory("밴드")}
        >
          밴드
        </button>
        <button
          type="button"
          id="dance"
          onClick={() => setSelectedCategory("춤")}
        >
          춤
        </button>
        <button
          type="button"
          id="acappella"
          onClick={() => setSelectedCategory("아카펠라")}
        >
          아카펠라
        </button>
        <button
          type="button"
          id="theater"
          onClick={() => setSelectedCategory("연극")}
        >
          연극
        </button>
        <button
          type="button"
          id="hiphop"
          onClick={() => setSelectedCategory("힙합")}
        >
          힙합
        </button>
        <button
          type="button"
          id="instrument"
          onClick={() => setSelectedCategory("악기연주")}
        >
          악기연주
        </button>
        <button
          type="button"
          id="etc"
          onClick={() => setSelectedCategory("기타")}
        >
          기타
        </button>
      </div>
    </>
  );
};
