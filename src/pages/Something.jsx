import React, { useEffect } from "react";
import { Footer, NavTech, Resume } from "../components";

const Something = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Resume />
      <Footer />
    </>
  );
};

export default Something;
