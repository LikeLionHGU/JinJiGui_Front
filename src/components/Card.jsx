import { Link } from "react-router-dom";
import "../components/styles/Card.css";

function Card({ id, img_path, title, startDate, endDate, clubName, category }) {
  console.log("cate", category);
  return (
    <div id="list-card">
      <div id="list-image-box">
        <Link to={`/show/${id}`}>
          <img id="list-show-img" src={img_path} alt="show_image" />
        </Link>
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
