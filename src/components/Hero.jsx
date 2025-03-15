import React from "react";
import "../styles/hero.css";
import capsule from "../assets/capsule.png";
import sphere from "../assets/sphere.png";
import mcapsule from "../assets/mcapsule.png";
import scapsule from "../assets/scapsule.png";
import xscapsule from "../assets/xscapsule.png";
import starIcon from "../assets/star.png"; 

const Hero = () => {
  return (
    <section className="hero">
      {/* Левая капсула */}
      <div className="leftCapsule">
        <img src={capsule} alt="AI Capsule" />
      </div>

      {/* Центральный контент */}
      <div className="hero-content">
        <h1>
          <span className="blue-text">Speed up</span> your <span className="blue-text">work</span> <br /> with AI Capsules!
        </h1>
        <p>
        Выберите сферу и процесс, который хотите автоматизировать, и получите AI-Капсулу с готовым решением по ускорению выбранной задачи.
        </p>

        {/* Форма ввода и кнопка */}
        <div className="hero-form">
          <h1 className="form-header">Что хотите улучшить?</h1>
          <div className="form-fields">
            <div className="input-wrapper">
              <input type="text" placeholder="Ваша сфера деятельности" />
              <img src={starIcon} alt="star" className="star-icon" />
            </div>
            <button className="select-btn">Подобрать AI капсулу</button>
          </div>
        </div>

      </div>

      {/* капсулы */}
      <div className="hero-floating">
        <img src={sphere} alt="sphere" className="floating-item sphere" />
        <img src={sphere} alt="sphere" className="floating-item sphere2" />
        <img src={mcapsule} alt="mediumCapsule" className="floating-item mcapsule" />
        <img src={scapsule} alt="smallCapsule" className="floating-item scapsule" />
        <img src={xscapsule} alt="xsmallCapsule" className="floating-item xscapsule" />
      </div>
    </section>
  );
};

export default Hero;
