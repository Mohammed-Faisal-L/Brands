import React from "react";
import { serviceCardData } from "../constants/cardData";
import "../styles/custom.scss";

interface ServiceCardInfo {
  icon: string;
  header: string;
  label: string;
}
const card: ServiceCardInfo[] = serviceCardData;

const ServiceCard: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-around">
      <div className="card-container">
      {card.map((card, ind) => {
        return (
          <div key={ind} className="card-data">
            <div className="icon-wrapper">
              <div className="icons">
                <i className={card.icon}></i>
              </div>
            </div>
            <div className="card-header">{card.header}</div>
            <div className="card-label">{card.label}</div>
          </div>
        );
      })}
    </div>
    </div>
  );
};
export default ServiceCard;
