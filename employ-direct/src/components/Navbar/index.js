import React from "react";
import Search from "../Search";

function Navbar({children}) {
  return (
    <nav className="navbar navbar-light bg-light">
        {children}
      </nav>
  );
}

export default Navbar;