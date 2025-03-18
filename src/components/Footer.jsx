import React from "react";
import "../styles/footer.css";
import logo from "../assets/logo-f.svg";
import telegramIcon from "../assets/telegram.svg"; // Иконка Telegram

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Левая часть: Логотип + Копирайт */}
                <div className="footer-left">
                    <img src={logo} alt="T-Caps" className="footer-logo" />
                    <h1>T-Caps</h1>
                </div>

                {/* Центральная часть: Навигация + Контакты */}
                <div className="footer-center">
                    <div className="footer-nav">
                        <h4>Навигация</h4>
                        <ul>
                            <li><a href="#">AI-капсулы</a></li>
                            <li><a href="#">Как работает</a></li>
                            <li><a href="#">Партнерам</a></li>
                        </ul>
                    </div>
                    <div className="footer-contacts">
                        <h4>Контакты</h4>
                        <p>+7 (343) 243-55-02</p>
                        <p>support@ruyou.ru</p>
                        <p>г. Екатеринбург, ул. Библиотечная 25</p>
                        <p>ИНН: 6658420044</p>
                        {/* Telegram Button */}
                        <a href="https://t.me/tcaps" className="footer-btn telegram-btn">
                            <img src={telegramIcon} alt="Telegram" className="telegram-icon" />
                        </a>
                    </div>
                </div>

                {/* Правая часть: Кнопки */}
                <div className="footer-right">
                    <button className="footer-btn">Заказать консультацию</button>
                    <button className="footer-btn">Войти</button>
                </div>
            </div>

            {/* Отдельный блок для Политики и Условий */}
            <div className="footer-bottom">
                <p>© 2024 ООО "РУ-Ю"</p>
                <a href="#">Политика конфиденциальности</a>
                <a href="#">Условия обслуживания</a>
            </div>
        </footer>
    );
};

export default Footer;
