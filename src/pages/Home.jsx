import React, { useEffect } from "react";
import { About, Banner, Body, Footer, NavTech, Slider } from "../components";
import Header from "../components/Very/Very";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <NavTech />
      <Header />
      <Slider />
      <Body />
      <About />
      <Footer />
    </>
  );
};

export default Home;
