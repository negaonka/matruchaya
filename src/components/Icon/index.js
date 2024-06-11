import React from "react";
import { Link } from "react-router-dom";

function Icon(item) {
  const { key, _id, href, src } = item;
  //const [state, dispatch] = useStoreContext();

  return (
    <div className="card px-1 py-1">
      <a id="social-icon" href={href}>
        <img src={process.env.PUBLIC_URL + `/images/${src}`} alt="" />
      </a>
    </div>
  );
}

export default Icon;
