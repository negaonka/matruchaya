import React, { useEffect } from "react";

import ProductItem from "../ProductItem";

function ProductList() {
  const products = [
    {
      name: "Chakli",
      image: "chakli.jpg",
      price: 150,
      quantity: 2,
    },
    {
      name: "Bangali Khaja",
      image: "khaja.jpg",
      price: 200,
      quantity: 500,
    },
    {
      name: "Laddoo",
      image: "laddoo.jpg",
      price: 500,
      quantity: 20,
    },
    {
      name: "Khobra vadi",
      image: "vadi.jpg",
      price: 400,
      quantity: 50,
    },
  ];
  return (
    <>
      <div className="my-2">
        {products.length ? (
          <div className="flex-row">
            {products.map((product) => (
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
      </div>
    </>
  );
}

export default ProductList;
