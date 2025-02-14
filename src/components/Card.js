import "../components/styles/Card.css";

function Card({ poster, title, startDate, endDate, clubName }) {
  return (
    <div id="list-card">
      <div id="list-image-box">
        <img
          id="list-show-img"
          src={`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count${poster}`}
          alt="show_image"
        />
      </div>
      <div id="list-info-box">
        <div id="list-title-box">{title} </div>
        <div id="list-date">
          {startDate} - {endDate}
        </div>
        <div id="list-club">{clubName}</div>
      </div>
    </div>
  );
}

export default Card;
