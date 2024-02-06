import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        <h2>{currentProduct.name}</h2>

        <p>{currentProduct.description}</p>

        <p>
          <strong>Price:</strong>${currentProduct.price}{" "}
        </p>

        <img
          src={`/images/${currentProduct.image}`}
          alt={currentProduct.name}
        />
      </div>
    </>
  );
}

export default Detail;
