import React from "react";
import Card from "./Card";
import "../pages/styles/Main.css";

const ShowLists = ({ cards }) => {
  console.log("cate", cards.category);

  return (
    <div id="showLists">
      {cards.map((card) => (
        <div key={card.id} className="card_list">
          <Card
            id={card.id}
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
  );
};

export default ShowLists;
