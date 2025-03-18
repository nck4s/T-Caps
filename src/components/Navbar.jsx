import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import whatsappIcon from "../assets/whatsapp.svg";
import burgerIcon from "../assets/burger.svg"; // Иконка бургера
import closeIcon from "../assets/close.svg"; // Иконка закрытия

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Логотип */}
            <div className="logo">
                <img src={logo} alt="T-Caps Logo" />
                <span>T-Caps</span>
            </div>

            {/* Навигация и кнопки (скрыты в мобильной версии) */}
            <ul className="nav-links">
                <li><a href="#">AI-капсулы</a></li>
                <li><a href="#">Как работает</a></li>
                <li><a href="#">Партнерам</a></li>
            </ul>

            <div className="nav-buttons">
                <button className="whatsapp-btn">
                    <img src={whatsappIcon} alt="WhatsApp" />
                </button>
                <button className="consult-btn">Заказать консультацию</button>
                <button className="login-btn">Войти</button>
            </div>

            {/* Бургер-меню (мобильная версия) */}
            <button className="burger-menu" onClick={() => setMenuOpen(true)}>
                <img src={burgerIcon} alt="Меню" />
            </button>

            {/* Мобильное меню */}
            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-logo">
                        <img src={logo} alt="T-Caps Logo" />
                        <span>T-Caps</span>
                    </div>
                    <button className="close-menu" onClick={() => setMenuOpen(false)}>
                        <img src={closeIcon} alt="Закрыть" />
                    </button>
                    <ul>
                        <li><a href="#">AI-капсулы</a></li>
                        <li><a href="#">Как работает</a></li>
                        <li><a href="#">Партнерам</a></li>
                    </ul>
                    <div className="mobile-buttons">
                        <button className="login-btn">Войти</button>
                        <button className="whatsapp-btn">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            Связаться в WhatsApp
                        </button>
                        <button className="consult-btn">Заказать консультацию</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;