import React from "react";
import ProductList from "../components/ProductList";
import About from "../components/AboutContent";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="px-2">
        <img
          src={process.env.PUBLIC_URL + "/images/matruchayalogo.jpg"}
          width={"100%"}
          height={"600px"}
        />
      </div>
      <div className="container">
        <ProductList />
        <About />
      </div>
    </>
  );
};

export default Home;
