import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
    </>
  );
}

export default App;
