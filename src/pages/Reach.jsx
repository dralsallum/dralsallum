import React, { useEffect } from "react";
import { Footer, Contact, NavTech } from "../components";

const Reach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Contact />
      <Footer />
    </>
  );
};

export default Reach;
