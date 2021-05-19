import React from "react";
import { Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="main-header">
      <h1 style={{ fontFamily: "Impact" }}>Travel App</h1>

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
