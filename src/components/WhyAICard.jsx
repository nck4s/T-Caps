import React from "react";

const WhyAICard = ({ title, tags, benefits, image }) => {
  return (
    <div className="why-ai-card">
      {/* Текстовая часть */}
      <div className="why-ai-text">
        <h3>{title}</h3>

        {/* Теги */}
        <div className="why-ai-tags">
          {tags.map((tag, index) => (
            <span className="why-ai-tag" key={index}>{tag}</span>
          ))}
        </div>

        {/* Список преимуществ */}
        <ul className="why-ai-benefits">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <img src={benefit.icon} alt="" className="why-ai-icon" />
              {benefit.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Изображение */}
      <div className="why-ai-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default WhyAICard;
