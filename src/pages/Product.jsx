import { useEffect, useState } from "react";
import { Footer, NavTech, Products } from "../components";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavTech />
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </>
  );
};

export default Product;
