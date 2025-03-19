import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <div className="headerContainer">
      <Header />
      <section id="home"><Home /></section>
      </div>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="gallery"><Gallery /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;
