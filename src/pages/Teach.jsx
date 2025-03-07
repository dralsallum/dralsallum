import React, { useEffect } from "react";
import { Footer, Learning, NavTech } from "../components";

const Teach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Learning />
      <Footer />
    </>
  );
};

export default Teach;
