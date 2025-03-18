import React from "react";
import "../styles/card.css";
import arrow from "../assets/arrow.svg";

const CategoryCard = ({ title, description, image }) => {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={image} alt={title} />
      </div>
      <div className="category-content">
        {/* Объединяем заголовок и ссылку в один контейнер */}
        <div className="category-header-wrapper">
          <h3 className="category-header">{title}</h3>
          <a href="#" className="category-link">
            <img src={arrow} alt="Стрелка" className="arrow-icon" />
          </a>
        </div>
        
        <div className="category-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
