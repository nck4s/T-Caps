import React from "react";
import "../styles/cta.css";
import Categories from "./Categories"; 
import SearchBar from "./SearchBar"; // Импортируем компонент SearchBar

const CTA = () => {
    return (
        <section className="cta">
            {/* Заголовок */}
            <h2 className="cta-title">
                Откройте AI-Капсулу и начните автоматизацию уже сегодня
            </h2>

            {/* Форма (поиск AI-Капсулы) */}
            <SearchBar /> 

            {/* Список AI-Капсул */}
            <Categories />
        </section>
    );
};

export default CTA;
