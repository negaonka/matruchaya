import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    return (
      <ul className="flex-row">
        <li className="mx-1"></li>
      </ul>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          Matruchaya
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
