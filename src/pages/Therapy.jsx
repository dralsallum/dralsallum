import React, { useEffect } from "react";
import { Footer, NavTech, Post, Relate } from "../components";

const Therapy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Post />
      <Relate />
      <Footer />
    </>
  );
};

export default Therapy;
