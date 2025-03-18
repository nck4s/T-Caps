import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import SearchBar from "./SearchBar"; 
import capsule from "../assets/capsule.png";
import sphere from "../assets/sphere.png";
import mcapsule from "../assets/mcapsule.svg";
import scapsule from "../assets/scapsule.svg";
import xscapsule from "../assets/xscapsule.svg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* Левая капсула */}
      <div className="leftCapsule">
        <img src={capsule} alt="AI Capsule" />
      </div>

      {/* Центральный контент */}
      <div className="hero-content">
        <h1>
          <span className="blue-text">Ускорьте</span> свою <span className="blue-text">работу</span> <br /> с AI Капсулой!
        </h1>
        <p>
          Выберите сферу и процесс, который хотите автоматизировать, и получите AI-Капсулу с готовым решением по ускорению выбранной задачи.
        </p>

        {/* Подключаем новый компонент SearchBar */}
        <SearchBar />
      </div>

      {/* Летающие капсулы с параллакс-эффектом */}
      <div className="hero-floating">
        <img 
          src={sphere} 
          alt="sphere" 
          className="floating-item sphere" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }} 
        />
        <img 
          src={mcapsule} 
          alt="mediumCapsule" 
          className="floating-item mcapsule" 
          style={{ transform: `translateY(${scrollY * 0.15}px)` }} 
        />
        <img 
          src={scapsule} 
          alt="smallCapsule" 
          className="floating-item scapsule" 
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} 
        />
        <img 
          src={xscapsule} 
          alt="xsmallCapsule" 
          className="floating-item xscapsule" 
          style={{ transform: `translateY(${scrollY * 0.25}px)` }} 
        />
      </div>
    </section>
  );
};

export default Hero;
