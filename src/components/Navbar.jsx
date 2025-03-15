import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";
import whatsappIcon from "../assets/whatsapp.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="T-Caps Logo" />
                <span>T-Caps</span>
            </div>
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
        </nav>
    );
};

export default Navbar;
