import React, { useEffect } from "react";
import { Footer, NavTech, Rights } from "../components";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Rights />
      <Footer />
    </>
  );
};

export default Policy;
