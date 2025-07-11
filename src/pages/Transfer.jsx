import React, { useEffect, useState } from "react";
import { Footer, Money, NavTech } from "../components";

const Transfer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavTech />
      <Money />
      <Footer />
    </>
  );
};

export default Transfer;
