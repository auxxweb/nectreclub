import React from "react";
import Navbar from "./navbar";
import Banner from "./Banner";
import FlashNews from "./Flash";
import Request from "./Request";
import Footer from "./Footer";
import Carousel2 from "./Carousel2";
import Reports from "./Reports";
import EnterprenurSection from './Reviews'
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div>
      <header className="App-header">
      <Navbar />
      <Banner />
      <FlashNews />
      <Carousel2/>
      <Reports/>
      <Request />
      <ContactForm/>
      {/* <EnterprenurSection/> */}
      <Footer />
      </header>
    </div>
  );
};

export default Home;
