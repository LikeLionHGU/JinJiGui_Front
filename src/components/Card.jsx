import "../components/styles/Card.css";

function Card({ img_path, title, startDate, endDate, clubName }) {
  return (
    <div id="list-card">
      <div id="list-image-box">
        <img id="list-show-img" src={img_path} alt="show_image" />
      </div>
      <div id="list-info-box">
        <div id="list-title-box">{title} </div>
        <div id="list-date">
          {startDate} ~ {endDate}
        </div>
        <div id="list-club">{clubName}</div>
      </div>
    </div>
  );
}

export default Card;
