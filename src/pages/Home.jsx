import React, { useEffect } from "react";
import { Article, Footer, Last, Very } from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Very />
      <Last />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
