import React from "react";
import starIcon from "../assets/star.svg";
import "../styles/searchbar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="input-wrapper">
        <input type="text" placeholder="Ваша сфера деятельности" />
        <img src={starIcon} alt="star" className="star-icon" />
      </div>
      <button className="select-btn">Подобрать AI капсулу</button>
    </div>
  );
};

export default SearchBar;
