import React, { useEffect, useState } from "react";
import { Course, Footer, NavTech } from "../components";

const Lesson = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Course />
      <Footer />
    </>
  );
};

export default Lesson;
