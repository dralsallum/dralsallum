import { useEffect } from "react";
import { Apply, Footer, NavTech } from "../components";

const Upload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavTech />
      <Apply />
      <Footer />
    </>
  );
};

export default Upload;
