import React, { useState } from "react";
import { cardData } from "../constants/cardData";
import "../styles/custom.scss";

interface CardInfo {
  icon: string;
  value: string;
  label: string;
  highlight: boolean;
}

const cards: CardInfo[] = cardData;

const Cards: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  

  return (
    <div className="cards-wrapper">
      {cards.map((card, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className={`card-info ${isHovered ? "hover-highlight" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="icon-circle-wrapper">
              <div
                className={`icon-circle ${isHovered ? "highlight" : "default"}`}
              >
                <i className={card.icon}></i>
              </div>
            </div>
            <div className="card-value">{card.value}</div>
            <div className={`card-label ${isHovered ? "highlight" : ""}`}>
              {card.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
