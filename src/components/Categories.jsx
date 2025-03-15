import React from "react";
import "../styles/categories.css";
import CategoryCard from "./CategoryCard";
import marketing from "../assets/marketing.png";
import sales from "../assets/sales.png";
import finance from "../assets/finance.png";
import it from "../assets/it.png";
import hr from "../assets/hr.png";
import other from "../assets/other.png";

const categories = [
  { title: "Маркетинг", description: "Настройка рекламы и маркетинговой стратегии", image: marketing },
  { title: "Продажи", description: "Персонализация продаж и обработка лидов", image: sales },
  { title: "Рекрутинг и найм", description: "Фильтр резюме и чат-бот для рекрутинга", image: hr },
  { title: "Финансы", description: "Анализ данных и автоматизация бухгалтерии", image: finance },
  { title: "IT", description: "Разработка и оптимизация кода, отладка", image: it },
  
  { title: "Другое", description: "Подберем решение для любой задачи", image: other }
];

const Categories = () => {
  return (
    <section className="categories">
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </section>
  );
};

export default Categories;
