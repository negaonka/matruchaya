import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <div className="px-2">
        <img src="/images/matruchayalogo.jpg" width={"100%"} height={"600px"} />
      </div>
      <div className="container">
        <ProductList />
      </div>
    </>
  );
};

export default Home;
