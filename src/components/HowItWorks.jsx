import React from "react";
import Slider from "react-slick"; // Подключаем react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/howitworks.css";

// Импорт изображений
import rocket from "../assets/rocket.svg";
import capsuleSmall from "../assets/capsule_small.svg";
import capsulesGroup from "../assets/capsules_group.svg";

const steps = [
  {
    title: "Вы выбираете сферу и процесс",
    description: (
      <>
        Выберите сферу и процесс — AI покажет, что можно{" "}
        <span className="highlight">автоматизировать и ускорить</span> с помощью технологий прямо сейчас. 🚀
      </>
    ),
    image: rocket,
  },
  {
    title: "Открываете AI капсулу",
    description: (
      <>
        Внутри <span className="highlight">готовый AI-агент</span>, который сразу работает в вашем бизнесе. Интегрируйте его самостоятельно или с нашей помощью.
        <br />
        <br />
        Еще <span className="highlight">нет нужной AI-Капсулы?</span> Мы создадим её под ваши задачи!
      </>
    ),
    image: capsuleSmall,
  },
  {
    title: "Запускаете и комбинируете AI капсулы",
    description: (
      <>
        AI берет на себя рутину, освобождая вам время для роста — как <span className="highlight">вашего бизнеса</span>, так и <span className="highlight">вас самих</span>.
      </>
    ),
    image: capsulesGroup,
  },
];

const HowItWorks = () => {
  const sliderSettings = {
    dots: true, // Отображаем точки
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации
    slidesToShow: 1, // Показываем 1 карточку за раз
    slidesToScroll: 1, // Прокручиваем по 1 карточке
    arrows: false, // Отключаем стрелки, оставляем свайп
    autoplay: true, // Отключаем автопрокрутку
  };

  return (
    <section className="how-it-works">
      {/* Заголовок */}
      <div className="how-it-works-header">
        <p className="how-it-works-step">3 простых шага</p>
        <h2 className="how-it-works-title">Как это работает?</h2>
        <p className="how-it-works-description">
          Запустите AI-Капсулу в 3 шага. Увеличьте свою продуктивность или автоматизируйте работу команды —{" "}
          <span className="highlight">больше времени, больше возможностей, больше прибыли!</span>
        </p>
      </div>

      {/* КАРТОЧКИ НА ДЕСКТОПЕ */}
      <div className="how-it-works-steps desktop-only">
        {steps.map((step, index) => (
          <div className="how-it-works-step" key={index}>
            <div className="how-it-works-text">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <div className="how-it-works-image">
              <img src={step.image} alt={step.title} />
            </div>
          </div>
        ))}
      </div>

      {/* КАРУСЕЛЬ НА МОБИЛЬНЫХ УСТРОЙСТВАХ */}
      <div className="how-it-works-carousel mobile-only">
        <Slider {...sliderSettings}>
          {steps.map((step, index) => (
            <div className="how-it-works-step" key={index}>
              <div className="how-it-works-image">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="how-it-works-text">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HowItWorks;
