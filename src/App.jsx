import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import WhyAI from "./components/WhyAI";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
            <HowItWorks />
            <WhyAI />
            <CTA />
            <Footer />
        </>
    );
}

export default App;
