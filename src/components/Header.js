import React from "react";
import { Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="main-header">
      <h1 >Purlieu </h1>

      <nav>
        {/* <Nav /> */}
        <Link className="navBarLink" to="/">
          Home
        </Link>
      </nav>
    </header>
  );
}

export default Header;