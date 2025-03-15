import React from "react";
import "../styles/card.css";
import arrow from "../assets/arrow.png";

const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={image} alt={title} />
      </div>
      <div className="category-content">
        <div className="category-header">
          <h3>{title}</h3>
        </div>
        <a href="#" className="category-link">
          <img src={arrow} alt="Стрелка" className="arrow-icon" />
        </a>
        <div className="category-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
