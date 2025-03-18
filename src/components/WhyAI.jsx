import React from "react";
import "../styles/whyai.css";
import WhyAICard from "./WhyAICard";

// Импорт изображений для карточек
import capsule1 from "../assets/ai_capsule1.png";
import capsule2 from "../assets/ai_capsule2.png";
import capsule3 from "../assets/ai_capsule3.png";
import starsIcon from "../assets/stars.svg"; 
import mobileStarsIcon from "../assets/mobile_stars.svg";

// Импорт иконок для списка benefits
import filterIcon from "../assets/icons/filter.svg";
import messageIcon from "../assets/icons/message.svg";
import checkIcon from "../assets/icons/check.svg";
import resumeIcon from "../assets/icons/resume.svg";
import skillsIcon from "../assets/icons/skills.svg";
import listIcon from "../assets/icons/list.svg";
import speedIcon from "../assets/icons/speed.svg";
import textIcon from "../assets/icons/text.svg";
import automationIcon from "../assets/icons/automation.svg";

const WhyAI = () => {
  return (
    <section className="why-ai">
      <h2 className="why-ai-title">Почему AI — это прорыв для бизнеса?</h2>
      <p className="why-ai-subtitle">
        Нейросети — это не замена человека, а инструмент, который делает его эффективнее
      </p>

      <div className="why-ai-container">
        {/* Карточка 1 */}
        <WhyAICard
          title="AI для заявок в мессенджерах"
          tags={["+40% рост продаж", "Зарплатный фонд -30%"]}
          benefits={[
            { text: "Фильтрует и передаёт только горячих клиентов менеджеру", icon: filterIcon },
            { text: "AI мгновенно отвечает на заявки в WhatsApp, Telegram, Instagram", icon: messageIcon },
            { text: "Обработанных заявок в 3 раза больше за тот же рабочий день", icon: checkIcon },
          ]}
          image={capsule1}
        />

        {/* Карточка 2 */}
        <WhyAICard
          title="AI для автоматического подбора кандидатов"
          tags={["Время найма сокращено в 3 раза", "Экономия на рекрутинге до 50%"]}
          benefits={[
            { text: "AI анализирует резюме и выбирает лучших за 1 минуту", icon: resumeIcon },
            { text: "Проводит автоинтервью, оценивает soft skills и опыт", icon: skillsIcon },
            { text: "HR получает готовый список топ-кандидатов с рейтингом", icon: listIcon },
          ]}
          image={capsule2}
        />

        {/* Карточка 3 */}
        <WhyAICard
          title="AI для генерации и проверки контента"
          tags={["Создание контента ускорено в 5 раз", "Экономия до $2000 в месяц на копирайтерах"]}
          benefits={[
            { text: "AI генерирует тексты за 3-5 секунд, адаптированные под бренд", icon: speedIcon },
            { text: "Проверяет стиль, уникальность, исправляет ошибки", icon: textIcon },
            { text: "Автоматизирует создание контента (посты, письма, скрипты)", icon: automationIcon },
          ]}
          image={capsule3}
        />
      </div>

      <button className="why-ai-button">
        <img src={starsIcon} alt="Звездочки" className="button-icon" />
        Все AI-Капсулы
      </button>
    </section>
  );
};

export default WhyAI;
