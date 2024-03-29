import React from "react";
import { Link } from "react-router-dom";

function ProductItem(item) {
  const { image, name, _id, price, quantity } = item;
  //const [state, dispatch] = useStoreContext();

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={process.env.PUBLIC_URL + `/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} in stock</div>
        <span>Rs.{price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
